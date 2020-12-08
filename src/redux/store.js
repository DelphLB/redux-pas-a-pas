// 3) Import fonction createStore pour créer un store
import {createStore, compose} from "redux";
// 4) Import les différents reducers
import rootReducer from "./reducers";

// 5) Créer le store avec les différents reducers
export default createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
