import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList((todoList) => [todo, ...todoList]);
    setTodo("");
  }

  function handleDelete(e) {
    const deleteTodo = e.target.parentNode.parentNode;
    deleteTodo.remove();
  }

  function handleCheck(e) {
    const chosenTodo = e.target.parentNode.parentNode.childNodes[0];
    chosenTodo.style.textDecoration = "line-through";
  }

  return (
    <div className={styles.main_box}>
      <h3 className={styles.title}>To do list 💜</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="today's todo"
          value={todo}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <p></p>
      <ul>
        {todoList
          .map((item, index) => {
            return (
              <div className={styles.todo_list}>
                <li key={index}>{item}</li>
                <div>
                  <button onClick={handleCheck} className={styles.check_btn}>
                    V
                  </button>
                  <button onClick={handleDelete} className={styles.delete_btn}>
                    ✕
                  </button>
                </div>
              </div>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default App;
