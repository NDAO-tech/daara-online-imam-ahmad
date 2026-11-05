import { UserProgress } from '../types/quran';

const STORAGE_KEY = 'al_tarteel_user_progress_v1';

export const DEFAULT_CLASSROOMS = [
  {
    id: 'room_hifz',
    name: 'Daara Imam Ahmad — Récitation & Mémorisation',
    teacherName: 'Oustadh Référent',
    meetUrl: 'https://meet.google.com/new',
    whatsappUrl: 'https://chat.whatsapp.com/',
    scheduleText: 'Tous les soirs de 18h30 à 19h30',
    description: 'Cours de récitation en direct, correction de la lecture et mémorisation.'
  },
  {
    id: 'room_nour',
    name: 'Daara Imam Ahmad — Débutants & Nouroul Bayan',
    teacherName: 'Enseignant(e) Débutants',
    meetUrl: 'https://meet.google.com/new',
    whatsappUrl: 'https://chat.whatsapp.com/',
    scheduleText: 'Mercredi & Samedi à 15h00',
    description: 'Apprentissage de la lecture arabe sur le livre Nouroul Bayan.'
  }
];

export const DEFAULT_PROGRESS: UserProgress = {
  memorizedSurahIds: [],
  inProgressSurahIds: [1, 112, 113, 114],
  bookmarkedAyah: { surahNumber: 1, ayahNumber: 1 },
  completedQuizzes: [],
  learnedLetterIds: [1, 2, 3],
  dailyGoalAyahs: 3,
  notes: {},
  completedNourLessonIds: ['nour_1'],
  classrooms: DEFAULT_CLASSROOMS,
  activeClassroomId: 'room_hifz'
};

export const loadUserProgress = (): UserProgress => {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    const progress: UserProgress = { ...DEFAULT_PROGRESS, ...parsed };

    // Migration for classrooms if empty or from old format
    if (!progress.classrooms || progress.classrooms.length === 0) {
      progress.classrooms = DEFAULT_CLASSROOMS;
      progress.activeClassroomId = 'room_hifz';
    }

    return progress;
  } catch {
    return DEFAULT_PROGRESS;
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save user progress', err);
  }
};

export const exportProgressJson = (progress: UserProgress): string => {
  return JSON.stringify(progress, null, 2);
};

export const importProgressJson = (jsonString: string): UserProgress | null => {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && typeof parsed === 'object') {
      const merged = { ...DEFAULT_PROGRESS, ...parsed };
      saveUserProgress(merged);
      return merged;
    }
  } catch {
    return null;
  }
  return null;
};
