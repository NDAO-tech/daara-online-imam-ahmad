import React, { useState, useEffect } from 'react';
import { UserProgress, VirtualClassroom } from '../types/quran';
import { DEFAULT_CLASSROOMS } from '../utils/storage';
import {
  Video,
  MessageCircle,
  Plus,
  Settings,
  Calendar,
  UserCheck,
  ExternalLink,
  BookOpen,
  Headphones,
  CheckCircle2,
  Trash2,
  Clock,
  Sparkles,
  Copy,
  Check,
  Loader2,
  X
} from 'lucide-react';
import { VirtualClassroomModal } from './VirtualClassroomModal';
import { SupportAndRulesSection } from './SupportAndRulesSection';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, createGoogleMeetSpace, getAccessToken } from '../services/googleMeet';
import { GoogleSignInButton } from './GoogleSignInButton';

interface ClassroomModuleProps {
  progress: UserProgress;
  onUpdateProgress: (newProgress: Partial<UserProgress>) => void;
  onNavigateToQuran?: () => void;
  onNavigateToAlphabet?: () => void;
}

export const ClassroomModule: React.FC<ClassroomModuleProps> = ({
  progress,
  onUpdateProgress,
  onNavigateToQuran,
  onNavigateToAlphabet
}) => {
  const classrooms: VirtualClassroom[] =
    progress.classrooms && progress.classrooms.length > 0
      ? progress.classrooms
      : DEFAULT_CLASSROOMS;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingClassroom, setEditingClassroom] = useState<VirtualClassroom | null>(null);
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isCreatingInstantMeet, setIsCreatingInstantMeet] = useState<boolean>(false);
  const [instantMeetUrl, setInstantMeetUrl] = useState<string | null>(null);
  const [copiedInstantMeet, setCopiedInstantMeet] = useState<boolean>(false);
  const [meetError, setMeetError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setGoogleUser(user);
      },
      () => {
        setGoogleUser(null);
      }
    );
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleGoogleLogin = async () => {
    setIsAuthLoading(true);
    setMeetError(null);
    try {
      const res = await googleSignIn();
      if (res?.user) {
        setGoogleUser(res.user);
      }
    } catch (err: any) {
      console.error('Google Sign In failed:', err);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await logout();
      setGoogleUser(null);
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  const handleCreateInstantMeet = async () => {
    setIsCreatingInstantMeet(true);
    setMeetError(null);
    try {
      let token = await getAccessToken();
      if (!token) {
        const res = await googleSignIn();
        token = res?.accessToken || null;
        if (res?.user) setGoogleUser(res.user);
      }
      if (!token) throw new Error('Authentification Google requise.');
      const space = await createGoogleMeetSpace(token);
      if (space.meetingUri) {
        setInstantMeetUrl(space.meetingUri);
      }
    } catch (err: any) {
      console.error('Instant meet error:', err);
      setMeetError(err.message || 'Impossible de créer la réunion Google Meet.');
    } finally {
      setIsCreatingInstantMeet(false);
    }
  };

  const handleCopyInstantMeet = () => {
    if (!instantMeetUrl) return;
    navigator.clipboard.writeText(instantMeetUrl);
    setCopiedInstantMeet(true);
    setTimeout(() => setCopiedInstantMeet(false), 2500);
  };

  const handleTurnInstantMeetIntoClassroom = () => {
    if (!instantMeetUrl) return;
    setEditingClassroom({
      id: `room_${Date.now()}`,
      name: `Séance Google Meet du ${new Date().toLocaleDateString('fr-FR')}`,
      teacherName: googleUser?.displayName || 'Oustadh',
      meetUrl: instantMeetUrl,
      whatsappUrl: 'https://chat.whatsapp.com/',
      scheduleText: 'Direct instantané',
      description: 'Salle créée avec Google Meet API'
    });
    setInstantMeetUrl(null);
    setIsModalOpen(true);
  };

  const handleCreateNew = () => {
    setEditingClassroom(null);
    setIsModalOpen(true);
  };

  const handleEdit = (room: VirtualClassroom) => {
    setEditingClassroom(room);
    setIsModalOpen(true);
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

  const openMeet = (url: string) => {
    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const openWhatsapp = (url: string) => {
    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-2xl border border-emerald-800/60 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Daara Imam Ahmad Online</span>
              <span aria-hidden="true">·</span>
              <span>Intégration Google Meet API & WhatsApp</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Salles de Cours & Google Meet
            </h1>

            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Créez des réunions Google Meet officielles en direct ou rejoignez les halaqat du Daara Imam Ahmad avec vos enseignants pour la récitation, la mémorisation et Nouroul Bayan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Google Authentication Button */}
            <GoogleSignInButton
              user={googleUser}
              isLoading={isAuthLoading}
              onSignIn={handleGoogleLogin}
              onSignOut={handleGoogleLogout}
            />

            {/* Instant Google Meet API button */}
            <button
              onClick={handleCreateInstantMeet}
              disabled={isCreatingInstantMeet}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              title="Générer une réunion Google Meet instantanée avec l'API"
            >
              {isCreatingInstantMeet ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Génération Meet...</span>
                </>
              ) : (
                <>
                  <Video className="w-4 h-4 text-slate-950" />
                  <span>Réunion Meet instantanée</span>
                </>
              )}
            </button>

            {/* Create Classroom button */}
            <button
              onClick={handleCreateNew}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-slate-950" />
              <span>Créer une salle</span>
            </button>
          </div>
        </div>

        {/* Instant Google Meet Created Banner */}
        {instantMeetUrl && (
          <div className="relative z-10 mt-6 p-4 rounded-xl bg-emerald-800/90 border border-emerald-400 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Check className="w-4 h-4" />
                <span>Réunion Google Meet officielle créée via l'API !</span>
              </div>
              <p className="font-mono text-sm font-bold text-emerald-100 select-all">
                {instantMeetUrl}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => openMeet(instantMeetUrl)}
                className="px-3.5 py-2 bg-white hover:bg-emerald-50 text-slate-950 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Video className="w-3.5 h-3.5 text-emerald-700" />
                <span>Rejoindre</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </button>

              <button
                onClick={handleCopyInstantMeet}
                className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-500 rounded-lg font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedInstantMeet ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-300" />
                    <span>Lien copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier le lien</span>
                  </>
                )}
              </button>

              <button
                onClick={handleTurnInstantMeetIntoClassroom}
                className="px-3.5 py-2 bg-emerald-900 hover:bg-emerald-950 text-amber-200 border border-emerald-600 rounded-lg font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Enregistrer comme salle permanente du Daara"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Enregistrer en salle de cours</span>
              </button>

              <button
                onClick={() => setInstantMeetUrl(null)}
                className="p-2 text-emerald-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                title="Fermer ce bandeau"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {meetError && (
          <div className="relative z-10 mt-4 p-3 rounded-xl bg-rose-900/80 border border-rose-500 text-white text-xs flex items-center justify-between">
            <span>{meetError}</span>
            <button onClick={() => setMeetError(null)} className="text-white font-bold ml-2">✕</button>
          </div>
        )}
      </section>

      {/* Grid of Classrooms */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
            <span>Vos Salles de Cours Disponibles</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-sans font-semibold px-2.5 py-0.5 rounded-full">
              {classrooms.length} salle{classrooms.length > 1 ? 's' : ''}
            </span>
          </h2>
          <span className="text-xs text-slate-500">
            Lien direct vers Google Meet et WhatsApp
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classrooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Room Title & Edit Button */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                        Salle en Direct
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                      {room.name}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleEdit(room)}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    title="Modifier les informations de cette salle"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>
                      Enseignant(e) : <strong className="text-slate-900">{room.teacherName}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      Horaires : <strong className="text-slate-900">{room.scheduleText}</strong>
                    </span>
                  </div>

                  {room.description && (
                    <p className="text-slate-500 pt-1 text-[11px] border-t border-slate-200/60 leading-relaxed italic">
                      {room.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons: Join Meet & Join WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={() => openMeet(room.meetUrl)}
                  className="w-full sm:flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                  title="Ouvrir la réunion Google Meet"
                >
                  <Video className="w-4 h-4 text-amber-300" />
                  <span>Rejoindre sur Meet</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>

                <button
                  onClick={() => openWhatsapp(room.whatsappUrl)}
                  className="w-full sm:flex-1 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-emerald-500 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                  title="Rejoindre le groupe WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Groupe WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support & Attendance Rules Section */}
      <SupportAndRulesSection />

      {/* Guide & Etiquette for virtual classes */}
      <section className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <span>Comment se déroulent les cours en direct ?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-600">
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1.5">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px]">1</span>
              <span>Rejoindre la visio Meet</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              À l'heure convenue du cours, cliquez sur « Rejoindre sur Meet ». Aucun compte payant n'est requis, la visioconférence fonctionne sur ordinateur et téléphone.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1.5">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px]">2</span>
              <span>Groupe WhatsApp du groupe</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Le groupe WhatsApp permet à l'enseignant de partager les plannings, les rappels de cours et de transmettre les corrections de récitation.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1.5">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px]">3</span>
              <span>Support interactif en simultané</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Ouvrez les sections « Alphabet & Nouroul Bayan » ou « Le Saint Coran » pour suivre les versets ou les leçons lus par l'Oustadh en temps réel.
            </p>
          </div>
        </div>

        {/* Quick jump actions */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {onNavigateToQuran && (
            <button
              onClick={onNavigateToQuran}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ouvrir Le Saint Coran (114 Sourates)</span>
            </button>
          )}

          {onNavigateToAlphabet && (
            <button
              onClick={onNavigateToAlphabet}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Ouvrir Alphabet & Nouroul Bayan</span>
            </button>
          )}
        </div>
      </section>

      {/* Modal for creating / editing rooms */}
      <VirtualClassroomModal
        classroom={editingClassroom}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveClassroom={handleSaveClassroom}
        onDeleteClassroom={handleDeleteClassroom}
      />
    </div>
  );
};
