import ReactDOM from "react-dom/client";
import { subscribeToNotifications } from "./utils/notification";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("SUCCESS : ", registration.scope);
      subscribeToNotifications();
    })
    .catch((error) => {
      console.error("ERROR : ", error);
    });
}

root.render(<App />);
