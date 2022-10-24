import styled from "styled-components";

const HojeContainer = styled.div`
  padding-top: 110px;
  padding-right: 15px;
  background-color: #E5E5E5;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 18px;
    margin-left: 15px;
  }

  p {
    font-family: 'Lexend Deca', sans-serif;
    color: #bababa;
    font-size: 18px;
    padding-bottom: 30px;
    margin-left: 15px;
  }
`;

const CardsContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding-bottom: 40%;
  background-color: #E5E5E5;
`;

const CardHoje = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lexend Deca', sans-serif;
  color: #666666;
  margin-bottom: 10px;
  width: 90vw;
  height: 100px;
  background-color: white;
  border-radius: 7px;
  margin-left: 15px;
  box-sizing: border-box;
  padding: 17px 17px;
  position: relative;

  ion-icon {
    font-size: 50px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: ${(props) => props.color};
    color: white;
    padding: 10px;
    border-radius: 8px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  span {
    font-size: 13px;
    margin-bottom: 2px;
  }
`;

const SpanSequencia = styled.span`
  color: ${(props) => props.color};
`;

const TxtConcluidos = styled.h4`
  color: #8FC549;
  font-size: 18px;
  font-family: 'Lexend Deca', sans-serif;
  padding-bottom: 30px;
  margin-left: 15px;
`;

export { HojeContainer, CardsContainer, CardHoje, SpanSequencia, TxtConcluidos };