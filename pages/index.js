import Head from "next/head";
import TacoList from "../components/TacoList";
import Logogreeting from "../components/Logogreeting";
import Featured from "../components/Featured";

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
      <Logogreeting />
      <Featured />
      <TacoList />
      {/* <Cart /> */}
      {/* <Product /> */}
    </div>
  );
}
