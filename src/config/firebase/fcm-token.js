import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestoreDatabase } from "./config";

const collectionName = "fcmTokens";
const fcmTokensCollectionReference = collection(
  firestoreDatabase,
  collectionName
);

export const getFcmTokens = async () => {
  let fcmTokens = [];
  const snapshot = await getDocs(fcmTokensCollectionReference);
  snapshot.docs.forEach((doc) => {
    fcmTokens.push({ ...doc.data(), id: doc.id });
  });
  return fcmTokens;
};

export const addFcmToken = async (data) => {
  await addDoc(fcmTokensCollectionReference, data);
  return true;
};
