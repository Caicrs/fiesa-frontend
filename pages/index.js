import Head from "next/head";
import NavbarComp from "./components/navbar";
import MiniNav from "./components/mininav";
import Content1 from "./components/homepage-content/content-1";
import Content2 from "./components/homepage-content/content-2";
import Footer from "./components/homepage-content/footer";
import SubNavbarComp from "./components/subnavbar";


export default function Home() {

 
  return (
    <>

      <NavbarComp></NavbarComp>
      <SubNavbarComp></SubNavbarComp>

      <Head>
        <title>Fiesa - Homepage </title>
        <meta name="description" content="Fiesa" />
        <link rel="icon" href="/favicon_fiesa.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
       
      </Head>

      
      <Content2></Content2>

      <Footer></Footer>
    </>
  );
}
