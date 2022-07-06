import courseEx from '../../assets/balance.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {
    const posgrad = [
        {
            id: 1,
            title: 'Pós-Graduação em Advocacia Criminal', 
        }
    ];

    return (
        <div className="choose_container">
            <div className="choose_courses">
                <p className="choose_title">Cursos em Direito</p>
                <p className="choose_title subtitle">
                    Pós Graduação | Semi-Presencial
                </p>
                <div className="courses_grid">
                    {posgrad.map((item, i) => (
                        <Link href={`details/${i}`}>
                            <div className="choose_course" key={i}>
                                <div className="course_container">
                                    <Image
                                        alt="a"
                                        className="img_course"
                                        src={courseEx}
                                    ></Image>
                                    <div className="course_datas">
                                        <h1 className="course_title">
                                            {item.title}
                                        </h1>
                                        <h3 className="course_subtitle">
                                            Pós Graduação / Direito
                                        </h3>

                                        <h3
                                            className="course_subtitle"
                                            id="start_data"
                                        >
                                            Inicio das aulas em 01/08/2022
                                        </h3>
                                        <h3 className="course_price">
                                            18 x R$ 277,75
                                        </h3>
                                    </div>
                                </div>

                                <div className="more_btn">Saiba mais</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
