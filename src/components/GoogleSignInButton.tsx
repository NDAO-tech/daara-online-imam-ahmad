import React from 'react';
import { User } from 'firebase/auth';
import { LogOut } from 'lucide-react';

interface GoogleSignInButtonProps {
  user: User | null;
  isLoading: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
  className?: string;
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  user,
  isLoading,
  onSignIn,
  onSignOut,
  className = ''
}) => {
  if (user) {
    return (
      <div className={`flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-xs ${className}`}>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'Utilisateur'}
            className="w-7 h-7 rounded-full object-cover border border-slate-200"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold font-mono">
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'G'}
          </div>
        )}
        <div className="text-xs text-left leading-tight">
          <span className="font-semibold text-slate-900 block truncate max-w-[140px]">
            {user.displayName || 'Enseignant connecté'}
          </span>
          <span className="text-[10px] text-slate-400 block truncate max-w-[140px]">
            {user.email || 'Compte Google'}
          </span>
        </div>
        <button
          onClick={onSignOut}
          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          title="Se déconnecter de Google"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onSignIn}
      disabled={isLoading}
      className={`relative inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer disabled:opacity-60 ${className}`}
      title="Connexion avec Google pour créer des réunions Google Meet"
    >
      <svg
        className="w-4 h-4 shrink-0"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
      <span>{isLoading ? 'Connexion en cours...' : 'Se connecter avec Google'}</span>
    </button>
  );
};
