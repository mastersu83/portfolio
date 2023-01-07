import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <div className="background-animation">
        <div id="ball-one" />
        <div id="ball-two" />
        <div id="ball-three" />
      </div>
    </>
  );
}
