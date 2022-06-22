import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import banner1 from '../../../public/banner1_mob.png';
import banner2 from '../../../public/banner2.png';
import banner3 from '../../../public/banner3.png';


import React, { useState, useEffect } from 'react';

export default function Content1() {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 600px)' });

    const [windowSize, setWindow] = useState(false);
    const [cont,setCont] = useState(1)

    const images = [banner2,banner3]



    useEffect(() => setWindow(isTabletOrMobile), []);
    // TABLET | MOBILE VERSION
    if (windowSize == false) {
        return (
            <>
            <div className="imgbox_mob">
            <Image alt="x"   src={images[0]}></Image>
            </div>
                
            </>
        );
    }

    return (
        <>
            <div className="imgbox_mob">
                <Image
                   alt="x" 
                 
                    src={banner2}
                ></Image>
            </div>
        </>
    );
}

/*
<div className="content1_container">
            
            <Container>
                <h1 className="title_c1">O seu futuro se <br></br>encontra aqui !!</h1>
                <h5 className="subtitle_c1">Com +40 opções de pós-graduações totalmente EAD,<br></br>
                 clique no botão abaixo e descubra nossos nichos.</h5>
                 <br></br>,
                 <Button variant="contained">Explorar cursos</Button>
            </Container> 
        
              
        </div>
*/
