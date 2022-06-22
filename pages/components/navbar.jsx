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

    useEffect(() => setWindow(isTabletOrMobile), []);

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
                 
                <div className="img_box">
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
                     
                       
                        <a id="home" className="menu-item" href="/">
                            Home
                        </a>
                        <a id="about" className="menu-item" href="/">
                            Graduação
                        </a>
                        <a id="contact" className="menu-item" href="/contact">
                            Pós graduação EAD
                        </a>
                        <a id="contact" className="menu-item" href="/contact">
                            Pós graduação Semi-Presencial
                        </a>
                        <a id="contact" className="menu-item" href="/contact">
                            MBA
                        </a>
                        <a id="contact" className="menu-item" href="/contact">
                            Registro do MEC
                        </a>
                    </Menu>
                </div>
                <div className="img_box">
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
