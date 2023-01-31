import React from "react";
import { useState } from "react";
import useList from "./ListHook";
import useComp from "./CompleteHook";
import styles from "./ListAdd.module.css";

export default function ListAdd() {
  const StoredList = localStorage.getItem("List") ? localStorage.getItem("List").split(','):[];
  const StoredComp = localStorage.getItem("Complete") ? localStorage.getItem("Complete").split(','):[];

  const [list, push, pull] = useList([...StoredList]);
  const [comp, addcomp, delcomp, changeComp] = useComp([...StoredComp]);
  const [todo, setTodo] = useState("");
  const [random, setRandom] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    push(todo);
    setTodo("");
    setRandom(Math.floor(Math.random() * backGround.length));
    addcomp();
  };
  const backGround = ["#198754", "#087990", "#7b6214", "#a94f03", "#083c89", "#fd7e14", "rgb(27, 249, 146)", "rgb(164, 6, 6)", "rgb(168, 15, 40)",];
  const randomColor = (index, completed) => {
    if (completed) return "grey";
    return backGround[(random + index) % backGround.length];
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.col}>
          <div className={styles.inputBox}>
            <input type="text" required value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <span className={styles.text}>ToDo Item Here</span>
            <span className={styles.line}></span>
          </div>
        </div>
        <div className="d-grid gap-2 col-2 mx-auto my-2">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="accordion" id="accordionExample">
        {list.map((item, index) => {
          if (item === "") return null;
          return (
            <div key={index}>
              <div className={styles["accordion-item"]} style={{ background: randomColor(index) }}>
                <h2 className={styles["accordion-header"]}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#".concat(index)} style={{ background: randomColor(index, comp[index]) }}>
                    {comp[index] && (<strike><h5 style={{ color: "white" }}>{item.slice(0, 65)}</h5></strike>)}
                    {!comp[index] && (<h5 style={{ color: "white" }}>{item.slice(0, 65)}</h5>)}
                  </button>
                </h2>
                <div id={index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">{item.length > 65 && (<div className="accordion-body">{item}</div>)}</div>
              </div>
              <button onClick={() => {pull(index);delcomp(index); }} className={styles.delete}>
                <span className="material-symbols-outlined" title="Delete">
                  delete
                </span>
              </button>
              <div>
              <button onClick={() => {changeComp(index)}} className={styles.complete} style={{transform: 'translate(-105px, -86px)'}}>
                <span className="material-symbols-outlined" title="Mark As Completed">
                  check_circle
                </span>
              </button>
              <button
                onClick={() => { setTodo(list[index]); pull(index); delcomp(index);}} className={styles.complete} >
                <span className="material-symbols-outlined" title="Edit">
                  edit_note
                </span>
              </button>
              <button onClick={() => {   navigator.clipboard.writeText(list[index]); }} className={styles.complete} style={{transform:'translate(-105px, -35px)'}}>
                <span className="material-symbols-outlined" title="Copy">
                  content_copy
                </span>
              </button>
                  </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
