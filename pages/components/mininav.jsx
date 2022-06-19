import Link from "next/link";


export default function MiniNav() {
    return(
        <div className="mininav_container">
            <div className="mini_container">
                
                    <Link href="#"><div className="btn_painel mec">Registro do MEC</div></Link>
                    <Link href="#"><div className="btn_painel mec">Contato</div></Link>
               
            </div>
                
           
        </div>
      
    )
      
    
}