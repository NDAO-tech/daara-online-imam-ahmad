import React, { useState } from 'react';
import { TAJWEED_RULES } from '../data/tajweedRules';
import { TajweedRule } from '../types/quran';
import { ShieldCheck, Sparkles, Volume2, BookOpen, Check, Printer, ChevronRight } from 'lucide-react';
import { playArabicSpeech } from '../utils/audioPlayer';

export const TajweedModule: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRule, setActiveRule] = useState<TajweedRule>(TAJWEED_RULES[0]);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  const filteredRules = TAJWEED_RULES.filter((rule) => {
    if (selectedCategory === 'all') return true;
    return rule.category === selectedCategory;
  });

  const handlePlayArabic = (text: string) => {
    playArabicSpeech(text);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Module Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
            <span>Niveau 2 — Ahkâm At-Tajwîd</span>
            <span aria-hidden="true">·</span>
            <span>Récitation avec excellence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
            Les Règles de Tajweed Illustrées
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Comprenez et appliquez les règles authentiques de récitation grâce au système visuel par code couleur.
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={() => setShowPrintModal(true)}
          className="px-4 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <Printer className="w-4 h-4 text-slate-500" />
          <span>Fiche Récapitulative PDF</span>
        </button>
      </div>

      {/* Color Code Visual Legend Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Légende du Code Couleur Universel
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-sky-600 shrink-0" />
            <span className="text-slate-700 font-medium">Idhhâr (Clarté)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 shrink-0" />
            <span className="text-slate-700 font-medium">Idghâm (Fusion)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-600 shrink-0" />
            <span className="text-slate-700 font-medium">Iqlâb (Mîm)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-600 shrink-0" />
            <span className="text-slate-700 font-medium">Ikhfâ' (Dissimulation)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-600 shrink-0" />
            <span className="text-slate-700 font-medium">Qalqalah (Rebond)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-orange-600 shrink-0" />
            <span className="text-slate-700 font-medium">Madd (Prolongation)</span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Toutes les règles ({TAJWEED_RULES.length})
        </button>
        <button
          onClick={() => setSelectedCategory('noon_tanween')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'noon_tanween' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Noon Sâkinah & Tanwîn (5)
        </button>
        <button
          onClick={() => setSelectedCategory('qalqalah')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'qalqalah' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          La Qalqalah (1)
        </button>
        <button
          onClick={() => setSelectedCategory('madd')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'madd' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Les Prolongations / Madd (3)
        </button>
        <button
          onClick={() => setSelectedCategory('tafkhim')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            selectedCategory === 'tafkhim' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Tafkhîm & Tarqîq (1)
        </button>
      </div>

      {/* Two-Zone Layout: Rule Cards List + Deep Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Rules */}
        <div className="lg:col-span-5 space-y-3">
          {filteredRules.map((rule) => {
            const isActive = activeRule.id === rule.id;

            return (
              <div
                key={rule.id}
                onClick={() => setActiveRule(rule)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-slate-900 shadow-sm ring-1 ring-slate-900'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: rule.color }}
                      />
                      <h3 className="font-semibold text-slate-900 text-sm">{rule.title}</h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {rule.shortDesc}
                    </p>
                  </div>
                  <span className="font-arabic text-sm text-slate-400 font-bold shrink-0 pt-0.5" dir="rtl">
                    {rule.arabicTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail Stage */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-5 space-y-3">
            <div className="flex items-center justify-between">
              <span
                className="px-2.5 py-1 rounded-md text-xs font-semibold text-white"
                style={{ backgroundColor: activeRule.color }}
              >
                {activeRule.title}
              </span>
              <span className="text-2xl font-arabic font-bold text-slate-800" dir="rtl">
                {activeRule.arabicTitle}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeRule.explanation}
            </p>
          </div>

          {/* Letters Involved */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Lettres concernées :
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeRule.letters.map((letter, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-xs font-medium"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Real Quranic Audio Examples */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Exemples authentiques dans le Saint Coran :</span>
              <span className="text-slate-400 normal-case font-normal text-[11px]">Cliquez sur l'icône pour écouter</span>
            </h4>

            <div className="space-y-2.5">
              {activeRule.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={() => handlePlayArabic(ex.arabic)}
                      className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Écouter</span>
                    </button>

                    <span
                      className="text-2xl sm:text-3xl font-arabic font-bold text-right text-slate-900"
                      dir="rtl"
                      style={{ color: activeRule.color }}
                    >
                      {ex.arabic}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/40">
                    <span className="font-medium text-slate-700">{ex.transliteration}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{ex.surahRef}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {ex.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Overlay for Printable Summary */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Fiche de Révision Synthétique du Tajweed
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  À garder sous les yeux pendant votre lecture quotidienne.
                </p>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-1 cursor-pointer"
              >
                ✕ Fermer
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-sky-50 rounded-lg border border-sky-200">
                <strong className="text-sky-900 block font-semibold">1. Idhhâr Halqî (ء هـ ع ح غ خ)</strong>
                <p className="text-sky-800 mt-1">Prononcez le Noun ou Tanween de façon parfaitement nette et naturelle.</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <strong className="text-emerald-900 block font-semibold">2. Idghâm bi-Ghunnah (ي ن م و)</strong>
                <p className="text-emerald-800 mt-1">Fusionnez le Noun dans la lettre avec 2 temps de nasillement.</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                <strong className="text-teal-900 block font-semibold">3. Idghâm bilâ Ghunnah (ل ر)</strong>
                <p className="text-teal-800 mt-1">Assimilation complète et directe sans nasillement.</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <strong className="text-amber-900 block font-semibold">4. Iqlâb (devant ب)</strong>
                <p className="text-amber-800 mt-1">Transformez le Noun en Mîm nasillé doux de 2 temps.</p>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <strong className="text-rose-900 block font-semibold">5. Ikhfâ' (les 15 autres lettres)</strong>
                <p className="text-rose-800 mt-1">Dissimulez la langue près du point de sortie avec nasillement.</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <strong className="text-purple-900 block font-semibold">6. Qalqalah (ق ط ب ج د)</strong>
                <p className="text-purple-800 mt-1">Rebond sec et vibrant lorsque la lettre porte un Soukoun ou à la fin d'un verset.</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer / Sauvegarder PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
