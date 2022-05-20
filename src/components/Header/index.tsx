import styles from "./styles/styles.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

export function Header() {
  const [taskOfDay, setTaskOfDay] = useState(false);
  const [conclued, setConclued] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>to.do</h1>
        <nav>
          <a
            className={taskOfDay ? styles.active : undefined}
            onClick={() => {
              router.push("/");
              setTaskOfDay(true);
              setConclued(false)
              setDeleted(false)
            }}
          >
            Tarefas do dia
          </a>
          <a
            className={conclued ? styles.active : undefined}
            onClick={() => {
              router.push("/concluedTask");
              setConclued(true);
              setTaskOfDay(false)
              setDeleted(false)
            }}
          >
            Tarefas concluídas
          </a>
          <a
            className={deleted ? styles.active : undefined}
            onClick={() => {
              router.push("/deletedTask");
              setDeleted(true);
              setTaskOfDay(false)
              setConclued(false)
            }}
          >
            Tarefas excluídas/desistidas
          </a>
        </nav>
      </div>
    </header>
  );
}
