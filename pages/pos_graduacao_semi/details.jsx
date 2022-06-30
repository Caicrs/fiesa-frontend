import NavbarComp from '../components/navbar';
import SubNavbarComp from '../components/subnavbar';
import Contents_details from '../pos_graduacao_semi/details/content_details'
import Details from '../pos_graduacao_semi/details/details_1'
import Head from 'next/head';
import Footer from '../components/homepage-content/footer';

export default function Details_main() {
    return (
        <>
           <NavbarComp></NavbarComp>
            <SubNavbarComp></SubNavbarComp>
           <Details></Details>
            <Contents_details></Contents_details>
            <Head>
                <title>Advocacia Criminal | Pós Graduação Semi-Presencial </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
            </Head>
            <Footer></Footer>
        </>
    );
}