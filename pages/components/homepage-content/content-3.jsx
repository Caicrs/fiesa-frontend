import Image from 'next/image';
import moodle from '../../../public/moodle.svg';
import arrowtarget from '../../../public/arrowtarget.svg';
import chart from '../../../public/chart.svg';
import exercises from '../../../public/exercises.svg';
import teacher from '../../../public/teacher.svg';
import library from '../../../public/library.svg';

export default function Content3() {
    return (
        <div className="content3_box">
            <div className="content3_container" id="moodle">
                <div className="content3_right">
                    <Image alt="a" 
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
            <div className="content3_container" id="challenges">
                <div className="content3_right">
                    <Image alt="a" className="content3_img" src={arrowtarget}></Image>
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
            <div className="content3_container" id="infographic">
                <div className="content3_right">
                    <Image alt="a" className="content3_img" src={chart}></Image>
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
            <div className="content3_container" id="library">
                <div className="content3_right">
                    <Image alt="a" className="content3_img" src={library}></Image>
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Biblioteca</h1>
                    <p className="content3_text">
                        Nossa biblioteca possui +2.000 exemplares para nossos
                        alunos lerem e fixarem ainda mais os conteúdos passados
                        de forma 100% digital, possibilitando a leitura em
                        qualquer dispositivo.
                    </p>
                </div>
            </div>
            <div className="content3_container" id="teacher">
                <div className="content3_right">
                    <Image alt="a" className="content3_img" src={teacher}></Image>
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Dica do professor</h1>
                    <p className="content3_text">
                        O Dica do professor são videos com excelentes dicas de
                        professores especializados no assunto que está sendo
                        estudado.
                    </p>
                </div>
            </div>
            <div className="content3_container" id="exercises">
                <div className="content3_right">
                    <Image alt="a" className="content3_img" src={exercises}></Image>
                </div>
                <div className="content3_left">
                    <h1 className="content3_title">Exercicios</h1>
                    <p className="content3_text">
                        Após estudar e absorver o conteúdo, nossos alunos
                        possuem exercicios curtos e de alto nível para responder
                        e enviar.
                    </p>
                </div>
            </div>
        </div>
    );
}
