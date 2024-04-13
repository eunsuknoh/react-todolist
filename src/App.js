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
    const deleteBtn = e.timeStamp;
    // console.dir(e.target.parentElement);
    // console.log(e.target.parentElement.id);
    // deleteBtn 클릭 시 해당 div 삭제하기 > div id 값이 없음. id 값으로 어떤 요소를 넣어야하는지 ?
    // Date.now() 효과 없음, 같은 값만 출력됨..
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
                <button onClick={handleDelete} className={styles.delete_btn}>
                  ✕
                </button>
              </div>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default App;
