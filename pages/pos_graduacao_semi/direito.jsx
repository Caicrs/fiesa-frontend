import NavbarComp from '../components/navbar';
import SubNavbarComp from '../components/subnavbar';
import Content1 from '../components/homepage-content/content-1'
import ChooseCategory from './choose_category_direito';
import Head from 'next/head';

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
            </Head>

        </>
    );
}