import courseEx from '../../public/course-ex.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ChooseCategory() {
    return (
        <div className="choose_container">
            <p className="choose_title">Escolha sua área</p>
            <div className="choose_grid">
                <div className="choose_btn active">
                    Administrativo e Público
                </div>
                <div className="choose_btn">Constitucional</div>
                <div className="choose_btn">Ambiental</div>
                <div className="choose_btn">Civil</div>
                <div className="choose_btn">Penal</div>
                <div className="choose_btn">Tributário</div>
                <div className="choose_btn">Saúde, Humanas e Educação</div>
                <div className="choose_btn">
                    Trabalhista, Empresarial e Consumidor
                </div>
            </div>

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
                           <Link href="#"><h3 className="course_subtitle more">
                                Saiba Mais
                            </h3></Link> 
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
                           <Link href="#"><h3 className="course_subtitle more">
                                Saiba Mais
                            </h3></Link> 
                        </div>
                    </div><div className="choose_course">
                        <Image className="img_course" src={courseEx}></Image>
                        <div className="course_datas">
                            <h1 className="course_title">
                                Direito Administrativo
                            </h1>
                            <h3 className="course_subtitle">
                                Graduação / Direito
                            </h3>
                           <Link href="#"><h3 className="course_subtitle more">
                                Saiba Mais
                            </h3></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
