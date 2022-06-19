import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import MiniNav from './mininav';
import React from 'react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// CSS NAVBAR.CSS

export default function SubNavbarComp() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), []);

    console.log(windowSize + 'mobile');

    // DESKTOP VERSION
    if (windowSize == false) {
        return (
            <>
                
                <div className="subnavbar">
                    <div className="content_box ">
                        <div className="text">Home</div>
                    </div>
                    <div className="content_box ">
                        <div className="text">Sobre</div>
                    </div>
                    <div className="content_box">
                        <div className="text">Graduação</div>
                    </div>
                    <div className="content_box pos">
                        <div className="text pos">Pós Graduação</div>
                        <Image
                            src="/arrow.svg"
                            width="50"
                            height="20"
                            className="arrow_img pos"
                            alt="React Bootstrap logo"
                        />
                    </div>
                    <div className="content_box">
                        <div className="text">MBA</div>
                    </div>
                    <div className="content_2 ">
                        <div className="text alunos_btn">Acesso do aluno</div>
                    </div>
                </div>

               
            </>
        );
    }

    // MOBILE VERSION
    return <></>;
}

/*

*/
