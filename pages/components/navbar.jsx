import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import PersonIcon from '@mui/icons-material/Person';
import { Container,Nav,Navbar,NavDropdown,Form,FormControl } from "react-bootstrap";

export default function NavbarComp() {
    return(
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/fiesa_logo.svg"
              width="400"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Form className="d-flex optionsNavbar">
              <Nav.Link href="#deets">Graduação</Nav.Link>
              <Nav.Link href="#deets">Pós EAD</Nav.Link>
              <Nav.Link href="#deets">Pós Graduação Semi-presencial</Nav.Link>
              <Nav.Link href="#deets">MBA</Nav.Link>
            </Form>
        </Container>
      </Navbar>
    )
      
    
}