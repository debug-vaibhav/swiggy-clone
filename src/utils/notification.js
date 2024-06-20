import { getToken, isSupported } from "firebase/messaging";
import { config } from "../config/common/config";
import { firestoreMessaging } from "../config/firebase/config";
import { addFcmToken, getFcmTokens } from "../config/firebase/fcm-token";

const ifFcmTokenExists = (fcmTokens, fcmToken) => {
  for (let token of fcmTokens) {
    if (token.token === fcmToken) {
      return true;
    }
    return false;
  }
};

export const generateFcmToken = async () => {
  const messaging = async () => (await isSupported()) && firestoreMessaging;
  const msg = await messaging();
  const fcmToken = await getToken(msg, { vapidKey: config.vapidKey });
  return fcmToken;
};

export const subscribeToNotifications = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const fcmToken = await generateFcmToken();
    if (fcmToken) {
      const fcmTokens = await getFcmTokens();
      const doesFcmTokenExists = ifFcmTokenExists(fcmTokens, fcmToken);
      if (!doesFcmTokenExists) {
        await addFcmToken({ token: fcmToken });
      }
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } else {
    alert("Please grant notifications permission");
  }
};
