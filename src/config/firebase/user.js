import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { firestoreDatabase } from "./config";

const collectionName = "users";
const userCollectionReference = collection(firestoreDatabase, collectionName);

export const getUsers = async () => {
  let users = [];
  const snapshot = await getDocs(userCollectionReference);
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  return users;
};

export const getUsersRealtime = async () => {
  let users = [];
  const snapshot = await onSnapshot(userCollectionReference);
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  return users;
};

export const addUser = async (data) => {
  const snapshot = await addDoc(userCollectionReference, data);
  return { ...snapshot.doc.data(), id: snapshot.doc.id };
};

export const deleteUser = async (id) => {
  const userReference = doc(firestoreDatabase, collectionName, id);
  const snapshot = await deleteDoc(userReference);
  return { ...snapshot.doc.data(), id: snapshot.doc.id };
};
