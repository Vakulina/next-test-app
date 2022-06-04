import { useRouter } from "next/router";
import styles from '../../styles/Task.module.css'

export default function Task({ task }) {
  const { query } = useRouter();
  const legibleDate = new Date(task.date).toLocaleString()

  return (
    <div className={styles.task}>
      <h1>{task.title}</h1>
      <div className={styles.field}>
        <h2 className={styles.caption}>Описание:</h2>
        <p className={styles.description}>{task.description}</p>
      </div>
      <div className={styles.field}>
        <h2 className={styles.caption}>Дата создания:</h2>
        <p className={styles.description}>{legibleDate}</p>
      </div>
    </div>
  )
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/tasks/${params.id}`)
  const task = await response.json()
  return {
    props: { task },
  }
}