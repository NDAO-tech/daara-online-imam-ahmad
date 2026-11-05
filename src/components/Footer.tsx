import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import { ViewMode } from '../types/quran';

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 flex items-center justify-center text-amber-300">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 font-serif text-sm">Daara Imam Ahmad Online</span>
            <span className="text-slate-400 font-arabic">دار الإمام أحمد</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onSelectView('home')}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button
              onClick={() => onSelectView('alphabet')}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              Alphabet & Nouroul Bayan
            </button>
            <button
              onClick={() => onSelectView('quran')}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              Le Saint Coran (114 Sourates)
            </button>
            <button
              onClick={() => onSelectView('classroom')}
              className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Salles de cours</span>
            </button>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <p>
            <strong className="text-slate-600">Daara Imam Ahmad Online</strong> — École coranique gratuite. Soutien mensuel libre par Wave : <strong className="text-slate-600 font-mono">76 462 36 69</strong> ou <strong className="text-slate-600 font-mono">78 943 53 66</strong>.
          </p>
          <p className="flex items-center gap-1">
            <span>Dédié à la transmission bienveillante de la Parole d'Allah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
