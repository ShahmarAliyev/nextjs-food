/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import TacoList from "../components/TacoList";
import Featured from "../components/Featured";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sergios Tacos</title>
        <meta
          name="Tacos and Quesdillas"
          content="Sergio and Mukhtar came together to make the best tacos and mexican food in Door County"
        />
        <link rel="icon" href="/taco.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Purple+Purse&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Logo />
      <Featured />
      <TacoList />
      {/* <Cart /> */}
      {/* <Product /> */}
    </div>
  );
}
