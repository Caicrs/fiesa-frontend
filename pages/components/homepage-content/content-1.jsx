import {Container} from "react-bootstrap";
import Button from "@mui/material/Button";
import Image from "next/image";
import banner1 from "../../../public/banner1.png"
import React, { useState, useEffect } from 'react'

export default function Content1 (){
    var [windowDimenion, detectHW] = useState({
        winWidth : window.innerWidth ,
        winHeight :  window.innerHeight,
      })
    
      var detectSize = () => {
        detectHW({
          winWidth:window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
    
      useEffect(() => {
        window.addEventListener('resize', detectSize)
    
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])

      if(windowDimenion.winWidth < 1000){
            return (<>
            <h1>Menor que 1000 | if #1</h1>
            </>)
      }

      console.log(windowDimenion.winWidth )

    return(
        <>
        <p>Width: <strong>{windowDimenion.winWidth}</strong></p>
      <p>Height: <strong>{windowDimenion.winHeight}</strong></p>

      
        <Image src={banner1}></Image>

        </>
    )
}

/*
<div className="content1_container">
            
            <Container>
                <h1 className="title_c1">O seu futuro se <br></br>encontra aqui !!</h1>
                <h5 className="subtitle_c1">Com +40 opções de pós-graduações totalmente EAD,<br></br>
                 clique no botão abaixo e descubra nossos nichos.</h5>
                 <br></br>,
                 <Button variant="contained">Explorar cursos</Button>
            </Container> 
        
              
        </div>
*/