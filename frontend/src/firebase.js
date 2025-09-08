import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Para autenticación (login/register)
import { getStorage } from "firebase/storage";  // Para uploads de evidencias (fotos/docs)

// Tu configuración de Firebase (cópiatela de Firebase Console si no es exacta)
const firebaseConfig = {
  apiKey: "AIzaSyDFR1j6Wsj516XzWnNc3KlmkbZxdVeV3X-o",
  authDomain: "clinic-compliance-app-a7123.firebaseapp.com",
  projectId: "clinic-compliance-app-a7123",
  storageBucket: "clinic-compliance-app-a7123.firebasestorage.app",
  messagingSenderId: "693000613325",
  appId: "1:693000613325:web:7ea4124f68c2a361aee884",
  measurementId: "G-DPX3LPSZNk"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta lo que necesitas
export const auth = getAuth(app);  // Para login/register
export const storage = getStorage(app);  // Para subir archivos

