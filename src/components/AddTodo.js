import React, {useState} from "react";
import {connect} from "react-redux";
// 33) utiliser l'action AddTodo
import {addTodo} from "../redux/actions";

const AddTodo = ({addTodo}) => {
  // 34) besoin des hooks car il y a un entre deux entre ce que l'on ajoute dans le store et le formulaire de modification
  const [input, setInput] = useState("");

  const updateInput = input => {
    setInput(input);
  };

  const handleAddTodo = () => {
    // 35) Modifier le store de todos pour ajouter une nouvelle todo
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input onChange={e => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={() => handleAddTodo()}>
        Add Todo
      </button>
    </div>
  );
};

// 36) utiliser l'action addTodo via mapDispatchToProps
export default connect(null, {addTodo})(AddTodo);
