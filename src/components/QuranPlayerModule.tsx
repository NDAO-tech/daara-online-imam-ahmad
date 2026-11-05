import React, { useState, useEffect, useRef } from 'react';
import { PRELOADED_SURAHS, ALL_SURAHS_INDEX } from '../data/quranSurahs';
import { Ayah, Surah, UserProgress, VirtualClassroom } from '../types/quran';
import { DEFAULT_CLASSROOMS } from '../utils/storage';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Volume2,
  Bookmark,
  CheckCircle2,
  Sliders,
  Type,
  Eye,
  Info,
  Clock,
  Repeat,
  Video,
  MessageCircle,
  Settings,
  ExternalLink,
  Users,
  Plus
} from 'lucide-react';
import { VirtualClassroomModal } from './VirtualClassroomModal';

interface QuranPlayerModuleProps {
  progress: UserProgress;
  onUpdateProgress: (newProgress: Partial<UserProgress>) => void;
}

export const QuranPlayerModule: React.FC<QuranPlayerModuleProps> = ({
  progress,
  onUpdateProgress
}) => {
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [currentSurah, setCurrentSurah] = useState<Surah>(PRELOADED_SURAHS[1]);
  const [currentAyahIndex, setCurrentAyahIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [reciter, setReciter] = useState<'minshawi_child' | 'husary' | 'alafasy'>('minshawi_child');

  // Looper & Memorization parameters
  const [repeatCountPerAyah, setRepeatCountPerAyah] = useState<number>(1);
  const [currentRepeatIteration, setCurrentRepeatIteration] = useState<number>(1);
  const [pauseBetweenRepeats, setPauseBetweenRepeats] = useState<number>(0); // in seconds
  const [isWaitingPause, setIsWaitingPause] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  // Display toggles
  const [showPhonetics, setShowPhonetics] = useState<boolean>(true);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [arabicFontSize, setArabicFontSize] = useState<number>(32); // in px
  const [isLoadingSurah, setIsLoadingSurah] = useState<boolean>(false);

  // Audio reference
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayahRefs = useRef<(HTMLDivElement | null)[]>([]);

  // When surah changes, load preloaded or fetch online
  useEffect(() => {
    if (PRELOADED_SURAHS[selectedSurahNumber]) {
      setCurrentSurah(PRELOADED_SURAHS[selectedSurahNumber]);
      setCurrentAyahIndex(0);
      setCurrentRepeatIteration(1);
      setIsPlaying(false);
    } else {
      // Fetch online from public AlQuran Cloud API
      setIsLoadingSurah(true);
      fetch(`https://api.alquran.cloud/v1/surah/${selectedSurahNumber}/editions/quran-uthmani,fr.hamidullah,en.transliteration`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data && Array.isArray(data.data) && data.data.length >= 2) {
            const uthmaniEdition = data.data[0];
            const frEdition = data.data[1];
            const meta = ALL_SURAHS_INDEX.find((s) => s.number === selectedSurahNumber);

            const loadedAyahs: Ayah[] = uthmaniEdition.ayahs.map((a: any, idx: number) => {
              const surahPad = String(selectedSurahNumber).padStart(3, '0');
              const ayahPad = String(a.numberInSurah).padStart(3, '0');

              return {
                numberInSurah: a.numberInSurah,
                textArabic: a.text,
                textPhonetic: `Verset ${a.numberInSurah}`,
                textTranslationFr: frEdition.ayahs[idx]?.text || '',
                audioHusary: `https://everyayah.com/data/Husary_128kbps/${surahPad}${ayahPad}.mp3`,
                audioAlafasy: `https://everyayah.com/data/Alafasy_128kbps/${surahPad}${ayahPad}.mp3`,
                audioMinshawiChild: `https://everyayah.com/data/Minshawy_Teacher_128kbps/${surahPad}${ayahPad}.mp3`
              };
            });

            setCurrentSurah({
              number: selectedSurahNumber,
              nameArabic: uthmaniEdition.name,
              nameTransliterated: meta?.nameTransliterated || uthmaniEdition.englishName,
              nameFrench: meta?.nameFrench || uthmaniEdition.englishNameTranslation,
              revelationType: uthmaniEdition.revelationType === 'Meccan' ? 'Mecquoise' : 'Médinoise',
              totalAyahs: uthmaniEdition.numberOfAyahs,
              descriptionFr: `Chapitre n° ${selectedSurahNumber} du Saint Coran. Révélé à ${uthmaniEdition.revelationType === 'Meccan' ? 'La Mecque' : 'Médine'}.`,
              ayahs: loadedAyahs
            });
            setCurrentAyahIndex(0);
            setCurrentRepeatIteration(1);
            setIsPlaying(false);
          }
        })
        .catch((err) => {
          console.error('Failed to load surah', err);
        })
        .finally(() => {
          setIsLoadingSurah(false);
        });
    }
  }, [selectedSurahNumber]);

  // Audio playback handler
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.playbackRate = playbackRate;

    const currentAyah = currentSurah.ayahs[currentAyahIndex];
    if (!currentAyah) return;

    const surahPad = String(currentSurah.number).padStart(3, '0');
    const ayahPad = String(currentAyah.numberInSurah).padStart(3, '0');

    let audioUrl: string | undefined;
    if (reciter === 'minshawi_child') {
      audioUrl = currentAyah.audioMinshawiChild || `https://everyayah.com/data/Minshawy_Teacher_128kbps/${surahPad}${ayahPad}.mp3`;
    } else if (reciter === 'husary') {
      audioUrl = currentAyah.audioHusary || `https://everyayah.com/data/Husary_128kbps/${surahPad}${ayahPad}.mp3`;
    } else {
      audioUrl = currentAyah.audioAlafasy || `https://everyayah.com/data/Alafasy_128kbps/${surahPad}${ayahPad}.mp3`;
    }

    if (audioUrl && audio.src !== audioUrl) {
      audio.src = audioUrl;
    }

    if (isPlaying && !isWaitingPause) {
      audio.play().catch((err) => {
        console.warn('Audio play was prevented or aborted', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    // Scroll active ayah smoothly into view
    if (ayahRefs.current[currentAyahIndex]) {
      ayahRefs.current[currentAyahIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }

    const handleEnded = () => {
      // Handle repeat loop
      if (currentRepeatIteration < repeatCountPerAyah) {
        if (pauseBetweenRepeats > 0) {
          setIsWaitingPause(true);
          setTimeout(() => {
            setIsWaitingPause(false);
            setCurrentRepeatIteration((prev) => prev + 1);
            audio.currentTime = 0;
            audio.play().catch(() => {});
          }, pauseBetweenRepeats * 1000);
        } else {
          setCurrentRepeatIteration((prev) => prev + 1);
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      } else {
        // Move to next ayah
        if (currentAyahIndex < currentSurah.ayahs.length - 1) {
          if (pauseBetweenRepeats > 0) {
            setIsWaitingPause(true);
            setTimeout(() => {
              setIsWaitingPause(false);
              setCurrentAyahIndex((prev) => prev + 1);
              setCurrentRepeatIteration(1);
            }, pauseBetweenRepeats * 1000);
          } else {
            setCurrentAyahIndex((prev) => prev + 1);
            setCurrentRepeatIteration(1);
          }
        } else {
          // Reached end of surah
          setIsPlaying(false);
          setCurrentRepeatIteration(1);
        }
      }
    };

    audio.onended = handleEnded;

    return () => {
      audio.onended = null;
    };
  }, [
    currentAyahIndex,
    isPlaying,
    isWaitingPause,
    currentRepeatIteration,
    repeatCountPerAyah,
    pauseBetweenRepeats,
    reciter,
    playbackRate,
    currentSurah
  ]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectAyah = (index: number) => {
    setCurrentAyahIndex(index);
    setCurrentRepeatIteration(1);
    setIsPlaying(true);
  };

  const handleNextAyah = () => {
    if (currentAyahIndex < currentSurah.ayahs.length - 1) {
      setCurrentAyahIndex((prev) => prev + 1);
      setCurrentRepeatIteration(1);
    }
  };

  const handlePrevAyah = () => {
    if (currentAyahIndex > 0) {
      setCurrentAyahIndex((prev) => prev - 1);
      setCurrentRepeatIteration(1);
    }
  };

  const isCurrentSurahMemorized = progress.memorizedSurahIds.includes(currentSurah.number);
  const toggleSurahMemorized = () => {
    if (isCurrentSurahMemorized) {
      onUpdateProgress({
        memorizedSurahIds: progress.memorizedSurahIds.filter((id) => id !== currentSurah.number)
      });
    } else {
      onUpdateProgress({
        memorizedSurahIds: [...progress.memorizedSurahIds, currentSurah.number]
      });
    }
  };

  const isCurrentAyahBookmarked =
    progress.bookmarkedAyah?.surahNumber === currentSurah.number &&
    progress.bookmarkedAyah?.ayahNumber === currentAyahIndex + 1;

  const toggleBookmarkCurrentAyah = () => {
    if (isCurrentAyahBookmarked) {
      onUpdateProgress({ bookmarkedAyah: null });
    } else {
      onUpdateProgress({
        bookmarkedAyah: {
          surahNumber: currentSurah.number,
          ayahNumber: currentAyahIndex + 1
        }
      });
    }
  };

  const classrooms: VirtualClassroom[] =
    progress.classrooms && progress.classrooms.length > 0
      ? progress.classrooms
      : DEFAULT_CLASSROOMS;

  const activeClassroom: VirtualClassroom =
    classrooms.find((c) => c.id === progress.activeClassroomId) || classrooms[0];

  const [isClassroomModalOpen, setIsClassroomModalOpen] = useState<boolean>(false);
  const [editingClassroom, setEditingClassroom] = useState<VirtualClassroom | null>(null);

  const handleSelectClassroom = (id: string) => {
    onUpdateProgress({ activeClassroomId: id });
  };

  const handleOpenCreateClassroom = () => {
    setEditingClassroom(null);
    setIsClassroomModalOpen(true);
  };

  const handleOpenEditClassroom = () => {
    setEditingClassroom(activeClassroom);
    setIsClassroomModalOpen(true);
  };

  const handleSaveClassroom = (room: VirtualClassroom) => {
    const existingIndex = classrooms.findIndex((c) => c.id === room.id);
    let updated: VirtualClassroom[];
    if (existingIndex >= 0) {
      updated = classrooms.map((c) => (c.id === room.id ? room : c));
    } else {
      updated = [...classrooms, room];
    }
    onUpdateProgress({
      classrooms: updated,
      activeClassroomId: room.id
    });
  };

  const handleDeleteClassroom = (id: string) => {
    const remaining = classrooms.filter((c) => c.id !== id);
    const nextList = remaining.length > 0 ? remaining : DEFAULT_CLASSROOMS;
    onUpdateProgress({
      classrooms: nextList,
      activeClassroomId: nextList[0].id
    });
  };

  const handleOpenMeet = () => {
    const raw = activeClassroom?.meetUrl || 'https://meet.google.com/new';
    const url = raw.startsWith('http') ? raw : `https://${raw}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsapp = () => {
    const raw = activeClassroom?.whatsappUrl || 'https://chat.whatsapp.com/';
    const url = raw.startsWith('http') ? raw : `https://${raw}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [surahSearchQuery, setSurahSearchQuery] = useState<string>('');

  const filteredSurahsIndex = ALL_SURAHS_INDEX.filter((s) => {
    if (!surahSearchQuery.trim()) return true;
    const q = surahSearchQuery.toLowerCase();
    return (
      s.number.toString().includes(q) ||
      s.nameTransliterated.toLowerCase().includes(q) ||
      s.nameFrench.toLowerCase().includes(q) ||
      s.nameArabic.includes(q)
    );
  });

  return (
    <div className="space-y-6 pb-24">
      {/* Virtual Classroom Live Room Banner (Multiple Classrooms, Meet & WhatsApp) */}
      <section className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white rounded-2xl border border-emerald-700/50 p-5 shadow-lg relative overflow-hidden space-y-4">
        {/* Top bar: Header & Classroom Selector Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-800/60 pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" />
            <Users className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>Salles de Cours Virtuels en Direct ({classrooms.length} salle{classrooms.length > 1 ? 's' : ''})</span>
          </div>

          {/* Classroom Selector Pills & Add Button */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            {classrooms.map((room) => {
              const isSelected = room.id === activeClassroom.id;
              return (
                <button
                  key={room.id}
                  onClick={() => handleSelectClassroom(room.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-800/80 text-emerald-100 hover:bg-slate-700 hover:text-white border border-emerald-800/50'
                  }`}
                  title={room.name}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-slate-950' : 'bg-emerald-400'}`} />
                  <span className="truncate max-w-[150px]">{room.name}</span>
                </button>
              );
            })}

            <button
              onClick={handleOpenCreateClassroom}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-700/70 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 border border-emerald-500/40 transition-colors cursor-pointer shrink-0"
              title="Créer une nouvelle salle de cours"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nouvelle salle</span>
            </button>
          </div>
        </div>

        {/* Selected Classroom Details and Meet/WhatsApp actions */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-white flex items-center gap-2">
              <span>{activeClassroom.name}</span>
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-emerald-100/90">
              <span>Enseignant(e) : <strong className="text-white">{activeClassroom.teacherName}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Horaires : {activeClassroom.scheduleText}</span>
              {activeClassroom.description && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-300 italic">{activeClassroom.description}</span>
                </>
              )}
            </div>
          </div>

          {/* Action Launcher Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Google Meet Button */}
            <button
              onClick={handleOpenMeet}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              title="Ouvrir la salle vidéo Google Meet de ce cours"
            >
              <Video className="w-4 h-4 text-slate-950" />
              <span>Rejoindre sur Meet</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleOpenWhatsapp}
              className="px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-500/60 text-white font-semibold text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              title="Contacter l'enseignant ou rejoindre le groupe WhatsApp de cette salle"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Groupe WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Edit / Settings Button */}
            <button
              onClick={handleOpenEditClassroom}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-600/60 text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              title="Modifier les informations, liens Meet & WhatsApp de cette salle"
            >
              <Settings className="w-4 h-4" />
              <span className="text-xs hidden sm:inline">Paramètres</span>
            </button>
          </div>
        </div>
      </section>

      {/* Surah Selector & Configuration Top Bar (114 Surahs) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        {/* Fast Search & Dropdown across all 114 Surahs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold font-mono text-base shadow-sm shrink-0">
              {currentSurah.number}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <select
                  value={selectedSurahNumber}
                  onChange={(e) => setSelectedSurahNumber(Number(e.target.value))}
                  className="text-lg sm:text-xl font-bold text-slate-900 bg-transparent border-0 border-b-2 border-emerald-600 focus:ring-0 focus:border-emerald-700 cursor-pointer pr-8 font-serif"
                >
                  {filteredSurahsIndex.map((s) => (
                    <option key={s.number} value={s.number}>
                      {s.number}. {s.nameTransliterated} ({s.nameArabic}) — {s.nameFrench} ({s.totalAyahs} v.)
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Sourate {currentSurah.revelationType} · {currentSurah.totalAyahs} versets · 114 sourates disponibles
              </p>
            </div>
          </div>

          {/* Quick Search Input */}
          <div className="flex items-center gap-2 self-start lg:self-auto w-full lg:w-auto">
            <input
              type="text"
              value={surahSearchQuery}
              onChange={(e) => setSurahSearchQuery(e.target.value)}
              placeholder="Rechercher une sourate (ex: Yasin, 36, Mulk...)"
              className="p-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 w-full sm:w-72 focus:bg-white focus:ring-2 focus:ring-emerald-500"
            />
            {surahSearchQuery && (
              <button
                onClick={() => setSurahSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-1 font-bold"
              >
                ✕
              </button>
            )}

            <button
              onClick={toggleSurahMemorized}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                isCurrentSurahMemorized
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">{isCurrentSurahMemorized ? 'Mémorisée' : 'Marquer mémorisée'}</span>
            </button>

            <button
              onClick={toggleBookmarkCurrentAyah}
              className={`p-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer shrink-0 ${
                isCurrentAyahBookmarked
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title={isCurrentAyahBookmarked ? 'Signet enregistré' : 'Poser un marque-page ici'}
            >
              <Bookmark className={`w-4 h-4 ${isCurrentAyahBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Quick jump popular surah pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
          <span className="text-slate-400 font-medium shrink-0">Accès rapide :</span>
          {[
            { num: 1, label: 'Al-Fâtiha' },
            { num: 2, label: 'Al-Baqarah' },
            { num: 18, label: 'Al-Kahf' },
            { num: 36, label: 'Yâ-Sîn' },
            { num: 55, label: 'Ar-Rahmân' },
            { num: 56, label: 'Al-Wâqi\'ah' },
            { num: 67, label: 'Al-Mulk' },
            { num: 78, label: 'An-Naba (Juz Amma)' },
            { num: 112, label: 'Al-Ikhlâs' }
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => setSelectedSurahNumber(item.num)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedSurahNumber === item.num
                  ? 'bg-emerald-700 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Description of the Surah */}
        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
          <strong className="text-slate-800">Méditation & Contexte :</strong> {currentSurah.descriptionFr}
        </p>

        {/* Toolbar: Display Settings & Looper Settings */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
          {/* Display toggles */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              Affichage :
            </span>
            <button
              onClick={() => setShowPhonetics(!showPhonetics)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                showPhonetics ? 'bg-emerald-100 text-emerald-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Phonétique
            </button>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                showTranslation ? 'bg-emerald-100 text-emerald-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Traduction
            </button>
          </div>

          {/* Reciter Selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">
              <Volume2 className="w-3.5 h-3.5" />
              Récitateur :
            </span>
            <button
              onClick={() => setReciter('minshawi_child')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                reciter === 'minshawi_child'
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              title="Sheikh Mohamed Siddiq Al-Minshawi avec répétition de l'enfant (Al-Mushaf Al-Mu'allim)"
            >
              <span>Sh. Al-Minshawi (avec l'enfant)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                reciter === 'minshawi_child' ? 'bg-amber-300 text-slate-950' : 'bg-emerald-100 text-emerald-800'
              }`}>
                Pédagogique
              </span>
            </button>
            <button
              onClick={() => setReciter('husary')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                reciter === 'husary'
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Sh. Al-Husary (Tajweed)
            </button>
            <button
              onClick={() => setReciter('alafasy')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                reciter === 'alafasy'
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Sh. Alafasy (Mélodieux)
            </button>
          </div>

          {/* Arabic Font Size adjustment */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Taille :</span>
            <button
              onClick={() => setArabicFontSize(Math.max(24, arabicFontSize - 4))}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
            >
              A-
            </button>
            <span className="font-mono text-slate-600">{arabicFontSize}px</span>
            <button
              onClick={() => setArabicFontSize(Math.min(48, arabicFontSize + 4))}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold cursor-pointer"
            >
              A+
            </button>
          </div>
        </div>

        {/* Looper Memorization Bar */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-amber-950 font-semibold">
            <Repeat className="w-4 h-4 text-amber-700" />
            <span>Mode Répétiteur de Mémorisation (Hifz) :</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-900">Répéter chaque verset :</span>
              <div className="flex items-center gap-1">
                {[1, 3, 5, 7, 10].map((times) => (
                  <button
                    key={times}
                    onClick={() => {
                      setRepeatCountPerAyah(times);
                      setCurrentRepeatIteration(1);
                    }}
                    className={`px-2 py-1 rounded font-medium cursor-pointer ${
                      repeatCountPerAyah === times
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-white text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    {times}x
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-amber-900">Pause pour réciter :</span>
              <select
                value={pauseBetweenRepeats}
                onChange={(e) => setPauseBetweenRepeats(Number(e.target.value))}
                className="bg-white border border-amber-300 rounded px-2 py-1 text-amber-950 cursor-pointer"
              >
                <option value={0}>Aucune pause</option>
                <option value={2}>2 secondes</option>
                <option value={4}>4 secondes</option>
                <option value={7}>7 secondes</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Loading state indicator */}
      {isLoadingSurah && (
        <div className="p-8 text-center text-sm text-slate-500 bg-white rounded-2xl border border-slate-200">
          Chargement de la sourate depuis les archives coraniques...
        </div>
      )}

      {/* Bismillah Header (except for Surah At-Tawbah n° 9) */}
      {currentSurah.number !== 9 && !isLoadingSurah && (
        <div className="text-center py-6">
          <p className="text-3xl sm:text-4xl font-arabic text-emerald-950 font-bold" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-xs text-slate-400 mt-2 italic font-serif">
            Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux
          </p>
        </div>
      )}

      {/* List of Ayahs */}
      <div className="space-y-4">
        {currentSurah.ayahs.map((ayah, index) => {
          const isActive = currentAyahIndex === index;

          return (
            <div
              key={ayah.numberInSurah}
              ref={(el) => {
                ayahRefs.current[index] = el;
              }}
              onClick={() => handleSelectAyah(index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${
                isActive
                  ? 'bg-emerald-50/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Ayah header: Number + Play trigger */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {ayah.numberInSurah}
                  </div>
                  {isActive && (
                    <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                      {isWaitingPause ? (
                        <>
                          <Clock className="w-3.5 h-3.5 animate-spin" />
                          <span>Votre tour : Récitez à voix haute...</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                          <span>
                            Répétition {currentRepeatIteration} / {repeatCountPerAyah}
                          </span>
                        </>
                      )}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectAyah(index);
                    }}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive && isPlaying
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    title="Écouter ce verset"
                  >
                    {isActive && isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Arabic Calligraphy Verse */}
              <div className="text-right py-2" dir="rtl">
                <p
                  className="font-arabic font-bold text-slate-900 leading-[2.2] tracking-wide select-text"
                  style={{ fontSize: `${arabicFontSize}px` }}
                >
                  <span>{ayah.textArabic}</span>
                  {/* Traditional Quranic Ayah End Ornament */}
                  <span className="inline-flex items-center justify-center font-arabic text-emerald-800 mr-2 text-2xl">
                    ۝
                  </span>
                </p>
              </div>

              {/* Phonetic Transliteration */}
              {showPhonetics && (
                <div className="pt-1 text-slate-600 text-sm font-medium">
                  <span className="text-slate-400 text-xs mr-2 font-mono">Phonétique :</span>
                  <span>{ayah.textPhonetic}</span>
                </div>
              )}

              {/* French Translation */}
              {showTranslation && (
                <div className="text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-2">
                  <span className="text-slate-400 text-xs mr-2 font-mono">Sens en français :</span>
                  <span>{ayah.textTranslationFr}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Audio Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Current Ayah Info */}
          <div className="flex items-center gap-3 truncate max-w-[220px] sm:max-w-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
              {currentAyahIndex + 1}
            </div>
            <div className="truncate text-xs">
              <span className="font-semibold text-slate-900 truncate block">
                {currentSurah.nameTransliterated} — Verset {currentAyahIndex + 1}
              </span>
              <span className="text-slate-500 truncate block">
                {reciter === 'minshawi_child'
                  ? "Sheikh Al-Minshawi (avec l'enfant)"
                  : reciter === 'husary'
                  ? 'Sheikh Al-Husary'
                  : 'Sheikh Alafasy'}
                {repeatCountPerAyah > 1 && ` (Rép. ${currentRepeatIteration}/${repeatCountPerAyah})`}
              </span>
            </div>
          </div>

          {/* Central Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevAyah}
              disabled={currentAyahIndex === 0}
              className="p-2 text-slate-600 hover:text-slate-900 disabled:opacity-30 cursor-pointer"
              title="Verset précédent"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="w-12 h-12 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
              title={isPlaying ? 'Pause' : 'Lecture'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>

            <button
              onClick={handleNextAyah}
              disabled={currentAyahIndex === currentSurah.ayahs.length - 1}
              className="p-2 text-slate-600 hover:text-slate-900 disabled:opacity-30 cursor-pointer"
              title="Verset suivant"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 hidden sm:inline">Vitesse :</span>
            {[0.85, 1, 1.25].map((rate) => (
              <button
                key={rate}
                onClick={() => setPlaybackRate(rate)}
                className={`px-2 py-1 rounded text-xs font-medium cursor-pointer ${
                  playbackRate === rate ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Classroom Configuration Modal */}
      <VirtualClassroomModal
        isOpen={isClassroomModalOpen}
        onClose={() => setIsClassroomModalOpen(false)}
        classroom={editingClassroom}
        onSaveClassroom={handleSaveClassroom}
        onDeleteClassroom={handleDeleteClassroom}
      />
    </div>
  );
};
