import React from "react";
import ReactDOM from "react-dom";
// 1) Import Provider pour l'encapsulation de App pour diffuser le store dans n'import quel composant
import {Provider} from "react-redux";
// 2) Création d'un store pour récupérer toutes les données de votre app
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // 3) Encapsulation de App
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
