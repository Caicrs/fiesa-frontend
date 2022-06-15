import {Container} from "react-bootstrap";
import Button from "@mui/material/Button";

export default function Content1 (){

    return(
        <div className="content1_container">
            
            <Container>
                <h1 className="title_c1">O seu futuro se <br></br>encontra aqui !!</h1>
                <h5 className="subtitle_c1">Com +40 opções de pós-graduações totalmente EAD,<br></br>
                 clique no botão abaixo e descubra nossos nichos.</h5>
                 <br></br>,
                 <Button variant="contained">Explorar cursos</Button>
            </Container> 
        
              
        </div>
    )
}