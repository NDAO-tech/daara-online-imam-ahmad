import React, { useState } from 'react';
import { ARABIC_LETTERS, VOWELS_DATA } from '../data/arabicAlphabet';
import { ArabicLetter } from '../types/quran';
import { Volume2, CheckCircle2, Circle, Sparkles, Info, BookOpen, Layers } from 'lucide-react';
import { playArabicSpeech } from '../utils/audioPlayer';
import { NourAlBayanReader } from './NourAlBayanReader';

interface AlphabetModuleProps {
  learnedLetterIds: number[];
  onToggleLearnedLetter: (letterId: number) => void;
  completedNourLessonIds: string[];
  onToggleNourLesson: (lessonId: string) => void;
}

export const AlphabetModule: React.FC<AlphabetModuleProps> = ({
  learnedLetterIds,
  onToggleLearnedLetter,
  completedNourLessonIds,
  onToggleNourLesson
}) => {
  const [activeTab, setActiveTab] = useState<'nour' | 'letters' | 'vowels' | 'makharij'>('nour');
  const [filter, setFilter] = useState<'all' | 'heavy' | 'sun' | 'moon' | 'throat'>('all');
  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter>(ARABIC_LETTERS[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const filteredLetters = ARABIC_LETTERS.filter((letter) => {
    if (filter === 'heavy') return letter.isHeavy;
    if (filter === 'sun') return letter.isSunLetter;
    if (filter === 'moon') return !letter.isSunLetter;
    if (filter === 'throat') return letter.makhraj.zone === 'Gorge';
    return true;
  });

  const handlePlayLetter = async (letter: ArabicLetter) => {
    setIsPlayingAudio(true);
    await playArabicSpeech(letter.nameArabic);
    setIsPlayingAudio(false);
  };

  const handlePlayWord = async (word: string) => {
    setIsPlayingAudio(true);
    await playArabicSpeech(word);
    setIsPlayingAudio(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
            <span>Niveau 1 — Al-Qawa'id</span>
            <span aria-hidden="true">·</span>
            <span>Fondation de la lecture</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
            L'Alphabet Arabe & Les Points d'Articulation
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Apprenez à reconnaître chaque lettre sous ses différentes formes et à la prononcer selon les règles de phonétique coranique.
          </p>
        </div>

        {/* Tab switch buttons (Segmented control) */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('nour')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'nour' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Mon PDF « Nouroul Bayan »</span>
          </button>
          <button
            onClick={() => setActiveTab('letters')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'letters' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Les 28 Lettres ({learnedLetterIds.length}/28)
          </button>
          <button
            onClick={() => setActiveTab('vowels')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'vowels' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Les Voyelles (Harakât)
          </button>
          <button
            onClick={() => setActiveTab('makharij')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'makharij' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Makhârij (Sorties)
          </button>
        </div>
      </div>

      {/* Tab 1: Nour Al-Bayan Book */}
      {activeTab === 'nour' && (
        <NourAlBayanReader
          completedLessonIds={completedNourLessonIds}
          onToggleLessonCompleted={onToggleNourLesson}
        />
      )}

      {activeTab === 'letters' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Main Section: Grid of Letters */}
          <div className="lg:col-span-7 space-y-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Toutes ({ARABIC_LETTERS.length})
              </button>
              <button
                onClick={() => setFilter('heavy')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filter === 'heavy' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Emphatiques / Lourdes (7)
              </button>
              <button
                onClick={() => setFilter('throat')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filter === 'throat' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lettres de la Gorge (6)
              </button>
              <button
                onClick={() => setFilter('sun')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filter === 'sun' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Solaires (14)
              </button>
              <button
                onClick={() => setFilter('moon')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  filter === 'moon' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lunaires (14)
              </button>
            </div>

            {/* Letters Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
              {filteredLetters.map((letter) => {
                const isSelected = selectedLetter.id === letter.id;
                const isLearned = learnedLetterIds.includes(letter.id);

                return (
                  <button
                    key={letter.id}
                    onClick={() => {
                      setSelectedLetter(letter);
                      handlePlayLetter(letter);
                    }}
                    className={`relative p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[96px] ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/30'
                        : isLearned
                        ? 'border-slate-200 bg-emerald-50/20 hover:border-emerald-300'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Badge top indicator */}
                    <div className="w-full flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono tabular-nums">{letter.id}</span>
                      {isLearned ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <span className="w-2" />
                      )}
                    </div>

                    {/* Big Arabic character */}
                    <span className="text-3xl sm:text-4xl font-arabic font-bold text-slate-900 py-1" dir="rtl">
                      {letter.isolated}
                    </span>

                    {/* Letter Name */}
                    <span className="text-xs font-medium text-slate-700 truncate w-full">
                      {letter.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Section: Deep Dive Inspector for Selected Letter */}
          <div className="lg:col-span-5 sticky top-20 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-4xl font-arabic shadow-sm">
                  {selectedLetter.isolated}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900 font-serif">
                      {selectedLetter.name}
                    </h2>
                    <span className="text-sm font-arabic font-bold text-emerald-800">
                      ({selectedLetter.nameArabic})
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Son phonétique : <strong className="text-slate-800 font-mono">/{selectedLetter.transliteration}/</strong>
                  </p>
                </div>
              </div>

              {/* Audio Listen Button */}
              <button
                onClick={() => handlePlayLetter(selectedLetter)}
                disabled={isPlayingAudio}
                className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                title="Écouter la prononciation"
              >
                <Volume2 className="w-4 h-4" />
                <span>Écouter</span>
              </button>
            </div>

            {/* The 4 Written Positions */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Les 4 Formes d'Écriture
              </h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-2xl font-arabic text-emerald-950 font-bold block" dir="rtl">
                    {selectedLetter.isolated}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">Isolée</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-2xl font-arabic text-emerald-950 font-bold block" dir="rtl">
                    {selectedLetter.initial}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">Début</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-2xl font-arabic text-emerald-950 font-bold block" dir="rtl">
                    {selectedLetter.medial}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">Milieu</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-2xl font-arabic text-emerald-950 font-bold block" dir="rtl">
                    {selectedLetter.final}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">Fin</span>
                </div>
              </div>
            </div>

            {/* Makhraj & Phonetic guidance */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Point de sortie (Makhraj) :</span>
                <span className="font-medium text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                  {selectedLetter.makhraj.zone}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {selectedLetter.makhraj.description}
              </p>
              <div className="border-t border-slate-200/60 pt-2 text-slate-600">
                <strong className="text-slate-800">Conseil d'articulation :</strong> {selectedLetter.audioPhoneticDescription}
              </div>
            </div>

            {/* Example in Quran / Vocabulary */}
            <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-900">Exemple de mot :</span>
                <button
                  onClick={() => handlePlayWord(selectedLetter.exampleWord.arabic)}
                  className="text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Écouter le mot</span>
                </button>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-arabic font-bold text-amber-950" dir="rtl">
                  {selectedLetter.exampleWord.arabic}
                </span>
                <span className="text-xs text-amber-900">
                  {selectedLetter.exampleWord.transliteration} — « {selectedLetter.exampleWord.meaning} »
                </span>
              </div>
            </div>

            {/* Toggle Learned Button */}
            <button
              onClick={() => onToggleLearnedLetter(selectedLetter.id)}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                learnedLetterIds.includes(selectedLetter.id)
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm'
              }`}
            >
              {learnedLetterIds.includes(selectedLetter.id) ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lettre marquée comme apprise (Cliquer pour annuler)</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-emerald-200" />
                  <span>Marquer cette lettre comme apprise</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Vowels Tab */}
      {activeTab === 'vowels' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 font-serif">
                Les Signes Diacritiques & Voyelles (Al-Harakât)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                En arabe coranique, les consonnes prennent vie grâce aux voyelles brèves (Fatha, Kasra, Damma) et aux signes d'articulation (Soukoun, Shaddah, Tanween). Maîtriser ces signes est la clé pour lire avec fluidité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VOWELS_DATA.map((vowel, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-arabic font-bold text-emerald-800" dir="rtl">
                      {vowel.sign}
                    </span>
                    <div className="text-right">
                      <span className="text-xs font-arabic font-bold text-slate-400 block">{vowel.arabic}</span>
                      <span className="text-sm font-semibold text-slate-900">{vowel.name}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="font-medium text-emerald-900">
                      Son : <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">/{vowel.sound}/</span>
                    </p>
                    <p className="leading-relaxed">{vowel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Makharij Tab */}
      {activeTab === 'makharij' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 font-serif">
              Les 5 Grandes Régions d'Articulation (Makhârij Al-Hourouf)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              Chaque lettre coranique possède une adresse anatomique exacte. Les maîtres du Tajweed (comme Ibn Al-Jazari) ont répertorié 5 zones principales abritant 17 points de sortie spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
              <h3 className="font-semibold text-emerald-950 flex items-center justify-between">
                <span>1. Al-Jawf (Le Vide intérieur)</span>
                <span className="font-arabic text-emerald-800 font-bold">الجَوْف</span>
              </h3>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Le vide de la gorge et de la bouche. C'est le lieu d'émission des 3 voyelles longues (Alif précédé de Fatha, Waw précédé de Damma, Ya précédé de Kasra).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-sky-50/50 border border-sky-200 space-y-2">
              <h3 className="font-semibold text-sky-950 flex items-center justify-between">
                <span>2. Al-Halq (La Gorge)</span>
                <span className="font-arabic text-sky-800 font-bold">الحَلْق</span>
              </h3>
              <p className="text-xs text-sky-900 leading-relaxed">
                Comprend le fond (ء, هـ), le milieu (ع, ح) et le haut de la gorge (غ, خ). Ce sont les 6 lettres de l'Idhhâr Halqî.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
              <h3 className="font-semibold text-amber-950 flex items-center justify-between">
                <span>3. Al-Lisân (La Langue)</span>
                <span className="font-arabic text-amber-800 font-bold">اللِّسَان</span>
              </h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                La plus riche des zones (10 sorties pour 18 lettres !), divisée entre fond de langue (ق, ك), milieu (ج, ش, ي), bords (ض, ل) et bout de langue (ن, ر, ط, د, ت, ص, ز, س, ظ, ذ, ث).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2">
              <h3 className="font-semibold text-purple-950 flex items-center justify-between">
                <span>4. Ash-Shafatayn (Les Deux Lèvres)</span>
                <span className="font-arabic text-purple-800 font-bold">الشَّفَتَان</span>
              </h3>
              <p className="text-xs text-purple-900 leading-relaxed">
                Produit 4 lettres : le Fâ (ف) avec incisives et lèvre inférieure, et Bâ (ب), Mîm (م), Wâw (و) avec les deux lèvres réunies ou arrondies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200 space-y-2 md:col-span-2">
              <h3 className="font-semibold text-rose-950 flex items-center justify-between">
                <span>5. Al-Khayshoûm (La Cavité Nasale)</span>
                <span className="font-arabic text-rose-800 font-bold">الخَيْشُوم</span>
              </h3>
              <p className="text-xs text-rose-900 leading-relaxed">
                Le conduit nasal d'où s'échappe la résonance du nasillement (Al-Ghunnah), accompagnant obligatoirement le Noûn (ن) et le Mîm (م) lors des règles d'Idgham et d'Ikhfa.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
