import courseEx from '../../assets/balance.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {
    return (
        <div className="choose_container">
            <div className="choose_courses">
                <p className="choose_title">Cursos em Direito</p>
                <p className="choose_title subtitle">
                    Pós Graduação | Semi-Presencial
                </p>
                <div className="courses_grid">
                    <div className="choose_course">
                        <div className="course_container">
                            <Image
                                className="img_course"
                                src={courseEx}
                            ></Image>
                            <div className="course_datas">
                                <h1 className="course_title">
                                    Advocacia Criminal
                                </h1>
                                <h3 className="course_subtitle">
                                    Pós Graduação / Direito
                                </h3>
                                <div className="line"></div>
                                <h3 className="course_subtitle" id="start_data">
                                    Inicio das aulas em 01/08/2022
                                </h3>
                                <h3 className="course_price">18 x R$ 277,75</h3>
                            </div>
                        </div>
                       <Link href="#">
                       <div className='more_btn' >
                            Saiba mais
                        </div>
                       </Link> 
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
