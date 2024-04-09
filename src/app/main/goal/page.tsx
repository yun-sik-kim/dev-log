import Image from "next/image";
import styles from "./../main.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.main_page}>
        <div className={styles.grid_child}>Project 1</div>
        <div className={styles.grid_child}>Project 2</div>
        <div className={styles.grid_child}>Project 3</div>
        <div className={styles.grid_child}>Project 4</div>
        <div className={styles.grid_child}>Project 5</div>
      </div>
    </main>
  );
}
