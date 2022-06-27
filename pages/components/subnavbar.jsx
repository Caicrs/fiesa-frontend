import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Select from 'react-select';
import arrow from '../../public/arrow.svg'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// CSS NAVBAR.CSS

export default function SubNavbarComp() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), [isTabletOrMobile]);

    // DESKTOP VERSION
    if (windowSize == false) {
        return (
            <>
                <div className="subnavbar">
                    <div className="content_box ">
                    <Link href="/">
                    <div className="text" >
                            Home
                        </div></Link>
                    </div>
                    <div className="content_box ">
                        <div className="text">Sobre</div>
                    </div>
                    <div className="content_box">
                        <Link href="/#graduacao">
                    <div className="text" >
                            Graduação
                        </div></Link>
                    </div>
                    <div className="content_box">
                    <Link href="/#mba">
                    <div className="text" >
                            MBA
                        </div></Link>
                    </div>
                    <div className="content_box pos">
                        <div className="dropdown">
                            <button className="dropbtn pos text"><h4>Pós Graduação</h4><Image alt="x" className="arrow_icon" src={arrow}/></button>
                            
                            <div className="dropdown-content">
                                <Link href="/#pos_graduacao_ead">Pós Graduação EAD</Link>
                                <Link href="/#pos_graduacao_semi">Pós Graduação Semi-Presencial</Link>
                            </div>
                        </div>
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
