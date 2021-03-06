import styles from '../styles/Home.module.css'
import Link from "next/link";

export function Home({ tasks }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Список задач
      </h1>
      <ul className={styles.tasks}>
        {tasks.map(task =>
          <li key={task.id} className={styles.task}>
            <Link href={`tasks/${task.id}`} >
              <a className={styles.link}>{task.title}</a>
            </Link>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Home;

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_HOST}/tasks/`)
  const tasks = await response.json()

  return {
    props: { tasks },
  }
}

