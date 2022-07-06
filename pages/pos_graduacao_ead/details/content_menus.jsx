import Image from 'next/image';
import img1 from '../../assets/test.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export default function ContentMenus(props) {
    return (
        <div className="content_container container_menu">
            <div className="item">
                <div className="texts">
                    <div className="box_content">
                        <h1 className="title_content menu">Sobre o curso</h1>
                    </div>
                    <p className="menu_text">
                        {props.about}
                    </p>
                </div>
                <div className="img_box" id="img1">
                    <Image alt="a" className='img_item' src={img1} ></Image>
                </div>
                
            </div>
            <div className="item">
                
                <div className="img_box" id="img1">
                    <Image alt="a" className='img_item' src={img2} ></Image>
                </div>
                <div className="texts">
                    <div className="box_content rightContent">
                        <h1 className="title_content menu">A quem se destina ?</h1>
                    </div>
                    <p className="menu_text rightContent">
                    {props.targetPeoples}
                    </p>
                </div>
                
            </div>
            <div className="item">
                <div className="texts">
                    <div className="box_content">
                        <h1 className="title_content menu">Objetivo</h1>
                    </div>
                    <p className="menu_text">
                        {props.objectives}
                    </p>
                </div>
                <div className="img_box" id="img1">
                    <Image alt="a" className='img_item' src={img3} ></Image>
                </div>
                
            </div>
           
        </div>
    );
}
