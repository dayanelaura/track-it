import { useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../UserContext";

export default function Topo() {
  const { dadosUsuario, setDadosUsuario } = useContext(UserContext);

  useEffect(() =>{
    const dadosLocais = JSON.parse(localStorage.getItem("trackit"));
    setDadosUsuario(dadosLocais);
  },[setDadosUsuario])

  return (
      <TopoContainer>
        <span>TrackIt</span>
        <img data-identifier="avatar" src={dadosUsuario.image} alt="foto" />
      </TopoContainer>
  );
}

const TopoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 70px;
  padding: 0 20px;
  margin-bottom: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #126BA5;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }

  span {
    font-family: "Playball";
    font-size: 40px;
    color: white;
  }
`;