import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const MEET_SCOPES = [
  'https://www.googleapis.com/auth/meetings.space.created',
  'https://www.googleapis.com/auth/meetings.space.readonly',
  'https://www.googleapis.com/auth/meetings.space.settings'
];

const provider = new GoogleAuthProvider();
MEET_SCOPES.forEach((scope) => provider.addScope(scope));

// In-memory token cache (never stored in localStorage/sessionStorage)
let cachedAccessToken: string | null = null;
let isSigningIn = false;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Token not in memory; user needs interaction or refreshed token
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error("Impossible d'obtenir le jeton d'accès Google.");
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign In error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
  cachedAccessToken = null;
};

export interface MeetSpaceResponse {
  meetingUri: string;
  meetingCode: string;
  spaceName: string;
}

/**
 * Creates a new Google Meet space using the official Google Meet REST API v2
 */
export const createGoogleMeetSpace = async (token?: string): Promise<MeetSpaceResponse> => {
  const activeToken = token || cachedAccessToken;
  if (!activeToken) {
    throw new Error('Authentification Google requise pour générer une salle Google Meet.');
  }

  const response = await fetch('https://meet.googleapis.com/v2/spaces', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${activeToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      config: {
        accessType: 'OPEN'
      }
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Google Meet API error response:', errorBody);
    throw new Error(`Erreur Google Meet API (${response.status}): ${errorBody || response.statusText}`);
  }

  const data = await response.json();
  return {
    meetingUri: data.meetingUri || `https://meet.google.com/${data.meetingCode || ''}`,
    meetingCode: data.meetingCode || '',
    spaceName: data.name || ''
  };
};
