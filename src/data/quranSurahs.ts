import { Surah } from '../types/quran';

export const ALL_SURAHS_INDEX: { number: number; nameArabic: string; nameTransliterated: string; nameFrench: string; totalAyahs: number; revelationType: 'Mecquoise' | 'Médinoise' }[] = [
  { number: 1, nameArabic: "الفَاتِحَة", nameTransliterated: "Al-Fâtiha", nameFrench: "L'Ouverture", totalAyahs: 7, revelationType: "Mecquoise" },
  { number: 2, nameArabic: "البَقَرَة", nameTransliterated: "Al-Baqarah", nameFrench: "La Vache", totalAyahs: 286, revelationType: "Médinoise" },
  { number: 3, nameArabic: "آل عِمْرَان", nameTransliterated: "Âl 'Imrân", nameFrench: "La Famille d'Imran", totalAyahs: 200, revelationType: "Médinoise" },
  { number: 4, nameArabic: "النِّسَاء", nameTransliterated: "An-Nisâ'", nameFrench: "Les Femmes", totalAyahs: 176, revelationType: "Médinoise" },
  { number: 5, nameArabic: "المَائِدَة", nameTransliterated: "Al-Mâ'idah", nameFrench: "La Table Servie", totalAyahs: 120, revelationType: "Médinoise" },
  { number: 6, nameArabic: "الأَنْعَام", nameTransliterated: "Al-An'âm", nameFrench: "Les Bestiaux", totalAyahs: 165, revelationType: "Mecquoise" },
  { number: 7, nameArabic: "الأَعْرَاف", nameTransliterated: "Al-A'râf", nameFrench: "Les Murailles", totalAyahs: 206, revelationType: "Mecquoise" },
  { number: 8, nameArabic: "الأَنْفَال", nameTransliterated: "Al-Anfâl", nameFrench: "Le Butin", totalAyahs: 75, revelationType: "Médinoise" },
  { number: 9, nameArabic: "التَّوْبَة", nameTransliterated: "At-Tawbah", nameFrench: "Le Repentir", totalAyahs: 129, revelationType: "Médinoise" },
  { number: 10, nameArabic: "يُونُس", nameTransliterated: "Yoûnous", nameFrench: "Jonas", totalAyahs: 109, revelationType: "Mecquoise" },
  { number: 11, nameArabic: "هُود", nameTransliterated: "Hoûd", nameFrench: "Houd", totalAyahs: 123, revelationType: "Mecquoise" },
  { number: 12, nameArabic: "يُوسُف", nameTransliterated: "Yoûsouf", nameFrench: "Joseph", totalAyahs: 111, revelationType: "Mecquoise" },
  { number: 13, nameArabic: "الرَّعْد", nameTransliterated: "Ar-Ra'd", nameFrench: "Le Tonnerre", totalAyahs: 43, revelationType: "Médinoise" },
  { number: 14, nameArabic: "إِبْرَاهِيم", nameTransliterated: "Ibrâhîm", nameFrench: "Abraham", totalAyahs: 52, revelationType: "Mecquoise" },
  { number: 15, nameArabic: "الحِجْر", nameTransliterated: "Al-Hijr", nameFrench: "Al-Hijr", totalAyahs: 99, revelationType: "Mecquoise" },
  { number: 16, nameArabic: "النَّحْل", nameTransliterated: "An-Nahl", nameFrench: "Les Abeilles", totalAyahs: 128, revelationType: "Mecquoise" },
  { number: 17, nameArabic: "الإِسْرَاء", nameTransliterated: "Al-Isrâ'", nameFrench: "Le Voyage Nocturne", totalAyahs: 111, revelationType: "Mecquoise" },
  { number: 18, nameArabic: "الكَهْف", nameTransliterated: "Al-Kahf", nameFrench: "La Caverne", totalAyahs: 110, revelationType: "Mecquoise" },
  { number: 19, nameArabic: "مَرْيَم", nameTransliterated: "Maryam", nameFrench: "Marie", totalAyahs: 98, revelationType: "Mecquoise" },
  { number: 20, nameArabic: "طه", nameTransliterated: "Tâ-Hâ", nameFrench: "Tâ-Hâ", totalAyahs: 135, revelationType: "Mecquoise" },
  { number: 21, nameArabic: "الأَنْبِيَاء", nameTransliterated: "Al-Anbiyâ'", nameFrench: "Les Prophètes", totalAyahs: 112, revelationType: "Mecquoise" },
  { number: 22, nameArabic: "الحَجّ", nameTransliterated: "Al-Hajj", nameFrench: "Le Pèlerinage", totalAyahs: 78, revelationType: "Médinoise" },
  { number: 23, nameArabic: "المُؤْمِنُون", nameTransliterated: "Al-Mu'minoûn", nameFrench: "Les Croyants", totalAyahs: 118, revelationType: "Mecquoise" },
  { number: 24, nameArabic: "النُّور", nameTransliterated: "An-Noûr", nameFrench: "La Lumière", totalAyahs: 64, revelationType: "Médinoise" },
  { number: 25, nameArabic: "الفُرْقَان", nameTransliterated: "Al-Furqân", nameFrench: "Le Discernement", totalAyahs: 77, revelationType: "Mecquoise" },
  { number: 26, nameArabic: "الشُّعَرَاء", nameTransliterated: "Ash-Shu'arâ'", nameFrench: "Les Poètes", totalAyahs: 227, revelationType: "Mecquoise" },
  { number: 27, nameArabic: "النَّمْل", nameTransliterated: "An-Naml", nameFrench: "Les Fourmis", totalAyahs: 93, revelationType: "Mecquoise" },
  { number: 28, nameArabic: "القَصَص", nameTransliterated: "Al-Qasas", nameFrench: "Le Récit", totalAyahs: 88, revelationType: "Mecquoise" },
  { number: 29, nameArabic: "العَنْكَبُوت", nameTransliterated: "Al-'Ankaboût", nameFrench: "L'Araignée", totalAyahs: 69, revelationType: "Mecquoise" },
  { number: 30, nameArabic: "الرُّوم", nameTransliterated: "Ar-Roûm", nameFrench: "Les Romains", totalAyahs: 60, revelationType: "Mecquoise" },
  { number: 31, nameArabic: "لُقْمَان", nameTransliterated: "Luqmân", nameFrench: "Luqman", totalAyahs: 34, revelationType: "Mecquoise" },
  { number: 32, nameArabic: "السَّجْدَة", nameTransliterated: "As-Sajdah", nameFrench: "La Prosternation", totalAyahs: 30, revelationType: "Mecquoise" },
  { number: 33, nameArabic: "الأَحْزَاب", nameTransliterated: "Al-Ahzâb", nameFrench: "Les Coalisés", totalAyahs: 73, revelationType: "Médinoise" },
  { number: 34, nameArabic: "سَبَأ", nameTransliterated: "Saba'", nameFrench: "Saba", totalAyahs: 54, revelationType: "Mecquoise" },
  { number: 35, nameArabic: "فَاطِر", nameTransliterated: "Fâtir", nameFrench: "Le Créateur", totalAyahs: 45, revelationType: "Mecquoise" },
  { number: 36, nameArabic: "يس", nameTransliterated: "Yâ-Sîn", nameFrench: "Yâ-Sîn", totalAyahs: 83, revelationType: "Mecquoise" },
  { number: 37, nameArabic: "الصَّافَّات", nameTransliterated: "As-Sâffât", nameFrench: "Les Rangés", totalAyahs: 182, revelationType: "Mecquoise" },
  { number: 38, nameArabic: "ص", nameTransliterated: "Sâd", nameFrench: "Sâd", totalAyahs: 88, revelationType: "Mecquoise" },
  { number: 39, nameArabic: "الزُّمَر", nameTransliterated: "Az-Zumar", nameFrench: "Les Groupes", totalAyahs: 75, revelationType: "Mecquoise" },
  { number: 40, nameArabic: "غَافِر", nameTransliterated: "Ghâfir", nameFrench: "Le Pardonneur", totalAyahs: 85, revelationType: "Mecquoise" },
  { number: 41, nameArabic: "فُصِّلَت", nameTransliterated: "Fussilat", nameFrench: "Les Versets Détaillés", totalAyahs: 54, revelationType: "Mecquoise" },
  { number: 42, nameArabic: "الشُّورَى", nameTransliterated: "Ash-Shoûrâ", nameFrench: "La Consultation", totalAyahs: 53, revelationType: "Mecquoise" },
  { number: 43, nameArabic: "الزُّخْرُف", nameTransliterated: "Az-Zukhruf", nameFrench: "L'Ornement", totalAyahs: 89, revelationType: "Mecquoise" },
  { number: 44, nameArabic: "الدُّخَان", nameTransliterated: "Ad-Dukhân", nameFrench: "La Fumée", totalAyahs: 59, revelationType: "Mecquoise" },
  { number: 45, nameArabic: "الجَاثِيَة", nameTransliterated: "Al-Jâthiyah", nameFrench: "L'Agenouillée", totalAyahs: 37, revelationType: "Mecquoise" },
  { number: 46, nameArabic: "الأَحْقَاف", nameTransliterated: "Al-Ahqâf", nameFrench: "Al-Ahqaf", totalAyahs: 35, revelationType: "Mecquoise" },
  { number: 47, nameArabic: "مُحَمَّد", nameTransliterated: "Muhammad", nameFrench: "Muhammad", totalAyahs: 38, revelationType: "Médinoise" },
  { number: 48, nameArabic: "الفَتْح", nameTransliterated: "Al-Fath", nameFrench: "La Victoire Éclatante", totalAyahs: 29, revelationType: "Médinoise" },
  { number: 49, nameArabic: "الحُجُرَات", nameTransliterated: "Al-Hujurât", nameFrench: "Les Appartements", totalAyahs: 18, revelationType: "Médinoise" },
  { number: 50, nameArabic: "ق", nameTransliterated: "Qâf", nameFrench: "Qâf", totalAyahs: 45, revelationType: "Mecquoise" },
  { number: 51, nameArabic: "الذَّارِيَات", nameTransliterated: "Adh-Dhâriyât", nameFrench: "Qui Éparpillent", totalAyahs: 60, revelationType: "Mecquoise" },
  { number: 52, nameArabic: "الطُّور", nameTransliterated: "At-Toûr", nameFrench: "Le Mont", totalAyahs: 49, revelationType: "Mecquoise" },
  { number: 53, nameArabic: "النَّجْم", nameTransliterated: "An-Najm", nameFrench: "L'Étoile", totalAyahs: 62, revelationType: "Mecquoise" },
  { number: 54, nameArabic: "القَمَر", nameTransliterated: "Al-Qamar", nameFrench: "La Lune", totalAyahs: 55, revelationType: "Mecquoise" },
  { number: 55, nameArabic: "الرَّحْمَٰن", nameTransliterated: "Ar-Rahmân", nameFrench: "Le Tout Miséricordieux", totalAyahs: 78, revelationType: "Médinoise" },
  { number: 56, nameArabic: "وَاقِعَة", nameTransliterated: "Al-Wâqi'ah", nameFrench: "L'Événement", totalAyahs: 96, revelationType: "Mecquoise" },
  { number: 57, nameArabic: "الحَدِيد", nameTransliterated: "Al-Hadîd", nameFrench: "Le Fer", totalAyahs: 29, revelationType: "Médinoise" },
  { number: 58, nameArabic: "المُجَادَلَة", nameTransliterated: "Al-Mujâdalah", nameFrench: "La Discussion", totalAyahs: 22, revelationType: "Médinoise" },
  { number: 59, nameArabic: "الحَشْر", nameTransliterated: "Al-Hashr", nameFrench: "L'Exode", totalAyahs: 24, revelationType: "Médinoise" },
  { number: 60, nameArabic: "المُمْتَحَنَة", nameTransliterated: "Al-Mumtahanah", nameFrench: "L'Éprouvée", totalAyahs: 13, revelationType: "Médinoise" },
  { number: 61, nameArabic: "الصَّفّ", nameTransliterated: "As-Saff", nameFrench: "Le Rang", totalAyahs: 14, revelationType: "Médinoise" },
  { number: 62, nameArabic: "الجُمُعَة", nameTransliterated: "Al-Jumu'ah", nameFrench: "Le Vendredi", totalAyahs: 11, revelationType: "Médinoise" },
  { number: 63, nameArabic: "المُنَافِقُون", nameTransliterated: "Al-Munâfiqoûn", nameFrench: "Les Hypocrites", totalAyahs: 11, revelationType: "Médinoise" },
  { number: 64, nameArabic: "التَّغَابُن", nameTransliterated: "At-Taghâbun", nameFrench: "La Grande Perte", totalAyahs: 18, revelationType: "Médinoise" },
  { number: 65, nameArabic: "الطَّلَاق", nameTransliterated: "At-Talâq", nameFrench: "Le Divorce", totalAyahs: 12, revelationType: "Médinoise" },
  { number: 66, nameArabic: "التَّحْرِيم", nameTransliterated: "At-Tahrîm", nameFrench: "L'Interdiction", totalAyahs: 12, revelationType: "Médinoise" },
  { number: 67, nameArabic: "المُلْك", nameTransliterated: "Al-Mulk", nameFrench: "La Royauté", totalAyahs: 30, revelationType: "Mecquoise" },
  { number: 68, nameArabic: "القَلَم", nameTransliterated: "Al-Qalam", nameFrench: "La Plume", totalAyahs: 52, revelationType: "Mecquoise" },
  { number: 69, nameArabic: "الحَاقَّة", nameTransliterated: "Al-Hâqqah", nameFrench: "L'Inéluctable", totalAyahs: 52, revelationType: "Mecquoise" },
  { number: 70, nameArabic: "المَعَارِج", nameTransliterated: "Al-Ma'ârij", nameFrench: "Les Voies d'Ascension", totalAyahs: 44, revelationType: "Mecquoise" },
  { number: 71, nameArabic: "نُوح", nameTransliterated: "Noûh", nameFrench: "Noé", totalAyahs: 28, revelationType: "Mecquoise" },
  { number: 72, nameArabic: "الجِنّ", nameTransliterated: "Al-Jinn", nameFrench: "Les Djinns", totalAyahs: 28, revelationType: "Mecquoise" },
  { number: 73, nameArabic: "المُزَّمِّل", nameTransliterated: "Al-Muzzammil", nameFrench: "L'Enveloppé", totalAyahs: 20, revelationType: "Mecquoise" },
  { number: 74, nameArabic: "المُدَّثِّر", nameTransliterated: "Al-Muddaththir", nameFrench: "Le Revêtu d'un Manteau", totalAyahs: 56, revelationType: "Mecquoise" },
  { number: 75, nameArabic: "القِيَامَة", nameTransliterated: "Al-Qiyâmah", nameFrench: "La Résurrection", totalAyahs: 40, revelationType: "Mecquoise" },
  { number: 76, nameArabic: "الإِنْسَان", nameTransliterated: "Al-Insân", nameFrench: "L'Homme", totalAyahs: 31, revelationType: "Médinoise" },
  { number: 77, nameArabic: "المُرْسَلَات", nameTransliterated: "Al-Mursalât", nameFrench: "Les Envoyés", totalAyahs: 50, revelationType: "Mecquoise" },
  { number: 78, nameArabic: "النَّبَأ", nameTransliterated: "An-Naba'", nameFrench: "La Nouvelle", totalAyahs: 40, revelationType: "Mecquoise" },
  { number: 79, nameArabic: "النَّازِعَات", nameTransliterated: "An-Nâzi'ât", nameFrench: "Les Anges qui Arrachent", totalAyahs: 46, revelationType: "Mecquoise" },
  { number: 80, nameArabic: "عَبَسَ", nameTransliterated: "'Abasa", nameFrench: "Il s'est Renfrogné", totalAyahs: 42, revelationType: "Mecquoise" },
  { number: 81, nameArabic: "التَّكْوِير", nameTransliterated: "At-Takwîr", nameFrench: "L'Obscurcissement", totalAyahs: 29, revelationType: "Mecquoise" },
  { number: 82, nameArabic: "الانْفِطَار", nameTransliterated: "Al-Infitâr", nameFrench: "La Rupture", totalAyahs: 19, revelationType: "Mecquoise" },
  { number: 83, nameArabic: "المُطَفِّفِين", nameTransliterated: "Al-Mutaffifîn", nameFrench: "Les Fraudeurs", totalAyahs: 36, revelationType: "Mecquoise" },
  { number: 84, nameArabic: "الانْشِقَاق", nameTransliterated: "Al-Inshiqâq", nameFrench: "La Déchirure", totalAyahs: 25, revelationType: "Mecquoise" },
  { number: 85, nameArabic: "البُرُوج", nameTransliterated: "Al-Buroûj", nameFrench: "Les Constellations", totalAyahs: 22, revelationType: "Mecquoise" },
  { number: 86, nameArabic: "الطَّارِق", nameTransliterated: "At-Târiq", nameFrench: "L'Astre Nocturne", totalAyahs: 17, revelationType: "Mecquoise" },
  { number: 87, nameArabic: "الأَعْلَى", nameTransliterated: "Al-A'lâ", nameFrench: "Le Très-Haut", totalAyahs: 19, revelationType: "Mecquoise" },
  { number: 88, nameArabic: "الغَاشِيَة", nameTransliterated: "Al-Ghâshiyah", nameFrench: "L'Enveloppante", totalAyahs: 26, revelationType: "Mecquoise" },
  { number: 89, nameArabic: "الفَجْر", nameTransliterated: "Al-Fajr", nameFrench: "L'Aube", totalAyahs: 30, revelationType: "Mecquoise" },
  { number: 90, nameArabic: "البَلَد", nameTransliterated: "Al-Balad", nameFrench: "La Cité", totalAyahs: 20, revelationType: "Mecquoise" },
  { number: 91, nameArabic: "الشَّمْس", nameTransliterated: "Ash-Shams", nameFrench: "Le Soleil", totalAyahs: 15, revelationType: "Mecquoise" },
  { number: 92, nameArabic: "اللَّيْل", nameTransliterated: "Al-Layl", nameFrench: "La Nuit", totalAyahs: 21, revelationType: "Mecquoise" },
  { number: 93, nameArabic: "الضُّحَى", nameTransliterated: "Ad-Duhâ", nameFrench: "Le Jour Montant", totalAyahs: 11, revelationType: "Mecquoise" },
  { number: 94, nameArabic: "الشَّرْح", nameTransliterated: "Ash-Sharh", nameFrench: "L'Ouverture du Cœur", totalAyahs: 8, revelationType: "Mecquoise" },
  { number: 95, nameArabic: "التِّين", nameTransliterated: "At-Tîn", nameFrench: "Le Figuier", totalAyahs: 8, revelationType: "Mecquoise" },
  { number: 96, nameArabic: "العَلَق", nameTransliterated: "Al-'Alaq", nameFrench: "L'Adhérence", totalAyahs: 19, revelationType: "Mecquoise" },
  { number: 97, nameArabic: "القَدْر", nameTransliterated: "Al-Qadr", nameFrench: "La Nuit du Destin", totalAyahs: 5, revelationType: "Mecquoise" },
  { number: 98, nameArabic: "البَيِّنَة", nameTransliterated: "Al-Bayyinah", nameFrench: "La Preuve Évidente", totalAyahs: 8, revelationType: "Médinoise" },
  { number: 99, nameArabic: "الزَّلْزَلَة", nameTransliterated: "Az-Zalzalah", nameFrench: "La Secousse", totalAyahs: 8, revelationType: "Médinoise" },
  { number: 100, nameArabic: "العَادِيَات", nameTransliterated: "Al-'Âdiyât", nameFrench: "Les Coursiers", totalAyahs: 11, revelationType: "Mecquoise" },
  { number: 101, nameArabic: "القَارِعَة", nameTransliterated: "Al-Qâri'ah", nameFrench: "Le Fracas", totalAyahs: 11, revelationType: "Mecquoise" },
  { number: 102, nameArabic: "التَّكَاثُر", nameTransliterated: "At-Takâthur", nameFrench: "La Course aux Richesses", totalAyahs: 8, revelationType: "Mecquoise" },
  { number: 103, nameArabic: "العَصْر", nameTransliterated: "Al-'Asr", nameFrench: "Le Temps", totalAyahs: 3, revelationType: "Mecquoise" },
  { number: 104, nameArabic: "الهُمَزَة", nameTransliterated: "Al-Humazah", nameFrench: "Le Calomniateur", totalAyahs: 9, revelationType: "Mecquoise" },
  { number: 105, nameArabic: "الفِيل", nameTransliterated: "Al-Fîl", nameFrench: "L'Éléphant", totalAyahs: 5, revelationType: "Mecquoise" },
  { number: 106, nameArabic: "قُرَيْش", nameTransliterated: "Quraysh", nameFrench: "Les Qoraysh", totalAyahs: 4, revelationType: "Mecquoise" },
  { number: 107, nameArabic: "المَاعُون", nameTransliterated: "Al-Mâ'ûn", nameFrench: "L'Entraide", totalAyahs: 7, revelationType: "Mecquoise" },
  { number: 108, nameArabic: "الكَوْثَر", nameTransliterated: "Al-Kawthar", nameFrench: "L'Abondance", totalAyahs: 3, revelationType: "Mecquoise" },
  { number: 109, nameArabic: "الكَافِرُون", nameTransliterated: "Al-Kâfiroûn", nameFrench: "Les Non-Croyants", totalAyahs: 6, revelationType: "Mecquoise" },
  { number: 110, nameArabic: "النَّصْر", nameTransliterated: "An-Nasr", nameFrench: "Le Secours Divin", totalAyahs: 3, revelationType: "Médinoise" },
  { number: 111, nameArabic: "المَسَد", nameTransliterated: "Al-Masad", nameFrench: "Les Fibres", totalAyahs: 5, revelationType: "Mecquoise" },
  { number: 112, nameArabic: "الإِخْلَاص", nameTransliterated: "Al-Ikhlâs", nameFrench: "La Pureté de la Foi", totalAyahs: 4, revelationType: "Mecquoise" },
  { number: 113, nameArabic: "الفَلَق", nameTransliterated: "Al-Falaq", nameFrench: "L'Aube Naissante", totalAyahs: 5, revelationType: "Mecquoise" },
  { number: 114, nameArabic: "النَّاس", nameTransliterated: "An-Nâs", nameFrench: "Les Hommes", totalAyahs: 6, revelationType: "Mecquoise" }
];

export const PRELOADED_SURAHS: Record<number, Surah> = {
  1: {
    number: 1,
    nameArabic: "الفَاتِحَة",
    nameTransliterated: "Al-Fâtiha",
    nameFrench: "L'Ouverture",
    revelationType: "Mecquoise",
    totalAyahs: 7,
    descriptionFr: "Mère du Coran (Oumm Al-Kitâb) et pilier indispensable de chaque prière. Elle condense la louange à Allah, la reconnaissance de Sa seigneurie et la supplication pour être guidé sur le droit chemin.",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        textPhonetic: "Bismi-llâhi-r-Rahmâni-r-Rahîm",
        textTranslationFr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001001.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001001.mp3",
        tajweedSpans: [
          { text: "بِسْمِ اللَّهِ " },
          { text: "الرَّحْمَٰنِ ", ruleName: "Râ lourd (Tafkhim)" },
          { text: "الرَّحِيمِ", ruleName: "Madd 'Ârid (2-4 temps)", color: "#f59e0b" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        textPhonetic: "Al-hamdu li-llâhi Rabbi-l-'âlamîn",
        textTranslationFr: "Louange à Allah, Seigneur de l'Univers.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001002.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001002.mp3",
        tajweedSpans: [
          { text: "الْحَمْدُ لِلَّهِ رَبِّ " },
          { text: "الْعَالَمِينَ", ruleName: "Madd 'Ârid li-s-soukoun", color: "#f59e0b" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        textPhonetic: "Ar-Rahmâni-r-Rahîm",
        textTranslationFr: "Le Tout Miséricordieux, le Très Miséricordieux,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001003.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001003.mp3",
        tajweedSpans: [
          { text: "الرَّحْمَٰنِ الرَّحِيمِ", ruleName: "Râ avec Shaddah & Madd", color: "#0284c7" }
        ]
      },
      {
        numberInSurah: 4,
        textArabic: "مَالِكِ يَوْمِ الدِّينِ",
        textPhonetic: "Mâliki yawmi-d-Dîn",
        textTranslationFr: "Maître du Jour de la Rétribution.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001004.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001004.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001004.mp3",
        tajweedSpans: [
          { text: "مَالِكِ يَوْمِ الدِّينِ" }
        ]
      },
      {
        numberInSurah: 5,
        textArabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        textPhonetic: "Iyyâka na'budu wa iyyâka nasta'în",
        textTranslationFr: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001005.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001005.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001005.mp3",
        tajweedSpans: [
          { text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" }
        ]
      },
      {
        numberInSurah: 6,
        textArabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        textPhonetic: "Ihdinâ-s-Sirâta-l-mustaqîm",
        textTranslationFr: "Guide-nous dans le droit chemin,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001006.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001006.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001006.mp3",
        tajweedSpans: [
          { text: "اهْدِنَا " },
          { text: "الصِّرَاطَ ", ruleName: "Tafkhim (Sad & Tâ lourds)", color: "#4f46e5" },
          { text: "الْمُسْتَقِيمَ" }
        ]
      },
      {
        numberInSurah: 7,
        textArabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        textPhonetic: "Sirâta-lladhîna an'amta 'alayhim ghayri-l-maghdûbi 'alayhim wa lad-dâllîn",
        textTranslationFr: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/001007.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/001007.mp3",
        audioMinshawiChild: "https://everyayah.com/data/Minshawy_Teacher_128kbps/001007.mp3",
        tajweedSpans: [
          { text: "صِرَاطَ الَّذِينَ " },
          { text: "أَنْعَمْتَ ", ruleName: "Idhhar Halqi (Noun devant 'Ayn)", color: "#0284c7" },
          { text: "عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا " },
          { text: "الضَّالِّينَ", ruleName: "Madd Lâzim (6 temps obligatoires)", color: "#c026d3" }
        ]
      }
    ]
  },
  103: {
    number: 103,
    nameArabic: "العَصْر",
    nameTransliterated: "Al-'Asr",
    nameFrench: "Le Temps",
    revelationType: "Mecquoise",
    totalAyahs: 3,
    descriptionFr: "L'Imam Ash-Shafi'i a dit d'elle : 'Si les gens ne méditaient que sur cette sourate, elle leur suffirait.' Elle expose la recette complète du salut face à la perdition du temps.",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "وَالْعَصْرِ",
        textPhonetic: "Wal-'Asr",
        textTranslationFr: "Par le Temps !",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/103001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/103001.mp3",
        tajweedSpans: [
          { text: "وَالْعَصْرِ", ruleName: "Sâd lourd & Râ à l'arrêt", color: "#4f46e5" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
        textPhonetic: "Inna-l-insâna lafî khusr",
        textTranslationFr: "L'homme est certes en perdition,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/103002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/103002.mp3",
        tajweedSpans: [
          { text: "إِنَّ ", ruleName: "Ghunnah sur le Noun (2 temps)", color: "#16a34a" },
          { text: "الْإِنسَانَ ", ruleName: "Ikhfa Haqiqi (devant Sîn)", color: "#e11d48" },
          { text: "لَفِي خُسْرٍ" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        textPhonetic: "Illâ-lladhîna âmanû wa 'amilu-s-sâlihâti wa tawâsaw bi-l-haqqi wa tawâsaw bi-s-sabr",
        textTranslationFr: "Sauf ceux qui croient et accomplissent les bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement l'endurance.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/103003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/103003.mp3",
        tajweedSpans: [
          { text: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ " },
          { text: "وَتَوَاصَوْا بِالصَّبْرِ", ruleName: "Qalqalah sur le Bâ' (soukoun)", color: "#8b5cf6" }
        ]
      }
    ]
  },
  108: {
    number: 108,
    nameArabic: "الكَوْثَر",
    nameTransliterated: "Al-Kawthar",
    nameFrench: "L'Abondance",
    revelationType: "Mecquoise",
    totalAyahs: 3,
    descriptionFr: "La plus courte sourate du Saint Coran par le nombre de mots, révélée pour réconforter le Prophète ﷺ en lui annonçant l'immense fleuve du Paradis nommé Al-Kawthar.",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
        textPhonetic: "Innâââ a'taynâka-l-kawthar",
        textTranslationFr: "Nous t'avons certes accordé l'Abondance.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/108001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/108001.mp3",
        tajweedSpans: [
          { text: "إِنَّا ", ruleName: "Madd Ja'iz (4-5 temps)", color: "#f59e0b" },
          { text: "أَعْطَيْنَاكَ الْكَوْثَرَ" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        textPhonetic: "Fa-salli li-Rabbika wan-har",
        textTranslationFr: "Accomplis donc la prière pour ton Seigneur et sacrifie.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/108002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/108002.mp3",
        tajweedSpans: [
          { text: "فَصَلِّ لِرَبِّكَ " },
          { text: "وَانْحَرْ", ruleName: "Idhhar Halqi (Noun devant Hâ)", color: "#0284c7" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        textPhonetic: "Inna shâni'aka huwa-l-abtar",
        textTranslationFr: "Certes, celui qui te hait sera le sans-postérité.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/108003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/108003.mp3",
        tajweedSpans: [
          { text: "إِنَّ ", ruleName: "Ghunnah (2 temps)", color: "#16a34a" },
          { text: "شَانِئَكَ هُوَ " },
          { text: "الْأَبْتَرُ", ruleName: "Qalqalah sur le Bâ'", color: "#8b5cf6" }
        ]
      }
    ]
  },
  112: {
    number: 112,
    nameArabic: "الإِخْلَاص",
    nameTransliterated: "Al-Ikhlâs",
    nameFrench: "La Pureté de la Foi",
    revelationType: "Mecquoise",
    totalAyahs: 4,
    descriptionFr: "Équivaut au tiers du Coran selon le Prophète ﷺ. Elle résume avec pureté absolue l'unicité divine (Tawhid).",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        textPhonetic: "Qul Huwa-llâhu Ahad",
        textTranslationFr: "Dis : 'Il est Allah, Unique.'",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/112001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
        tajweedSpans: [
          { text: "قُلْ هُوَ اللَّهُ " },
          { text: "أَحَدٌ", ruleName: "Qalqalah sur le Dâl à l'arrêt", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "اللَّهُ الصَّمَدُ",
        textPhonetic: "Allâhu-s-Samad",
        textTranslationFr: "Allah, Le Seul à être imploré pour ce que nous désirons.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/112002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/112002.mp3",
        tajweedSpans: [
          { text: "اللَّهُ " },
          { text: "الصَّمَدُ", ruleName: "Tafkhim sur Sâd + Qalqalah sur Dâl", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        textPhonetic: "Lam yalid wa lam yûlad",
        textTranslationFr: "Il n'a jamais engendré, n'a pas été engendré non plus.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/112003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/112003.mp3",
        tajweedSpans: [
          { text: "لَمْ " },
          { text: "يَلِدْ ", ruleName: "Qalqalah (Dâl)", color: "#8b5cf6" },
          { text: "وَلَمْ " },
          { text: "يُولَدْ", ruleName: "Qalqalah (Dâl)", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 4,
        textArabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        textPhonetic: "Wa lam yakul-lahû kufuwan ahad",
        textTranslationFr: "Et nul n'est égal à Lui.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/112004.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/112004.mp3",
        tajweedSpans: [
          { text: "وَلَمْ " },
          { text: "يَكُن لَّهُ ", ruleName: "Idgham bila ghunnah (Noun dans Lâm)", color: "#0d9488" },
          { text: "كُفُوًا أَحَدٌ", ruleName: "Idhhar Halqi (Tanween devant Hamza)", color: "#0284c7" }
        ]
      }
    ]
  },
  113: {
    number: 113,
    nameArabic: "الفَلَق",
    nameTransliterated: "Al-Falaq",
    nameFrench: "L'Aube Naissante",
    revelationType: "Mecquoise",
    totalAyahs: 5,
    descriptionFr: "L'une des deux sourates protectrices (Al-Mu'awwidhatayn). Prière de protection contre le mal des créatures, les ténèbres et l'envie.",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        textPhonetic: "Qul a'ûdhu bi-Rabbi-l-falaq",
        textTranslationFr: "Dis : 'Je cherche protection auprès du Seigneur de l'aube naissante,'",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/113001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/113001.mp3",
        tajweedSpans: [
          { text: "قُلْ أَعُوذُ بِرَبِّ " },
          { text: "الْفَلَقِ", ruleName: "Qalqalah sur Qaf à l'arrêt", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "مِن شَرِّ مَا خَلَقَ",
        textPhonetic: "Min sharri mâ khalaq",
        textTranslationFr: "Contre le mal des êtres qu'Il a créés,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/113002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/113002.mp3",
        tajweedSpans: [
          { text: "مِن شَرِّ ", ruleName: "Ikhfa Haqiqi (devant Shîn)", color: "#e11d48" },
          { text: "مَا " },
          { text: "خَلَقَ", ruleName: "Qalqalah sur Qaf", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        textPhonetic: "Wa min sharri ghâsiqin idhâ waqab",
        textTranslationFr: "Contre le mal de l'obscurité quand elle s'approfondit,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/113003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/113003.mp3",
        tajweedSpans: [
          { text: "وَمِن شَرِّ ", ruleName: "Ikhfa", color: "#e11d48" },
          { text: "غَاسِقٍ إِذَا ", ruleName: "Idhhar (Tanween devant Hamza)", color: "#0284c7" },
          { text: "وَقَبَ", ruleName: "Qalqalah sur Bâ'", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 4,
        textArabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        textPhonetic: "Wa min sharri-n-naffâthâti fî-l-'uqad",
        textTranslationFr: "Contre le mal de celles qui soufflent sur les nœuds,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/113004.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/113004.mp3",
        tajweedSpans: [
          { text: "وَمِن شَرِّ ", ruleName: "Ikhfa", color: "#e11d48" },
          { text: "النَّفَّاثَاتِ ", ruleName: "Ghunnah sur Noun", color: "#16a34a" },
          { text: "فِي " },
          { text: "الْعُقَدِ", ruleName: "Qalqalah sur Dâl", color: "#8b5cf6" }
        ]
      },
      {
        numberInSurah: 5,
        textArabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        textPhonetic: "Wa min sharri hâsidin idhâ hasad",
        textTranslationFr: "Et contre le mal de l'envieux quand il envie.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/113005.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/113005.mp3",
        tajweedSpans: [
          { text: "وَمِن شَرِّ ", ruleName: "Ikhfa", color: "#e11d48" },
          { text: "حَاسِدٍ إِذَا ", ruleName: "Idhhar", color: "#0284c7" },
          { text: "حَسَدَ", ruleName: "Qalqalah sur Dâl", color: "#8b5cf6" }
        ]
      }
    ]
  },
  114: {
    number: 114,
    nameArabic: "النَّاس",
    nameTransliterated: "An-Nâs",
    nameFrench: "Les Hommes",
    revelationType: "Mecquoise",
    totalAyahs: 6,
    descriptionFr: "Dernière sourate du Coran dans l'ordre du Moushaf. Elle enseigne la recherche du refuge auprès du Souverain des Hommes contre les insufflations sournoises du diable et des tentateurs.",
    ayahs: [
      {
        numberInSurah: 1,
        textArabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        textPhonetic: "Qul a'ûdhu bi-Rabbi-n-nâs",
        textTranslationFr: "Dis : 'Je cherche protection auprès du Seigneur des hommes,'",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114001.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114001.mp3",
        tajweedSpans: [
          { text: "قُلْ أَعُوذُ بِرَبِّ " },
          { text: "النَّاسِ", ruleName: "Ghunnah sur le Noun (2 temps)", color: "#16a34a" }
        ]
      },
      {
        numberInSurah: 2,
        textArabic: "مَلِكِ النَّاسِ",
        textPhonetic: "Maliki-n-nâs",
        textTranslationFr: "Le Souverain des hommes,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114002.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114002.mp3",
        tajweedSpans: [
          { text: "مَلِكِ " },
          { text: "النَّاسِ", ruleName: "Ghunnah sur le Noun", color: "#16a34a" }
        ]
      },
      {
        numberInSurah: 3,
        textArabic: "إِلَٰهِ النَّاسِ",
        textPhonetic: "Ilâhi-n-nâs",
        textTranslationFr: "Dieu des hommes,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114003.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114003.mp3",
        tajweedSpans: [
          { text: "إِلَٰهِ " },
          { text: "النَّاسِ", ruleName: "Ghunnah sur le Noun", color: "#16a34a" }
        ]
      },
      {
        numberInSurah: 4,
        textArabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        textPhonetic: "Min sharri-l-waswâsi-l-khannâs",
        textTranslationFr: "Contre le mal du mauvais conseiller, furtif,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114004.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114004.mp3",
        tajweedSpans: [
          { text: "مِن شَرِّ ", ruleName: "Ikhfa Haqiqi", color: "#e11d48" },
          { text: "الْوَسْوَاسِ " },
          { text: "الْخَنَّاسِ", ruleName: "Ghunnah sur le Noun", color: "#16a34a" }
        ]
      },
      {
        numberInSurah: 5,
        textArabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        textPhonetic: "Alladhî yuwaswisu fî sudûri-n-nâs",
        textTranslationFr: "Qui souffle le mal dans les poitrines des hommes,",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114005.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114005.mp3",
        tajweedSpans: [
          { text: "الَّذِي يُوَسْوِسُ فِي صُدُورِ " },
          { text: "النَّاسِ", ruleName: "Ghunnah sur le Noun", color: "#16a34a" }
        ]
      },
      {
        numberInSurah: 6,
        textArabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        textPhonetic: "Mina-l-jinnati wan-nâs",
        textTranslationFr: "Qu'il soit d'entre les djinns ou les hommes.",
        audioHusary: "https://everyayah.com/data/Husary_128kbps/114006.mp3",
        audioAlafasy: "https://everyayah.com/data/Alafasy_128kbps/114006.mp3",
        tajweedSpans: [
          { text: "مِنَ " },
          { text: "الْجِنَّةِ ", ruleName: "Ghunnah sur Noun", color: "#16a34a" },
          { text: "وَ" },
          { text: "النَّاسِ", ruleName: "Ghunnah sur Noun", color: "#16a34a" }
        ]
      }
    ]
  }
};
