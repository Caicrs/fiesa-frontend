import NavbarComp from './components/navbar';
import SubNavbarComp from './components/subnavbar';
import Head from 'next/head';

export default function Home() {
    return (
        <>
           <NavbarComp></NavbarComp>
            <SubNavbarComp></SubNavbarComp>
            <Head>
                <title>Fiesa - Homepage </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
            </Head>
        </>
    );
}