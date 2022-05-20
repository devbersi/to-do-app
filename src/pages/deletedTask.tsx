import Head from "next/head";
import Image from "next/image";
import { GrTask } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";

import styles from "./styles/conclued.module.scss";
import { useEffect, useState, useContext } from "react";

import { ListContext } from "../context/listContext";

export default function DeletedTask() {
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
    handleDeleteAllDeleteds
  } = useContext(ListContext);

  useEffect(() => {
    console.log("list", concluedList);
  }, [list]);

  return (
    <>
      <Head>
        <title>Deleted's | to-do</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <div className={styles.firstDiv}>
            <h3>Deleted Tasks</h3>
            <button onClick={() => handleDeleteAllDeleteds()}>Delete All</button>
          </div>
          <div className={styles.secondDiv}>
            <ul>
              {deletedList.map((task, index) => {
                return (
                  <li key={task.id}>
                    <input
                      type="text"
                      className={styles.inputList}
                      value={task[0].name}
                      onChange={(event) => handleUpdateTask(event, index)}
                      disabled={true}
                    />
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
