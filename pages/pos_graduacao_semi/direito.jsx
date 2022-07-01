import NavbarComp from '../components/navbar';
import SubNavbarComp from '../components/subnavbar';
import Content1 from '../components/homepage-content/content-1'
import ChooseCategory from './chooseCategorys/choose_category_direito';
import Head from 'next/head';
import ContentMenus from './details/content_menus';
import Footer from '../components/homepage-content/footer';

export default function Home() {
    return (
        <>
           <NavbarComp></NavbarComp>
            <SubNavbarComp></SubNavbarComp>
            <Content1></Content1>
            <ChooseCategory></ChooseCategory>
            <Head>
                <title>Graduação em Direito </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            </Head>
            <Footer></Footer>
        </>
    );
}