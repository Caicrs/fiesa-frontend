import Button from "@mui/material/Button";
import { Container,Nav,Navbar,NavDropdown,Form,FormControl } from "react-bootstrap";

export default function MiniNav() {
    return(
        <div className="mininav_container">
            <Container>
                <div className="right_box">
                <Button className="btn_painel mec">Registro no mec</Button>
                <Button className="btn_painel">Acesso do aluno</Button>
                </div>
            </Container>
            
        </div>
      
    )
      
    
}