import { Container } from 'react-bootstrap';
import Image from 'next/image';
import trophy1 from '../../../public/trophy1.svg';
import trophy2 from '../../../public/trophy2.svg';
import trophy3 from '../../../public/trophy3.svg';
import trophy4 from '../../../public/trophy4.svg';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';

export default function Content2() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), [isTabletOrMobile]);
     // TABLET | MOBILE VERSION
     if (windowSize == true) {
        return (
            <>
                <h1 className="title_courses">Conheça nossos cursos </h1>
                <div className="content2_container" id="graduacao">
                    <div className="left_box">
                        <div className="img">
                            <Image alt="React Bootstrap logo" className="img_trophy" src={trophy1}></Image>
                        </div>
                    </div>
                    <div className="right_box">
                        <h1 className="title_c2">| Graduação</h1>
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o Ensino
                                Médio, quando o aluno conclui a Educação Básica.
                            </p>
                        </div>
    
                        <div className="grid_courses">
                            <div className="box">Direito</div>
                            <div className="box">Educação</div>
                            <div className="box">Tecnologia</div>
                            <div className="box">Negócios</div>
                        </div>
                    </div>
                </div>
                <div className="content2_container" id="pos_graduacao_ead">
                    <div className="right_box">
                        <h1 className="title_c2 revert">| Pós Graduação EAD</h1>
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o Ensino
                                Médio, quando o aluno conclui a Educação Básica.
                            </p>
                        </div>
    
                        <div className="grid_courses">
                            <div className="box">Direito</div>
                            <div className="box">Educação</div>
                            <div className="box">Tecnologia</div>
                            <div className="box">Negócios</div>
                        </div>
                    </div>
                    <div className="left_box revert">
                    
                        <div className="img">
                            <Image alt="React Bootstrap logo" className="img_trophy" src={trophy2}></Image>
                        </div>
                    </div>
                    
                </div>
                <div className="content2_container" id="pos_graduacao_sp">
                    <div className="left_box">
                      
                        <div className="img">
                            <Image  alt="React Bootstrap logo" className="img_trophy" src={trophy3}></Image>
                        </div>
                    </div>
                    <div className="right_box">
                        <h1 className="title_c2">
                            | Pós Graduação Semi Presencial
                        </h1>
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o Ensino
                                Médio, quando o aluno conclui a Educação Básica.
                            </p>
                        </div>
    
                        <div className="grid_courses">
                            <div className="box">Direito</div>
                            <div className="box">Educação</div>
                            <div className="box">Tecnologia</div>
                            <div className="box">Negócios</div>
                        </div>
                    </div>
                </div>
                <div className="content2_container" id="mba">
                    
                    <div className="right_box ">
                        <h1 className="title_c2">| MBA</h1>
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o Ensino
                                Médio, quando o aluno conclui a Educação Básica.
                            </p>
                        </div>
    
                        <div className="grid_courses">
                            <div className="box">Direito</div>
                            <div className="box">Educação</div>
                            <div className="box">Tecnologia</div>
                            <div className="box">Negócios</div>
                        </div>
                    </div>
                    <div className="left_box revert">
                        
                        <div className="img">
                            <Image  alt="React Bootstrap logo" className="img_trophy mba" src={trophy4}></Image>
                        </div>
                    </div>
                </div>
            </>
        );
     }
    return (
        <>
            <h1 className="title_courses">Conheça nossos cursos</h1>
            <div className="content2_container" id="graduacao">
                <div className="left_box">
                    <div className="img">
                        <Image alt="React Bootstrap logo" className="img_trophy" src={trophy1}></Image>
                    </div>
                </div>
                <div className="right_box">
                    <h1 className="title_c2">| Graduação</h1>
                    <div className="text_box">
                        <p>
                            A palavra “graduação” está relacionada ao ensino
                            superior e pode ser entendida como “título
                            universitário recebido por um indivíduo”. A
                            graduação é o nível de ensino que vem após o Ensino
                            Médio, quando o aluno conclui a Educação Básica.
                        </p>
                    </div>

                    <div className="grid_courses">
                        <div className="box">Direito</div>
                        <div className="box">Educação</div>
                        <div className="box">Tecnologia</div>
                        <div className="box">Negócios</div>
                    </div>
                </div>
            </div>
            <div className="content2_container" id="pos_graduacao_ead">
                <div className="right_box">
                    <h1 className="title_c2 revert">| Pós Graduação EAD</h1>
                    <div className="text_box">
                        <p>
                            A palavra “graduação” está relacionada ao ensino
                            superior e pode ser entendida como “título
                            universitário recebido por um indivíduo”. A
                            graduação é o nível de ensino que vem após o Ensino
                            Médio, quando o aluno conclui a Educação Básica.
                        </p>
                    </div>

                    <div className="grid_courses">
                        <div className="box">Direito</div>
                        <div className="box">Educação</div>
                        <div className="box">Tecnologia</div>
                        <div className="box">Negócios</div>
                    </div>
                </div>
                <div className="left_box revert">
                    {' '}
                    <div className="img">
                        <Image alt="React Bootstrap logo" className="img_trophy" src={trophy2}></Image>
                    </div>
                </div>
                
            </div>
            <div className="content2_container" id="pos_graduacao_sp">
                <div className="left_box">
                    {' '}
                    <div className="img">
                        <Image alt="React Bootstrap logo" className="img_trophy" src={trophy3}></Image>
                    </div>
                </div>
                <div className="right_box">
                    <h1 className="title_c2">
                        | Pós Graduação Semi Presencial
                    </h1>
                    <div className="text_box">
                        <p>
                            A palavra “graduação” está relacionada ao ensino
                            superior e pode ser entendida como “título
                            universitário recebido por um indivíduo”. A
                            graduação é o nível de ensino que vem após o Ensino
                            Médio, quando o aluno conclui a Educação Básica.
                        </p>
                    </div>

                    <div className="grid_courses">
                        <div className="box">Direito</div>
                        <div className="box">Educação</div>
                        <div className="box">Tecnologia</div>
                        <div className="box">Negócios</div>
                    </div>
                </div>
            </div>
            <div className="content2_container" id="mba">
                
                <div className="right_box ">
                    <h1 className="title_c2">| MBA</h1>
                    <div className="text_box">
                        <p>
                            A palavra “graduação” está relacionada ao ensino
                            superior e pode ser entendida como “título
                            universitário recebido por um indivíduo”. A
                            graduação é o nível de ensino que vem após o Ensino
                            Médio, quando o aluno conclui a Educação Básica.
                        </p>
                    </div>

                    <div className="grid_courses">
                        <div className="box">Direito</div>
                        <div className="box">Educação</div>
                        <div className="box">Tecnologia</div>
                        <div className="box">Negócios</div>
                    </div>
                </div>
                <div className="left_box revert">
                    
                    <div className="img">
                        <Image alt="React Bootstrap logo" className="img_trophy mba" src={trophy4}></Image>
                    </div>
                </div>
            </div>
        </>
    );
}
