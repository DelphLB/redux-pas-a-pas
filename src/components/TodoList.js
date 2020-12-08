import React from "react";
// 10) import de connect qui va lier le store au composabt TodoList
import {connect} from "react-redux";
import Todo from "./Todo";
// 17) systeme de filtrage en fonction de l'état de la todo
import {getTodosByVisibilityFilter} from "../redux/selectors";

// 16) Appeler la state todos du store en tant que props todos
const TodoList = ({todos}) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "Pas de todo!"}
  </ul>
);

// 12) Définition de store pour récupérer une ou plusieurs données du store (state === store)
const mapStateToProps = state => {
  // 14) Filtrage
  const {visibilityFilter} = state;
  // 13) Récupérer en fonction du filter cliquer une liste de todo
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // 15) Récupération de la liste des todos
  return {todos};
};
// 11) utilisation du store via mapStateToProps
export default connect(mapStateToProps)(TodoList);
