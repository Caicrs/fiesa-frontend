import Image from 'next/image';
import img1 from '../../assets/test.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export default function ContentMenus() {
    return (
        <div className="content_container container_menu">
            <div className="item">
                <div className="texts">
                    <div className="box_content">
                        <h1 className="title_content menu">Sobre o curso</h1>
                    </div>
                    <p className="menu_text">
                        Aula semanal ao vivo, às terças-feiras, das 19h às 23h
                        (horário de Brasília – UTC -3). As aulas permanecem
                        gravadas e disponíveis para os alunos até o fim do
                        curso. Módulo Introdutório: O MBA em Data Science e
                        Analytics conta com aulas introdutórias que acontecem
                        das 19h às 23h nas seguintes datas: 04, 07, 14, 19, 21,
                        26 e 28 de Outubro.
                    </p>
                </div>
                <div className="img_box" id="img1">
                    <Image className='img_item' src={img1} ></Image>
                </div>
                
            </div>
            <div className="item">
                
                <div className="img_box" id="img1">
                    <Image className='img_item' src={img2} ></Image>
                </div>
                <div className="texts">
                    <div className="box_content rightContent">
                        <h1 className="title_content menu">A quem se destina ?</h1>
                    </div>
                    <p className="menu_text rightContent">
                        Aula semanal ao vivo, às terças-feiras, das 19h às 23h
                        (horário de Brasília – UTC -3). As aulas permanecem
                        gravadas e disponíveis para os alunos até o fim do
                        curso. Módulo Introdutório: O MBA em Data Science e
                        Analytics conta com aulas introdutórias que acontecem
                        das 19h às 23h nas seguintes datas: 04, 07, 14, 19, 21,
                        26 e 28 de Outubro.
                    </p>
                </div>
                
            </div>
            <div className="item">
                <div className="texts">
                    <div className="box_content">
                        <h1 className="title_content menu">Objetivo</h1>
                    </div>
                    <p className="menu_text">
                        Aula semanal ao vivo, às terças-feiras, das 19h às 23h
                        (horário de Brasília – UTC -3). As aulas permanecem
                        gravadas e disponíveis para os alunos até o fim do
                        curso. Módulo Introdutório: O MBA em Data Science e
                        Analytics conta com aulas introdutórias que acontecem
                        das 19h às 23h nas seguintes datas: 04, 07, 14, 19, 21,
                        26 e 28 de Outubro.
                    </p>
                </div>
                <div className="img_box" id="img1">
                    <Image className='img_item' src={img3} ></Image>
                </div>
                
            </div>
           
        </div>
    );
}
