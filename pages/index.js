import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sergios Tacos</title>
        <meta
          name="Tacos and Quesdillas"
          content="Sergio and Mukhtar came together to make the best tacos and mexican food in Door County"
        />
        <link rel="icon" href="/taco.png" />
      </Head>
      HomePage
    </div>
  );
}
