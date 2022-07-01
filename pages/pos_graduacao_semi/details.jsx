import NavbarComp from '../components/navbar';
import SubNavbarComp from '../components/subnavbar';
import Contents_details from '../pos_graduacao_semi/details/content_details'
import Details from '../pos_graduacao_semi/details/details_1'
import Head from 'next/head';
import Cards from './details/details_cards';
import ContentMenus from './details/content_menus';
import Footer from '../components/homepage-content/footer';

export default function Details_main() {
    return (
        <>
           <NavbarComp></NavbarComp>
            <SubNavbarComp></SubNavbarComp>
           <Details></Details>
           <Cards></Cards>
           <ContentMenus></ContentMenus>
            <Contents_details></Contents_details>
            <Head>
                <title>Advocacia Criminal | Pós Graduação Semi-Presencial </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            </Head>
          <Footer></Footer>
        </>
    );
}