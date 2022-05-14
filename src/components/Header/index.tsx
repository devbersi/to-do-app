import styles from "./styles/styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>to.do</h1>
        <nav>
          <a className={styles.active} href="">
            Tarefas do dia
          </a>
          <a href="">Tarefas concluídas</a>
          <a href="">Tarefas excluídas/desistidas</a>
        </nav>
      </div>
    </header>
  );
}
