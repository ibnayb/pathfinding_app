import React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "utils/serviceWorker";
import Modal from "react-modal";

import { Provider } from "react-redux";
import store from "store";
import WebFont from "webfontloader";
import "utils/i18n";

import "normalize.css";
import "styles/index.scss";

import App from "components/App";

WebFont.load({
  google: {
    families: ["Montserrat:400,600,700"],
  },
});

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.unregister();
