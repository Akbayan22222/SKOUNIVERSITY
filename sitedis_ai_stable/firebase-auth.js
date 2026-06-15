import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5hFCGmw31NXzdJn0kana6pIvisfcTKzc",
  authDomain: "online-ai-sko.firebaseapp.com",
  projectId: "online-ai-sko",
  storageBucket: "online-ai-sko.firebasestorage.app",
  messagingSenderId: "33801883738",
  appId: "1:33801883738:web:ae4ace414ff2d07fa10863",
  measurementId: "G-3LF90PHNP6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.googleLogin = async function () {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    closeModal();
  } catch (error) {
    alert("Ошибка Google входа: " + error.message);
  }
};

window.emailRegister = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Аккаунт создан");
    closeModal();
  } catch (error) {
    alert("Ошибка регистрации: " + error.message);
  }
};

window.emailLogin = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    closeModal();
  } catch (error) {
    alert("Ошибка входа: " + error.message);
  }
};

window.logoutUser = async function () {
  await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  const authButton = document.getElementById("authButton");
  const logoutButton = document.getElementById("logoutButton");
if (user) {
  authButton.textContent = user.displayName || user.email;
  logoutButton.classList.remove("hidden");

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePhoto = document.getElementById("profilePhoto");

  if (profileName) profileName.textContent = user.displayName || "Пользователь";
  if (profileEmail) profileEmail.textContent = user.email || "Email не указан";

  if (profilePhoto && user.photoURL) {
    profilePhoto.src = user.photoURL;
    profilePhoto.classList.remove("hidden");
  }
} else {
  authButton.textContent = "Вход / Регистрация";
  logoutButton.classList.add("hidden");

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePhoto = document.getElementById("profilePhoto");

  if (profileName) profileName.textContent = "Вы не вошли в аккаунт";
  if (profileEmail) profileEmail.textContent = "Войдите через Google или Email";
  if (profilePhoto) profilePhoto.classList.add("hidden");
}
});