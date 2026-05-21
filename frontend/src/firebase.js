import { initializeApp }
from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "PASTE_API_KEY",

  authDomain:
    "PASTE_AUTH_DOMAIN",

  projectId:
    "PASTE_PROJECT_ID",

  storageBucket:
    "PASTE_STORAGE_BUCKET",

  messagingSenderId:
    "PASTE_MESSAGING_SENDER_ID",

  appId:
    "PASTE_APP_ID",
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const provider =
  new GoogleAuthProvider();