import chart from '../../../assets/chart.svg';
import alarm from '../../../assets/alarm.svg';
import ucheck from '../../../assets/ucheck.svg';
import Image from 'next/image';

export default function Cards() {
    return (
        <div className="cards_grid">
            <div className="card" id="horarios">
                <div className="icon_card">
                    <Image alt="a" src={alarm}></Image>
                </div>
                <h2 className="card_title">HORÁRIO DAS AULAS</h2>
                <p className="card_text">
                    Aula semanal ao vivo, às terças-feiras, das 19h às 23h
                    (horário de Brasília – UTC -3). As aulas permanecem gravadas
                    e disponíveis para os alunos até o fim do curso. Módulo
                    Introdutório: O MBA em Data Science e Analytics conta com
                    aulas introdutórias que acontecem das 19h às 23h nas
                    seguintes datas: 04, 07, 14, 19, 21, 26 e 28 de Outubro.
                </p>
            </div>
            <div className="card" id="cargahoraria">
                <div className="icon_card">
                    <Image alt="a" src={chart}></Image>
                </div>
                <h2 className="card_title">CARGA HORÁRIA E <br></br>DURAÇÃO DO CURSO</h2>
                <p className="card_text">
                    360 horas/aula + 40 horas/aula de trabalho de conclusão de
                    curso (TCC) Duração total: 18 meses* + apresentação do TCC
                    *O cronograma poderá ser estendido em até 3 meses devido a
                    feriados nacionais e recessos.
                </p>
            </div>
            <div className="card" id="frequencia">
                <div className="icon_card">
                    <Image alt="a" src={ucheck}></Image>
                </div>
                <h2 className="card_title">FREQUÊNCIA</h2>
                <p className="card_text">
                    A frequência dos alunos é contabilizada pela realização das
                    provas e deve ser igual ou superior a 75%. Dessa forma, não
                    há prejuízo para os alunos que não conseguirem acompanhar a
                    aula ao vivo, podendo assisti-la quando e onde for mais
                    conveniente à sua rotina
                </p>
            </div>
        </div>
    );
}
