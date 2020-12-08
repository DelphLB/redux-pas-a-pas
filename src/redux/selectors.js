// 18) Listes des différents filtres
import {VISIBILITY_FILTERS} from "../constants";

// 19) Différents todos en fonction du filtrage

// 20) Récuperer les todos du store
export const getTodosState = store => store.todos;

// 21) Récuperer la liste des todos si il y a des todos
export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];
// 22) Récuperer une todo en particulier si il y a des todos
export const getTodoById = (store, id) =>
  getTodosState(store) ? {...getTodosState(store).byIds[id], id} : {};

/**
 * Assez complexe
 * combiner plusieurs informations de différents reducers
 */

// 23)Récupérer les todos si il y a bien la listes des todos
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

// 24) Filtrer les todos en fonction du clique utilisateur
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
