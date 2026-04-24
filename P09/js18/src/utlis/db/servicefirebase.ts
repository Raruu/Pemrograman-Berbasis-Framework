/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";
import type { AppUser, OAuthUserData, UserRole } from "@/types/auth";

const db = getFirestore(app);

async function getUserByEmail(email: string): Promise<AppUser | null> {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as AppUser[];

  return data[0] ?? null;
}

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(email: string) {
  return getUserByEmail(email);
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: UserRole;
  },
  callback: (result: { status: string; message: string }) => void,
) {
  const data = await getUserByEmail(userData.email);

  if (data) {
    callback({
      status: "error",
      message: "Email already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "user";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  }
}

async function syncOAuthUser(userData: OAuthUserData, defaultRole: UserRole) {
  try {
    const data = await getUserByEmail(userData.email);

    if (data?.id) {
      const nextUserData = {
        ...userData,
        role: data.role ?? defaultRole,
      };

      await updateDoc(doc(db, "users", data.id), nextUserData);
      return {
        id: data.id,
        ...data,
        ...nextUserData,
      } as AppUser;
    } else {
      const nextUserData = {
        ...userData,
        role: defaultRole,
      };

      const docRef = await addDoc(collection(db, "users"), nextUserData);
      return {
        id: docRef.id,
        ...nextUserData,
      } as AppUser;
    }
  } catch (error: any) {
    throw new Error(error?.message || "Failed to sync OAuth user");
  }
}

export async function signInWithGoogle(userData: OAuthUserData) {
  return syncOAuthUser(userData, "member");
}

export async function signInWithGitHub(userData: OAuthUserData) {
  return syncOAuthUser(userData, "editor");
}
