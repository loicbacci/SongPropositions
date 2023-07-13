import { initializeApp } from "firebase/app";
import {
  FirestoreDataConverter,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const propositionConverter: FirestoreDataConverter<Proposition> = {
  toFirestore: (prop) => ({
    title: prop.title,
    artist: prop.artist,
    audioURL: prop.audioURL,
    sheetMusicURL: prop.sheetMusicURL,
    notes: prop.notes,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      title: data["title"] as string,
      artist: data["artist"] as string,
      audioURL: data["audioURL"] as string,
      sheetMusicURL: data["sheetMusicURL"] as string,
      notes: data["notes"] as string,
    };
  },
};

export const getAllPropositions = async (): Promise<Proposition[]> => {
  const snap = await getDocs(
    collection(database, "propositions").withConverter(propositionConverter)
  );
  return snap.docs.map((d) => d.data());
};
