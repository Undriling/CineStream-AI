// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  Firebase_ApiKey,
  Firebase_AppId,
  Firebase_AuthDomain,
  Firebase_MeasurementId,
  Firebase_MessagingSenderId,
  Firebase_ProjectId,
  Firebase_StorageBucket,
} from "../constants";

const firebaseConfig = {
  apiKey: Firebase_ApiKey,
  authDomain: Firebase_AuthDomain,
  projectId: Firebase_ProjectId,
  storageBucket: Firebase_StorageBucket,
  messagingSenderId: Firebase_MessagingSenderId,
  appId: Firebase_AppId,
  measurementId: Firebase_MeasurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
