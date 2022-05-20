import Head from "next/head";
import Image from "next/image";
import { GrTask } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";

import styles from "./styles/home.module.scss";
import { useEffect, useState, useContext } from "react";

import { ListContext } from "../context/listContext";

export default function Home() {
  const [nameTask, setNameTask] = useState("");
  const {
    list,
    setList,
    deletedList,
    setDeletedList,
    concluedList,
    setConcluedList,
    handleSaveTask,
    handleDeleteTask,
    handleUpdateTask,
    handleConcluedTask
  } = useContext(ListContext);

  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <>
      <Head>
        <title>Home | to-do</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <div className={styles.firstDiv}>
            <h3>My Tasks</h3>
            <div className={styles.internFirstDiv}>
              <input
                placeholder="Digite sua tarefa aqui..."
                className={styles.input}
                type="text"
                value={nameTask}
                onChange={(event) => setNameTask(event.target.value)}
              />
              <button
                className={styles.button}
                onClick={() => {
                  setNameTask("");
                  handleSaveTask(nameTask);
                }}
              >
                Save
              </button>
            </div>
          </div>
          <div className={styles.secondDiv}>
            <ul>
              {list.map((task, index) => {
                return (
                  <li key={task.id}>
                    <input
                      type="text"
                      className={styles.inputList}
                      value={task?.name}
                      onChange={(event) => handleUpdateTask(event, index)}
                    />
                    <div className={styles.insideLi}>
                      <button onClick={() => handleDeleteTask(index)}>
                        Delete
                      </button>
                      <button className={styles.conc} onClick={() => handleConcluedTask(index)}>
                        Concluir
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
