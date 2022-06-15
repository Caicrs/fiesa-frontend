import Head from "next/head";
import NavbarComp from "./components/navbar";
import MiniNav from "./components/mininav";
import Content1 from "./components/homepage-content/content-1";
import Content2 from "./components/homepage-content/content-2";
import Footer from "./components/homepage-content/footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <MiniNav></MiniNav>
      <NavbarComp></NavbarComp>

      <Head>
        <title>Fiesa - Homepage </title>
        <meta name="description" content="Fiesa" />
        <link rel="icon" href="/favicon_fiesa.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></Script>

        <Script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></Script>

        <Script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></Script>
      </Head>

      <Content1></Content1>
      <Content2></Content2>

      <Footer></Footer>
    </>
  );
}
