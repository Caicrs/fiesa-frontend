import { Container } from "react-bootstrap";
import Link from "next/link";

export default function Footer (){
return(
    
            <div className="footer_container">
                <Container>
                    <div className="footer_container_2">
                            
                           <ul>           
                           <li><Link href="#"><h5>texto 1</h5></Link> </li>
                           <li><Link href="#"><h5>texto 1</h5></Link> </li>
                           <li><Link href="#"><h5>texto 1</h5></Link> </li>                      
                            </ul> 
                            
                    </div>
                    
                </Container>
            </div>
   
    
)
}