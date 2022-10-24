import styled from "styled-components";
import Rodape from "./Rodape";
import Topo from "./Topo";

export default function Historico() {
  return (
    <>
      <Topo />
      <HistoricoContainer>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoricoContainer>
      <Rodape />
    </>
  );
}

const HistoricoContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 110px 10px 0 10px;
    background-color: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;

    h1{
        color: #126BA5;
        font-size: 23px;
        margin-bottom:17px;
    }

    p{
        color: #666666;
        font-size: 18px;
    }
`