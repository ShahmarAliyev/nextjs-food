import Head from "next/head";
import Featured from "../components/Featured";
import TacoList from "../components/TacoList";
import Cart from "./cart";
import Product from "./product/[id]";

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
      </Head>
      <Featured />
      <TacoList />
      <Cart />
      <Product />
    </div>
  );
}
