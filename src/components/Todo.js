import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
// 27) Appel de la fonction dans les actions
import {toggleTodo} from "../redux/actions";

// 25) toggleTodo function pour passer de complete ou non qu'on modifie via une action et non d'un hooks
const Todo = ({todo, toggleTodo}) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "🐦" : "🌟"}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);
// 26) Récuperer le toggle todo via mapDispatchToProps
export default connect(null, {toggleTodo})(Todo);
