// Firebase 연결 (학생·교사 페이지 공용)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInAnonymously, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, collection, serverTimestamp, deleteField,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLnlilfWPLbuigfV_oBkXmG2MhOryYOY8",
  authDomain: "mathsea-7773f.firebaseapp.com",
  projectId: "mathsea-7773f",
  storageBucket: "mathsea-7773f.firebasestorage.app",
  messagingSenderId: "956892102998",
  appId: "1:956892102998:web:c114d6f568ca499d70d6f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 학생: 익명 로그인 (이름·이메일 없음)
// 이미 로그인돼 있으면(같은 브라우저에서 교사가 테스트하는 경우 등) 그 계정을 그대로 사용
export async function studentLogin() {
  await auth.authStateReady();
  if (auth.currentUser) return auth.currentUser;
  const res = await signInAnonymously(auth);
  return res.user;
}

// 교사: 구글 로그인
export async function teacherLogin() {
  const res = await signInWithPopup(auth, new GoogleAuthProvider());
  return res.user;
}
export { onAuthStateChanged, signOut };

// 경로
export const roomRef = (code) => doc(db, "rooms", code);
export const teamRef = (code, n) => doc(db, "rooms", code, "teams", String(n));
export const teamsCol = (code) => collection(db, "rooms", code, "teams");
// 조원 명단(학번·이름): 교사만 읽을 수 있도록 별도 컬렉션
export const memberRef = (code, n) => doc(db, "rooms", code, "members", String(n));
export const membersCol = (code) => collection(db, "rooms", code, "members");

export { getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp, deleteField };
