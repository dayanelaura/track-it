import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Rodape() {  
  
  const { dadosUsuario,setDadosUsuario } = useContext(UserContext);
  
  useEffect(() =>{
    const dadosLocais = JSON.parse(localStorage.getItem("trackit"));
    setDadosUsuario(dadosLocais);
  },[setDadosUsuario])
  
  let concluidos = (dadosUsuario.concluidos / dadosUsuario.total)*100;

  return (
    <RodapeContainer>
      <Link to="/habitos" style={{ textDecoration: 'none' }} data-identifier="habit-page-action">
        <span>Hábitos</span>
      </Link>

      <BotaoHoje to="/hoje">
        <CircularProgressbar 
            value={concluidos} 
            text="Hoje" 
            styles={ buildStyles( { textSize: "22px",
                                    pathColor: `#FFFFFF`,
                                    textColor: "#FFFFFF",
                                    trailColor: "#52B6FF"
                                  } ) } 
        />
      </BotaoHoje>
      
      <Link to="/historico" style={{ textDecoration: 'none' }} data-identifier="historic-page-action">
        <span>Histórico</span>
      </Link>
    </RodapeContainer>
  );
}

const RodapeContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  height: 75px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 36px;
  color: #52B6FF;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  align-items: center;
  background-color: white;

  span {
    color: #52B6FF;
  }
`;

const BotaoHoje = styled(Link)`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 91px;
  left: 36vw;
  padding: 5px;
  bottom: 16px;
  color: white;
  font-size: 18px;
  font-family: 'Lexend Deca', sans-serif;
  border-radius: 50%;
  background-color: #52B6FF;
  box-sizing: border-box;
`;