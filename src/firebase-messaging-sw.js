/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { firebaseConfig, firbaseApp } from "./config/firebase";
import firebaseAdmin from "firebase-admin";
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

firbaseApp.initializeApp(firebaseConfig);

const messaging = firebaseAdmin.messaging();
