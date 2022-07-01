import Head from 'next/head';
import NavbarComp from './components/navbar';
import Content1 from './components/homepage-content/content-1';
import Content2 from './components/homepage-content/content-2';
import Content3 from './components/homepage-content/content-3';
import Footer from './components/homepage-content/footer';
import SubNavbarComp from './components/subnavbar';
import Vantagens from './components/homepage-content/vantagens';


export default function Home() {
    return (
        <>
            <NavbarComp></NavbarComp>
            
            <SubNavbarComp></SubNavbarComp>

            <Head>
                <title>Fiesa - Homepage </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            </Head>

            <Content1></Content1>
            <Vantagens></Vantagens>
            <Content3></Content3>
            <Content2></Content2>
            <Footer></Footer> 
        </>
    );
}
