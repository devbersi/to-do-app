import Head from "next/head";
import Image from "next/image";

import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | to-do</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <div className={styles.firstDiv}>
            <h3 className={styles.title}>Minhas Tasks</h3>
            <div>
              <input className={styles.input} type="text" />
              <button>Criar tarefa</button>
            </div>
          </div>
          <div className={styles.secondDiv}>
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                <p>oioioi</p>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <p>oioioi</p>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <p>oioioi</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
