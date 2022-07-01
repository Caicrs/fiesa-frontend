import { Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Sobre</h4>
                        <ul>
                            <li>
                                <a href="#">Sobre nós</a>
                            </li>
                            <li>
                                <a href="#">Registro MEC</a>
                            </li>
                            <li>
                                <a href="#">Politicas de Privacidade</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Cursos</h4>
                        <ul>
                            <li>
                                <a href="#">Graduação</a>
                            </li>
                            <li>
                                <a href="#">Pós Graduação EAD</a>
                            </li>
                            <li>
                                <a href="#">Pós Graduação Semi Presencial</a>
                            </li>
                            <li>
                                <a href="#">MBA</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col ">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
