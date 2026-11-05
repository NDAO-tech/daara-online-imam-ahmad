import React from 'react';
import { ViewMode } from '../types/quran';
import { BookOpen, Sparkles, GraduationCap, CheckCircle2, Bookmark } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  memorizedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onSelectView, memorizedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single Brand Wordmark */}
          <button
            onClick={() => onSelectView('home')}
            className="flex items-center gap-2.5 text-left text-slate-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-amber-300 shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-emerald-950 font-serif">Daara Imam Ahmad Online</span>
              <span className="text-xs text-emerald-700 font-arabic ml-1.5 font-semibold">دار الإمام أحمد</span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Only the 4 requested sections) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectView('home')}
              className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'home' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => onSelectView('alphabet')}
              className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'alphabet' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
              }`}
            >
              Alphabet & Nouroul Bayan
            </button>
            <button
              onClick={() => onSelectView('quran')}
              className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'quran' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
              }`}
            >
              Le Saint Coran
            </button>
            <button
              onClick={() => onSelectView('classroom')}
              className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                currentView === 'classroom' ? 'text-emerald-800 font-semibold underline underline-offset-8 decoration-2 decoration-emerald-600' : ''
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Salles de cours</span>
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectView('classroom')}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Direct Meet</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar: 4 requested sections */}
        <div className="flex md:hidden overflow-x-auto py-2.5 gap-2 border-t border-slate-100 scrollbar-none text-xs">
          <button
            onClick={() => onSelectView('home')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'home' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => onSelectView('alphabet')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'alphabet' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Alphabet & Nouroul Bayan
          </button>
          <button
            onClick={() => onSelectView('quran')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
              currentView === 'quran' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Le Saint Coran
          </button>
          <button
            onClick={() => onSelectView('classroom')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 ${
              currentView === 'classroom' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Salles de cours</span>
          </button>
        </div>
      </div>
    </header>
  );
};
