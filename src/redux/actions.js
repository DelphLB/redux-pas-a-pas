// 28) Listes de toutes les actions possibles
import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from "./actionTypes";

let nextTodoId = 0;

//  37) action ajout todo
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

// 29) action modifier etat de la todo
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {id},
});

// 43) action modifier état du filtre
export const setFilter = filter => ({type: SET_FILTER, payload: {filter}});
