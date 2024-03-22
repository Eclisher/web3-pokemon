
import Head from 'next/head';
import Link from 'next/link'; 
import styles from '../style/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Pokemon List</title>
        <meta name="description" content="Welcome to my Pokemon list!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome in Pokemon List!
        </h1>

        <div className={styles.card}>
          <p>Pokemon</p>
          <div className={styles.cardFooter}>
            <Link href="/client">
              <button className={styles.button}>Client</button>
            </Link>
            <Link href="/server">
              <button className={styles.button}>Server</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
