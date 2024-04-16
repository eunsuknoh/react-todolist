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

  const [done, setDone] = useState(false);
  function handleDone(e) {
    const chosenTodo = e.target.parentNode.parentNode.childNodes[0];
    if (done === false) {
      chosenTodo.style.textDecoration = "line-through";
      setDone(true);
    } else {
      chosenTodo.style.textDecoration = "none";
      setDone(false);
    }
  }
  const current = new Date();
  const currentFullYear = current.getFullYear().toString();
  const Year = currentFullYear.slice(2, 4);
  const currentTime2 = current.getMonth();
  const Month = currentTime2 + 1;
  const Day = current.getDate();

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
      <span className={styles.date}>
        ・ {Year} / {Month} / {Day}
      </span>
      <ul>
        {todoList
          .map((item, index) => {
            return (
              <div className={styles.todo_list} key={index}>
                <li>{item}</li>
                <div>
                  <button
                    value={done}
                    onClick={handleDone}
                    className={styles.check_btn}
                  >
                    ☑︎
                  </button>
                  <button onClick={handleDelete} className={styles.delete_btn}>
                    ☒
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
