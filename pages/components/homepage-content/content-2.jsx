import {Container} from "react-bootstrap";

export default function Content2 (){

    return(
        <div className="content2_container">
            
            <Container>
                <h1 className="title_c2">Nossos Cursos</h1>
                <div className="grid_courses">

                        <div className="box">Graduação</div>
                        <div className="box">Pós Ead</div>
                        <div className="box">Pós Graduação Semi-Presencial</div>
                        <div className="box">MBA</div>

                </div>
            </Container> 
        
              
        </div>
    )
}