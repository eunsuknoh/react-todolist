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
        <button>Add ᰔ</button>
      </form>
      <p></p>
      <ul>
        {todoList
          .map((item, index) => {
            return (
              <div className={styles.todo_list}>
                <li key={index}>{item}</li>
                <button className={styles.delete_btn}>✕</button>
              </div>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default App;
