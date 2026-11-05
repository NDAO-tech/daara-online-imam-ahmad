import React, { useState, useEffect } from 'react';
import { VirtualClassroom } from '../types/quran';
import { Video, MessageCircle, Settings, Check, Trash2, Calendar, UserCheck, Plus, Sparkles, Loader2 } from 'lucide-react';
import { createGoogleMeetSpace, googleSignIn, getAccessToken } from '../services/googleMeet';

interface VirtualClassroomModalProps {
  classroom: VirtualClassroom | null; // null if creating a new room
  isOpen: boolean;
  onClose: () => void;
  onSaveClassroom: (room: VirtualClassroom) => void;
  onDeleteClassroom?: (id: string) => void;
}

export const VirtualClassroomModal: React.FC<VirtualClassroomModalProps> = ({
  classroom,
  isOpen,
  onClose,
  onSaveClassroom,
  onDeleteClassroom
}) => {
  const [name, setName] = useState<string>('');
  const [teacherName, setTeacherName] = useState<string>('');
  const [meetUrl, setMeetUrl] = useState<string>('');
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [scheduleText, setScheduleText] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isGeneratingMeet, setIsGeneratingMeet] = useState<boolean>(false);
  const [meetError, setMeetError] = useState<string | null>(null);
  const [meetSuccess, setMeetSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (classroom) {
      setName(classroom.name || '');
      setTeacherName(classroom.teacherName || '');
      setMeetUrl(classroom.meetUrl || '');
      setWhatsappUrl(classroom.whatsappUrl || '');
      setScheduleText(classroom.scheduleText || '');
      setDescription(classroom.description || '');
    } else {
      setName('');
      setTeacherName('');
      setMeetUrl('https://meet.google.com/new');
      setWhatsappUrl('https://chat.whatsapp.com/');
      setScheduleText('Tous les soirs de 18h30 à 19h30');
      setDescription('');
    }
  }, [classroom, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoom: VirtualClassroom = {
      id: classroom?.id || `room_${Date.now()}`,
      name: name.trim() || 'Salle de cours',
      teacherName: teacherName.trim() || 'Oustadh Référent',
      meetUrl: meetUrl.trim(),
      whatsappUrl: whatsappUrl.trim(),
      scheduleText: scheduleText.trim() || 'Selon calendrier',
      description: description.trim()
    };

    onSaveClassroom(newRoom);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 600);
  };

  const handleDelete = () => {
    if (!classroom?.id || !onDeleteClassroom) return;
    if (window.confirm(`Voulez-vous vraiment supprimer la salle « ${classroom.name} » ?`)) {
      onDeleteClassroom(classroom.id);
      onClose();
    }
  };

  const isEditing = Boolean(classroom?.id);

  const handleGenerateMeet = async () => {
    setIsGeneratingMeet(true);
    setMeetError(null);
    try {
      let token = await getAccessToken();
      if (!token) {
        const authResult = await googleSignIn();
        token = authResult?.accessToken || null;
      }
      if (!token) {
        throw new Error('Connexion Google requise.');
      }
      const space = await createGoogleMeetSpace(token);
      if (space.meetingUri) {
        setMeetUrl(space.meetingUri);
        setMeetSuccess(true);
        setTimeout(() => setMeetSuccess(false), 5000);
      }
    } catch (err: any) {
      console.error('Meet space generation failed:', err);
      setMeetError(err.message || 'Impossible de créer la réunion Google Meet.');
    } finally {
      setIsGeneratingMeet(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-amber-300 flex items-center justify-center shadow-sm">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                {isEditing ? 'Modifier la Salle de Cours' : 'Créer une Nouvelle Salle de Cours'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Chaque salle possède son propre lien Google Meet et WhatsApp pour vos différents groupes d'élèves.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Room Name */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 flex items-center justify-between">
              <span>Nom de la salle / Intitulé du cours :</span>
              <span className="text-[11px] text-slate-400 font-normal">Obligatoire</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex : Halaqah 1 — Hifz & Récitation, ou Cours Enfants"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-xs font-medium"
            />
          </div>

          {/* Teacher Name */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-slate-500" />
              <span>Nom de l'enseignant(e) / Oustadh :</span>
            </label>
            <input
              type="text"
              required
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="Ex : Oustadh Mouhamed"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          {/* Google Meet Link with automated API generator */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Video className="w-4 h-4 text-emerald-600" />
                <span>Lien de la réunion Google Meet :</span>
              </label>

              <button
                type="button"
                onClick={handleGenerateMeet}
                disabled={isGeneratingMeet}
                className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                title="Générer automatiquement une vraie réunion avec l'API Google Meet"
              >
                {isGeneratingMeet ? (
                  <>
                    <Loader2 className="w-3 h-3 animate-spin text-emerald-700" />
                    <span>Génération API...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Générer avec Google Meet</span>
                  </>
                )}
              </button>
            </div>

            <input
              type="url"
              required
              value={meetUrl}
              onChange={(e) => setMeetUrl(e.target.value)}
              placeholder="https://meet.google.com/abc-defg-hij"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
            />

            {meetSuccess && (
              <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Lien officiel Google Meet généré avec succès via l'API !</span>
              </p>
            )}

            {meetError && (
              <p className="text-[11px] text-rose-600 font-medium">
                {meetError}
              </p>
            )}

            <p className="text-[11px] text-slate-400">
              Lien permanent de votre appel vidéo Google Meet pour cette salle (généré automatiquement via l'API Google Meet ou collé manuellement).
            </p>
          </div>

          {/* WhatsApp Link */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span>Lien du Groupe ou Contact WhatsApp :</span>
            </label>
            <input
              type="text"
              required
              value={whatsappUrl}
              onChange={(e) => setWhatsappUrl(e.target.value)}
              placeholder="https://chat.whatsapp.com/... ou https://wa.me/221..."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
            />
            <p className="text-[11px] text-slate-400">
              Lien du groupe WhatsApp dédié aux élèves de cette salle ou numéro direct.
            </p>
          </div>

          {/* Schedule */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Horaires & Jours de direct :</span>
            </label>
            <input
              type="text"
              value={scheduleText}
              onChange={(e) => setScheduleText(e.target.value)}
              placeholder="Ex : Du lundi au vendredi de 18h30 à 19h30"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700">Description / Niveau (optionnel) :</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex : Niveau Débutant, Enfants, Adultes ou Mémorisation"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            {isEditing && onDeleteClassroom ? (
              <button
                type="button"
                onClick={handleDelete}
                className="px-3.5 py-2 text-rose-700 hover:text-rose-900 hover:bg-rose-50 rounded-lg font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Supprimer cette salle</span>
              </button>
            ) : (
              <span className="text-slate-400 text-[11px]">
                Enregistré localement dans votre navigateur.
              </span>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                {isSaved ? <Check className="w-4 h-4" /> : null}
                <span>{isSaved ? 'Enregistré !' : isEditing ? 'Mettre à jour la salle' : 'Créer la salle'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
