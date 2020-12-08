// 6) utiliser combineReducers pour faire le routage des reducers
import {combineReducers} from "redux";

// 7) Listes des différents reducers
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

// 8) utiliser les différents reducers
export default combineReducers({todos, visibilityFilter});
