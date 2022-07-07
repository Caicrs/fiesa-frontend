import NavbarComp from '../components/navbar';
import SubNavbarComp from '../components/subnavbar';
import Content1 from '../components/homepage-content/content-1'
import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../components/homepage-content/footer';

const Container = styled.section`
width: 100vw;
height:100vh;
background-color:#0070f3;
padding:5rem;
`;

const Form = styled.form`
width:32%;
height:500px;
background-color:#064791;
margin:0 auto;
border-radius:2rem;
padding:2rem;
text-align:center;
color:white;
`;

const H1 = styled.h1`
padding-top:2rem;
`;

const Input = styled.input`
  width:100%; 
  height:2rem; 
  border:none;
  color:white;
  border-bottom: 1px solid white;
  background:transparent;
  margin:1.5rem 0 1.5rem 0 ;
  ::placeholder {
       color: white;
       font-weight:700;
   }
`;

const H5 = styled.h5 `
text-align:left;
padding-bottom:6rem;

`;

const Enter = styled.button`
width:100%;
color:white;
padding:1rem 1rem 1rem 1rem;
background: #0070f3;
border:none;
border-radius:2rem;
font-size:1.2rem;
font-weight:700;
cursor:pointer;
transition:0.3s;

&:hover{
    background: #0258bb;
}
`;

export default function Login () {
    return (
        <>
            <Container>
                <Form>
                    <H1>Login</H1>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Senha"></Input>
                    <H5>Esqueceu a senha ?</H5>
                    <Enter>Entrar</Enter>
                </Form>
            </Container>
            <Head>
                <title>Acesso do Aluno</title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
            </Head>
        </>
    )
}



