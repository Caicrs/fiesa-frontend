import Image from 'next/image';
import Arrow from '../../../assets/arrow_circ.svg';
import Arrow180 from '../../../assets/arrow_circ_180.svg';
import Check from '../../../assets/check.svg';
import useCollapse from 'react-collapsed';
import { useState } from 'react';


export default function Content_details(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const [selected, setSelect] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelect(null);
        }
        setSelect(i);
    };

    const data = props.modules;

    return (
        <div className="content_container dropdown_container">
            <div className="box_content">
                <h1 className="title_content">Conteúdos</h1>
            </div>
            <div className="dropdown_grid">
                {data.map((item, i) => (
                    <div className="full_content" key={i}>
                        <div className="drop_content" onClick={() => toggle(i)} >
                            <div className="info_title" >{item.titleMod}</div>
                            <div className="icon_check">
                                {selected == i ? (
                                    <Image alt="a"
                                        width={20}
                                        height={20}
                                        src={Arrow180}
                                    ></Image>
                                ) : (
                                    <Image alt="a"
                                        width={20}
                                        height={20}
                                        src={Arrow}
                                    ></Image>
                                )}
                            </div>
                        </div>
                        <div
                            className={
                                selected == i
                                    ? 'expand_content show'
                                    : 'expand_content '
                            }

                            
                        >
                            {item.contents.map((txt,i) => (
                                <div className="block_point" key={i} >
                                    <div className="icon_check">
                                        <Image alt="a"
                                            width={20}
                                            height={20}
                                            src={Check}
                                        ></Image>
                                    </div>

                                    <h4 className="text_check">{txt}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

/*

              {data.mod1.contents.map((item) => (
                    <h4>
                        {item}
                    </h4>
                )
                    
                )}
*/