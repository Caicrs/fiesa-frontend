import { Container } from 'react-bootstrap';
import Image from 'next/image';
import joystick from '../../../public/joystick.svg';
import certificate from '../../../public/certificate.svg';
import laptop from '../../../public/laptop.svg';
import schoolhat from '../../../public/school-hat.svg';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';

export default function Vantagens() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), [isTabletOrMobile]);
    // TABLET | MOBILE VERSION
    if (windowSize == true) {
        return (
            <>
                <div className="vantagens_cont_mobile">
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={joystick}></Image>
                    <p className="text_iconbox">
                       Games interativos relacionados ao seu curso
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={laptop}></Image>
                    <p className="text_iconbox">
                        Suporte completo ao EAD
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={certificate}></Image>
                    <p className="text_iconbox">
                        Autorizado pelo MEC
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={schoolhat}></Image>
                    <p className="text_iconbox">
                        Cursos aceitos em concursos públicos e órgãos federais
                    </p>
                </div>
           
            </div>
            </>
        );
    }
    return (
        <>
            <div className="vantagens_cont">
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={joystick}></Image>
                    <p className="text_iconbox">
                       Games interativos relacionados ao seu curso
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={laptop}></Image>
                    <p className="text_iconbox">
                    Suporte completo ao EAD
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={certificate}></Image>
                    <p className="text_iconbox">
                        Autorizado pelo MEC
                    </p>
                </div>
                <div className="box_vant">
                    <Image alt="a" className="img_icon" src={schoolhat}></Image>
                    <p className="text_iconbox">
                        Cursos aceitos em concursos públicos e órgãos federais
                    </p>
                </div>
           
            </div>
        </>
    );
}
