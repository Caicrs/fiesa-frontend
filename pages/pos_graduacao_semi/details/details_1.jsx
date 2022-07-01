import calendar from '../../assets/calendar.svg';
import file from '../../assets/file_fill.svg'
import Image from 'next/image';
export default function Details1() {
    return (
        <div className="details1_container">
            <div className="info_container">
                <p className="details_title">Advocacia Criminal</p>
                <p className="details_subtitle">
                    Pós Graduação Semi Presencial
                </p>
                <div className="container_prices">
                    <div className="card_prices">
                        <div className="card_left">
                            <h3 className="course_price details_price">
                                18 x R$ 277,75
                            </h3>
                            <h3
                                className="course_subtitle subprice"
                                id="start_data"
                            >
                                Pagamento por cartão de crédito, pix e boleto.
                            </h3>
                        </div>
                        <div className="card_right">
                            <div className="card_btn">Comprar</div>
                        </div>
                    </div>
                </div>
                <div className="container_infos">
                    <div className="info">
                        <div className="info_icon">
            
                            <Image alt="a" src={calendar}></Image>
                        </div>
                        <p>
                            Início das aulas: 24/10/2022
                        </p>
                    </div>
                    <div className="info">
                        <div className="info_icon">
            
                            <Image alt="a" src={file}></Image>
                        </div>
                        <p>
                            Emissão de
                            <strong> Certificado</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
