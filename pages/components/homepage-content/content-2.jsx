import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';

export default function Content2() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 400px)' });

    const [windowSize, setWindow] = useState(false);

    useEffect(() => setWindow(isTabletOrMobile), [isTabletOrMobile]);
    // TABLET | MOBILE VERSION
    if (windowSize == true) {
        return (
            <>
                <h1 className="title_courses">Conheça nossos cursos</h1>
                <div className="container_box">
                    <div className="content2_container" id="graduacao">
                        <div className="left_box">
                            <h1 className="title_c2">Graduação</h1>
                        </div>
                        <div className="right_box">
                            <div className="text_box">
                                <p>
                                    A palavra “graduação” está relacionada ao
                                    ensino superior e pode ser entendida como
                                    “título universitário recebido por um
                                    indivíduo”. A graduação é o nível de ensino
                                    que vem após o Ensino Médio, quando o aluno
                                    conclui a Educação Básica.
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
                        <div className="left_box">
                            <h1 className="title_c2">Pós Graduação</h1>
                        </div>
                        <div className="right_box">
                            <div className="text_box">
                                <p>
                                    A palavra “graduação” está relacionada ao
                                    ensino superior e pode ser entendida como
                                    “título universitário recebido por um
                                    indivíduo”. A graduação é o nível de ensino
                                    que vem após o Ensino Médio, quando o aluno
                                    conclui a Educação Básica.
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
                    <div className="content2_container" id="pos_graduacao_semi">
                        <div className="left_box">
                            <h1 className="title_c2">
                                Pós Graduação <br></br>Semi Presencial
                            </h1>
                        </div>
                        <div className="right_box">
                            <div className="text_box">
                                <p>
                                    A palavra “graduação” está relacionada ao
                                    ensino superior e pode ser entendida como
                                    “título universitário recebido por um
                                    indivíduo”. A graduação é o nível de ensino
                                    que vem após o Ensino Médio, quando o aluno
                                    conclui a Educação Básica.
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
                        <div className="left_box">
                            <h1 className="title_c2">MBA</h1>
                        </div>
                        <div className="right_box">
                            <div className="text_box">
                                <p>
                                    A palavra “graduação” está relacionada ao
                                    ensino superior e pode ser entendida como
                                    “título universitário recebido por um
                                    indivíduo”. A graduação é o nível de ensino
                                    que vem após o Ensino Médio, quando o aluno
                                    conclui a Educação Básica.
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
                </div>
            </>
        );
    }
    return (
        <>
            <h1 className="title_courses">Conheça nossos cursos</h1>
            <div className="container_box">
                <div className="content2_container" id="graduacao">
                    <div className="left_box">
                        <h1 className="title_c2">Graduação</h1>
                    </div>
                    <div className="right_box">
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o
                                Ensino Médio, quando o aluno conclui a Educação
                                Básica.
                            </p>
                        </div>

                        <div className="grid_courses">
                            <Link href="/graduacao/direito">
                                <div className="box">Direito</div>
                            </Link>
                            <Link href="/graduacao/educacao">
                                <div className="box">Educação</div>
                            </Link>
                            <Link href="/graduacao/tecnologia">
                                <div className="box">Tecnologia</div>
                            </Link>
                            <Link href="/graduacao/negocios">
                                <div className="box">Negócios</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content2_container" id="pos_graduacao_ead">
                    <div className="left_box">
                        <h1 className="title_c2">Pós Graduação EAD</h1>
                    </div>
                    <div className="right_box">
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o
                                Ensino Médio, quando o aluno conclui a Educação
                                Básica.
                            </p>
                        </div>

                        <div className="grid_courses">
                            <Link href="/pos_graduacao_ead/direito">
                                <div className="box">Direito</div>
                            </Link>
                            <Link href="/pos_graduacao_ead/educacao">
                                <div className="box">Educação</div>
                            </Link>
                            <Link href="/pos_graduacao_ead/tecnologia">
                                <div className="box">Tecnologia</div>
                            </Link>
                            <Link href="/pos_graduacao_ead/negocios">
                                <div className="box">Negócios</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content2_container " id="pos_graduacao_semi">
                    <div className="left_box">
                        <h1 className="title_c2">
                            Pós Graduação <br></br>Semi Presencial
                        </h1>
                    </div>
                    <div className="right_box">
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o
                                Ensino Médio, quando o aluno conclui a Educação
                                Básica.
                            </p>
                        </div>

                        <div className="grid_courses">
                            <Link href="/pos_graduacao_semi/direito">
                                <div className="box">Direito</div>
                            </Link>
                            <Link href="/pos_graduacao_semi/educacao">
                                <div className="box">Educação</div>
                            </Link>
                            <Link href="/pos_graduacao_semi/tecnologia">
                                <div className="box">Tecnologia</div>
                            </Link>
                            <Link href="/pos_graduacao_semi/negocios">
                                <div className="box">Negócios</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content2_container " id="mba">
                    <div className="left_box">
                        <h1 className="title_c2 cont_sized">MBA</h1>
                    </div>
                    <div className="right_box">
                        <div className="text_box">
                            <p>
                                A palavra “graduação” está relacionada ao ensino
                                superior e pode ser entendida como “título
                                universitário recebido por um indivíduo”. A
                                graduação é o nível de ensino que vem após o
                                Ensino Médio, quando o aluno conclui a Educação
                                Básica.
                            </p>
                        </div>

                        <div className="grid_courses">
                            <Link href="/mba/direito">
                                <div className="box">Direito</div>
                            </Link>
                            <Link href="/mba/educacao">
                                <div className="box">Educação</div>
                            </Link>
                            <Link href="/mba/tecnologia">
                                <div className="box">Tecnologia</div>
                            </Link>
                            <Link href="/mba/negocios">
                                <div className="box">Negócios</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
