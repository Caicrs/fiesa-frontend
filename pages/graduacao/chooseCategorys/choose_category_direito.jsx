import courseEx from '../../assets/course-ex.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {

    return (
        <div className="choose_container">

            <div className="choose_courses">
                <p className="choose_title">Cursos</p>
                <div className="courses_grid">
                    <div className="choose_course">
                        <Image className="img_course" src={courseEx}></Image>
                        <div className="course_datas">
                            <h1 className="course_title">
                                Direito Administrativo
                            </h1>
                            <h3 className="course_subtitle">
                                Graduação / Direito
                            </h3>
                            <Link href="#">
                                <h3 className="course_subtitle more">
                                    Saiba Mais
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="choose_course">
                        <Image className="img_course" src={courseEx}></Image>
                        <div className="course_datas">
                            <h1 className="course_title">
                                Direito Administrativo
                            </h1>
                            <h3 className="course_subtitle">
                                Graduação / Direito
                            </h3>
                            <Link href="#">
                                <h3 className="course_subtitle more">
                                    Saiba Mais
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="choose_course">
                        <Image className="img_course" src={courseEx}></Image>
                        <div className="course_datas">
                            <h1 className="course_title">
                                Direito Administrativo
                            </h1>
                            <h3 className="course_subtitle">
                                Graduação / Direito
                            </h3>
                            <Link href="#">
                                <h3 className="course_subtitle more">
                                    Saiba Mais
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
