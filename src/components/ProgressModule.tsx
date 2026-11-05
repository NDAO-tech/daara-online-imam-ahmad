import React, { useState } from 'react';
import { UserProgress, ViewMode } from '../types/quran';
import {
  Bookmark,
  CheckCircle2,
  Calendar,
  Download,
  Upload,
  RotateCcw,
  BookOpen,
  Award,
  ArrowRight
} from 'lucide-react';
import { exportProgressJson, importProgressJson } from '../utils/storage';
import { ALL_SURAHS_INDEX } from '../data/quranSurahs';

interface ProgressModuleProps {
  progress: UserProgress;
  onUpdateProgress: (newProgress: Partial<UserProgress>) => void;
  onNavigateToSurah: (surahNumber: number) => void;
}

export const ProgressModule: React.FC<ProgressModuleProps> = ({
  progress,
  onUpdateProgress,
  onNavigateToSurah
}) => {
  const [importText, setImportText] = useState<string>('');
  const [showImportArea, setShowImportArea] = useState<boolean>(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleExport = () => {
    const dataStr = exportProgressJson(progress);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `al_tarteel_progression_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const imported = importProgressJson(importText);
    if (imported) {
      onUpdateProgress(imported);
      setImportStatus('Progression importée avec succès !');
      setShowImportArea(false);
      setImportText('');
    } else {
      setImportStatus('Format JSON invalide. Veuillez vérifier le contenu.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser votre progression locale ?')) {
      onUpdateProgress({
        learnedLetterIds: [],
        memorizedSurahIds: [],
        bookmarkedAyah: null,
        completedQuizzes: []
      });
    }
  };

  const bookmarkedSurahMeta = progress.bookmarkedAyah
    ? ALL_SURAHS_INDEX.find((s) => s.number === progress.bookmarkedAyah?.surahNumber)
    : null;

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
          <span>Espace Apprenant</span>
          <span aria-hidden="true">·</span>
          <span>Données 100% Locales & Privées</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
          Mon Carnet de Mémorisation & Progression
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Suivez votre avancée dans l'alphabet, vos sourates mémorisées et vos objectifs quotidiens.
        </p>
      </div>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            PDF Nouroul Bayan
          </span>
          <div className="text-2xl font-bold text-emerald-800 font-mono">
            Support PDF
          </div>
          <p className="text-[11px] text-slate-500">
            {progress.learnedLetterIds.length} / 28 lettres reconnues
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Sourates Mémorisées (Hifz)
          </span>
          <div className="text-2xl font-bold text-amber-700 font-mono">
            {progress.memorizedSurahIds.length} <span className="text-xs font-normal text-slate-400">sourates</span>
          </div>
          <p className="text-[11px] text-slate-500">
            {progress.memorizedSurahIds.length > 0 ? 'Mémorisation en cours' : 'Commencez par Al-Fatiha'}
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Quiz & Évaluations
          </span>
          <div className="text-2xl font-bold text-purple-700 font-mono">
            {progress.completedQuizzes.length} <span className="text-xs font-normal text-slate-400">validés</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Tests de connaissances
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Cours en Direct
          </span>
          <div className="text-2xl font-bold text-sky-700 font-mono">
            En direct
          </div>
          <p className="text-[11px] text-slate-500 truncate">
            Meet & WhatsApp configurés
          </p>
        </div>
      </div>

      {/* Bookmarked verse quick-jump card */}
      {progress.bookmarkedAyah && bookmarkedSurahMeta && (
        <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Bookmark className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                Dernier marque-page enregistré :
              </span>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Sourate {bookmarkedSurahMeta.nameTransliterated} ({bookmarkedSurahMeta.nameArabic}) — Verset {progress.bookmarkedAyah.ayahNumber}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Reprenez exactement là où vous vous étiez arrêté.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToSurah(progress.bookmarkedAyah!.surahNumber)}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 self-start sm:self-auto shadow-sm cursor-pointer"
          >
            <span>Reprendre la lecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Daily Goal Configuration */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 font-serif flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Objectif Quotidien de Récitation</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          « L'action la plus aimée d'Allah est celle qui est régulière, même si elle est minime. » (Hadith). Choisissez un rythme réaliste que vous pouvez tenir chaque jour.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {[1, 3, 5, 7, 10].map((goal) => (
            <button
              key={goal}
              onClick={() => onUpdateProgress({ dailyGoalAyahs: goal })}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                progress.dailyGoalAyahs === goal
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {goal} {goal === 1 ? 'verset / jour' : 'versets / jour'}
            </button>
          ))}
        </div>
      </div>

      {/* Memorized Surahs List */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 font-serif flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          <span>Liste de vos sourates mémorisées ({progress.memorizedSurahIds.length})</span>
        </h3>

        {progress.memorizedSurahIds.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-2">
            Vous n'avez pas encore marqué de sourate comme mémorisée. Dans la section « Récitation & Hifz », vous pouvez cliquer sur « Marquer comme mémorisée » pour chacune de vos réussites !
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {progress.memorizedSurahIds.map((surahNum) => {
              const meta = ALL_SURAHS_INDEX.find((s) => s.number === surahNum);
              if (!meta) return null;

              return (
                <div
                  key={surahNum}
                  onClick={() => onNavigateToSurah(surahNum)}
                  className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <span className="text-xs font-bold text-slate-900 block font-serif">
                      {meta.nameTransliterated}
                    </span>
                    <span className="text-[11px] text-slate-500">{meta.nameFrench}</span>
                  </div>
                  <span className="font-arabic text-emerald-800 font-bold text-sm" dir="rtl">
                    {meta.nameArabic}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Backup & Data Sovereignty */}
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs">
        <div>
          <h4 className="font-bold text-slate-900">Sauvegarde & Restauration de vos données</h4>
          <p className="text-slate-500 mt-0.5">
            Vos données restent entièrement privées et enregistrées sur votre appareil. Vous pouvez télécharger une copie de sauvegarde pour ne jamais perdre vos progrès.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExport}
            className="px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Exporter ma sauvegarde (.JSON)</span>
          </button>

          <button
            onClick={() => setShowImportArea(!showImportArea)}
            className="px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-slate-600" />
            <span>Importer une sauvegarde</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-rose-700 hover:text-rose-900 hover:bg-rose-50 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Réinitialiser les données
          </button>
        </div>

        {showImportArea && (
          <div className="space-y-3 pt-2">
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Collez le texte JSON de votre sauvegarde ici..."
              className="w-full h-24 p-3 bg-white border border-slate-300 rounded-xl text-xs font-mono"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={handleImport}
                className="px-4 py-2 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 cursor-pointer"
              >
                Appliquer la restauration
              </button>
              {importStatus && <span className="text-slate-600">{importStatus}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
