import Image from 'next/image';
import moodle from '../../../public/moodle.svg';
import arrowtarget from '../../../public/arrowtarget.svg';
import chart from '../../../public/chart.svg';

export default function Content3() {
    return (
        <div className="content3_box">
            <div className="content3_container" id="moodle">
                <div className="content3_right">
                    <Image
                        layout="responsive"
                        className="content3_img"
                        src={moodle}
                    />
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Integrado ao Moodle</h1>
                    <div className="content3_text">
                        A plataforma Moodle é uma sala de aula virtual onde o
                        aluno tem a possibilidade de acompanhar atividades do
                        curso pela internet. Na maior parte dos casos, a
                        plataforma é usada como um sistema de apoio às
                        disciplinas da universidade ou centro educacional,
                        então, é preciso ser um aluno matriculado na instituição
                        para ter acesso aos materiais.
                    </div>
                </div>
            </div>
            <div className="content3_container" id="desafios">
                <div className="content3_right">
                    <Image className="content3_img" src={arrowtarget}></Image>
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Desafios</h1>
                    <p className="content3_text">
                        Nossa plataforma possui desafios para uma melhor fixação
                        do conteúdo e também inserir nossos alunos na atmosfera
                        do estudo.
                    </p>
                </div>
            </div>
            <div className="content3_container" id="infograficos">
                <div className="content3_right">
                    <Image className="content3_img" src={chart}></Image>
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Infograficos</h1>
                    <p className="content3_text">
                        Infográfico é um conteúdo explicativo que une
                        informações verbais e visuais, transmitindo dados e
                        conceitos de forma fácil. Isso garante o entendimento do
                        leitor mesmo em temas complexos. Infografias costumam
                        conter textos, ilustrações, gráficos, sons, ícones e
                        outros tipos de mídia em sua produção.
                    </p>
                </div>
            </div>
        </div>
    );
}
