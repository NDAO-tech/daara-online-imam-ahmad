export type ViewMode = 'home' | 'alphabet' | 'quran' | 'classroom';

export interface ArabicLetter {
  id: number;
  name: string;
  nameArabic: string;
  transliteration: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  makhraj: {
    zone: 'Gorge' | 'Langue' | 'Lèvres' | 'Dents / Palais' | 'Cavité buccale / Nasale';
    description: string;
  };
  isHeavy: boolean; // Emphatique (Tafkhim)
  isSunLetter: boolean; // Shamsiyyah vs Qamariyyah
  exampleWord: {
    arabic: string;
    transliteration: string;
    meaning: string;
  };
  audioPhoneticDescription: string;
}

export interface TajweedRule {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'noon_tanween' | 'meem' | 'qalqalah' | 'madd' | 'tafkhim';
  shortDesc: string;
  explanation: string;
  color: string; // Tailwind color or hex for highlighting
  badgeBg: string;
  letters: string[];
  examples: {
    arabic: string;
    surahRef: string;
    transliteration: string;
    explanation: string;
  }[];
  audioAyahSample?: {
    surah: number;
    ayah: number;
  };
}

export interface Ayah {
  numberInSurah: number;
  numberInQuran?: number;
  textArabic: string;
  textPhonetic: string;
  textTranslationFr: string;
  audioHusary?: string;
  audioAlafasy?: string;
  audioMinshawiChild?: string;
  tajweedSpans?: {
    text: string;
    ruleId?: string;
    color?: string;
    ruleName?: string;
  }[];
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameTransliterated: string;
  nameFrench: string;
  revelationType: 'Mecquoise' | 'Médinoise';
  totalAyahs: number;
  descriptionFr: string;
  ayahs: Ayah[];
}

export interface QuizQuestion {
  id: string;
  category: 'alphabet' | 'tajweed' | 'memorization';
  question: string;
  arabicPrompt?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface NourLessonWord {
  arabic: string;
  transliteration: string;
  meaningFr: string;
  breakdown?: string[]; // e.g. ["كـَ", "تـَ", "بـَ"]
}

export interface NourLesson {
  id: string;
  number: number;
  title: string;
  arabicTitle: string;
  ruleExplanation: string;
  lettersList?: string[];
  words: NourLessonWord[];
  practiceSentence?: {
    arabic: string;
    transliteration: string;
    translationFr: string;
  };
}

export interface VirtualClassroom {
  id: string;
  name: string;
  teacherName: string;
  meetUrl: string;
  whatsappUrl: string;
  scheduleText: string;
  description?: string;
}

export interface UserProgress {
  memorizedSurahIds: number[];
  inProgressSurahIds: number[];
  bookmarkedAyah: { surahNumber: number; ayahNumber: number } | null;
  completedQuizzes: { quizId: string; score: number; total: number; date: string }[];
  learnedLetterIds: number[];
  dailyGoalAyahs: number;
  notes: Record<number, string>; // surahNumber -> personal note
  completedNourLessonIds: string[];
  classrooms: VirtualClassroom[];
  activeClassroomId: string;
}

