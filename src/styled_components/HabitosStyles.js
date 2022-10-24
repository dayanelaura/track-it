import styled from "styled-components";

const HabitosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 18px;
  padding-top: 100px;
  background-color: #e5e5e5;
  font-family: 'Lexend Deca', sans-serif;

  p {
    color: #666666;
    font-size: 18px;
    width: 90vw;
  }
`;

const BodyHabitos = styled.div`
    background-color: #e5e5e5;
    padding-bottom: 100%;
`

const AddHabito = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 90vw;

  h1 {
    font-size: 23px;
    color: #126ba5;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #52b6ff;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    font-size: 27px;
  }
`;

const InputHabito = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  padding: 20px 18px 0px 18px;
  width: 90vw;
  height: 190px;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  box-sizing: border-box;

  input {
    border: 1px solid #d5d5d5;
    height: 45px;
    width: 95%;
    border-radius: 5px;
    font-size: 21px;
  }

  input:focus {
    outline: none;
    border: 1px solid black;
  }

  input::placeholder {
    padding-left: 7px;
    color: #dbdbdb;
    font-size: 20px;
  }

  div {
    display: flex;
    height: 35px;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
`;

const DiasDaSemana = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: ${(props) => props.color};
  font-size: 20px;
  margin-right: 4px;
  background-color: ${(props) => props.background};
  margin-bottom: 20px;
`;

const Ajuste = styled.span`
  display: flex;
  margin-bottom: 15px;
  width: 50%;
`;

const BotaoInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  width: 84px;
  height: 35px;
  border-radius: 5px;
  margin-right: 10px;
`;

const DivHabito = styled.div`
  background-color: white;
  width: 90vw;
  height: 91px;
  margin-bottom: 20px;
  padding: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

  ion-icon {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 18px;
  }

  h1 {
    color: #666666;
    font-size: 20px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
  }

  div div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { BodyHabitos, Ajuste, HabitosContainer, AddHabito, InputHabito, BotaoInput, DiasDaSemana, DivHabito  };