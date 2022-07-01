import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function NavbarComp() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), [isTabletOrMobile]);

    // DESKTOP VERSION
    if (windowSize == false) {
        return (<>
        <div className="mininav_container">
                    <div className="mini_container">
                        <Link href="#">
                            <div className="btn_painel mec">
                                Registro do MEC
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="btn_painel mec">Contato</div>
                        </Link>
                    </div>
                </div>
                <div className="navbar">
                 
                <div className="img_box_logo">
                    <Image
                        src="/fiesa_logo.svg"
                        width="400"
                        height="70"
                        className="logo_img"
                        alt="React Bootstrap logo"
                    />
                </div>
            </div>
                </>
            
        );
    }

    // MOBILE VERSION
    return (
        <>
            <div className="navbar navmob">
                <div className="button_nav">
                    <Menu
                    noOverlay 
                    disableCloseOnEsc
                        className="subnav_mob"
                        customBurgerIcon={<MenuIcon />}
                        customCrossIcon={<CloseIcon />}
                       
                    >
                     
                     <Link href="/"> 
                        <div id="home" className="menu-item" href="/">
                            Home
                        </div>
                        </Link>
                        <Link href="/#graduacao"> 
                        <div id="about" className="menu-item" href="/">
                            Graduação
                        </div>
                        </Link>
                        <Link href="/#pos_graduacao_ead"> 
                        <div id="contact" className="menu-item" href="/contact">
                            Pós graduação EAD
                        </div>
                        </Link>
                        <Link href="/#pos_graduacao_semi"> 
                        <div id="contact" className="menu-item" href="/contact">
                            Pós graduação Semi-Presencial
                        </div>
                        </Link>
                        <Link href="/#mba"> 
                        <div id="contact" className="menu-item" href="/contact">
                            MBA
                        </div>
                        </Link>
                        <Link href="/sobre"> 
                        <div id="contact" className="menu-item" href="">
                            Registro do MEC
                        </div></Link>
                    </Menu>
                </div>
                <div className="img_box_logo">
                    <Image
                        src="/fiesa_logo_mob.svg"
                        width="270"
                        height="70"
                        className="logo_img"
                        alt="React Bootstrap logo"
                    />
                </div>
            </div>
        </>
    );
}
