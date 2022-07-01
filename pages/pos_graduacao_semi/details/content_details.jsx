import Image from 'next/image';
import Arrow from '../../assets/arrow_circ.svg';
import Arrow180 from '../../assets/arrow_circ_180.svg';
import Check from '../../assets/check.svg';
import useCollapse from 'react-collapsed';
import { useState } from 'react';
import {data} from '../../db/direito_semipre'

export default function Content_details() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

   

    const [selected, setSelect] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelect(null);
        }
        setSelect(i);
    };
    return (
        <div className="content_container dropdown_container">
            <div className="box_content">
                <h1 className="title_content">Conteúdos</h1>
            </div>
            <div className="dropdown_grid">
                {data.map((item, i) => (
                    <div className="full_content" >
                        <div className="drop_content" onClick={() => toggle(i)} >
                            <div className="info_title" >{item.title}</div>
                            <div className="icon_check">
                                {selected == i ? (
                                    <Image
                                        width={20}
                                        height={20}
                                        src={Arrow180}
                                    ></Image>
                                ) : (
                                    <Image
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
                            {item.content.map((txt) => (
                                <div className="block_point" >
                                    <div className="icon_check">
                                        <Image
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
