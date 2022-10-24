import UserContext from "../UserContext";
import { useContext, useEffect, useState } from "react";
import Topo from "./Topo";
import Rodape from "./Rodape";
import { buscarHabitosHoje, listarHabitosFeitos, listarHabitosAFazer } from "../API/dadosRequests";
import { HojeContainer, CardsContainer, CardHoje, SpanSequencia, TxtConcluidos } from "../styled_components/HojeStyles";

export default function Hoje(){
    const dayjs = require("dayjs");
    const { dadosUsuario, setDadosUsuario } = useContext(UserContext);
    const [contador, setContador] = useState();
    const [HabitosHoje, setHabitosHoje] = useState([]);

  function traducaoDias() {
    const dia = dayjs().format("dddd");
    switch (dia) {
      case "Monday": return "Segunda-feira";
      case "Tuesday": return "Terça-feira";
      case "Wednesday": return "Quarta-feira";
      case "Thursday": return "Quinta-feira";
      case "Friday": return "Sexta-feira";
      case "Saturday": return "Sábado";
      case "Sunday": return "Domingo";
      default: return "";
    }
  }

  useEffect(() => {
    renderHabitosHoje();
  }, []);

  function renderHabitosHoje() {

    const dadosLocais = JSON.parse(localStorage.getItem("trackit"));
    setDadosUsuario(dadosLocais);

    const config = {
      headers: { Authorization: `Bearer ${dadosUsuario.token}` }
    };
    const promessa = buscarHabitosHoje(config);
    promessa.then((resposta) => {
      setHabitosHoje(resposta.data);
      setContador(resposta.data.filter((item) => item.done).length);
      setDadosUsuario(
        {
        ...dadosUsuario,
        concluidos: resposta.data.filter((habito) => habito.done).length,
        total: resposta.data.length
        }
      );
    });
  }

  function selecionarHabito(ID_HabitoHoje, done){

    if(done){
      const config = {
        headers: { Authorization: `Bearer ${dadosUsuario.token}` }
      };
      const promessa = listarHabitosAFazer(ID_HabitoHoje, config);
      promessa.then(() => {
        renderHabitosHoje();
        setContador(contador - 1);
        setDadosUsuario(
            { ...dadosUsuario,
              concluidos: (dadosUsuario.concluidos - 1)
            });
        });
    }
    else {
      const config = {
        headers: { Authorization: `Bearer ${dadosUsuario.token}` }
      };
      const promessa = listarHabitosFeitos(ID_HabitoHoje, config);
      promessa.then(() => {
        renderHabitosHoje();
        setContador(contador + 1);
        setDadosUsuario(
            { ...dadosUsuario,
              concluidos: (dadosUsuario.concluidos + 1)
            });
        });
    }
  }

  function DinamicaCard({ nome, recorde, sequencia_atual, done, id }) {
    return (
      <CardHoje color={done ? "#8FC549" : "#EBEBEB"} data-identifier="today-infos">
        <h2>{nome}</h2>
        <span>
          Sequência atual:{" "}
          <SpanSequencia color={done ? "#8FC549" : "#666666"}>
            {sequencia_atual} {sequencia_atual === 1 ? "dia" : "dias"}
          </SpanSequencia>
        </span>
        <span>
          Seu recorde:{" "}
          <SpanSequencia color={ done && recorde === sequencia_atual ? "#8FC549" : "#666666" }>
          {recorde} {recorde === 1 ? "dia" : "dias"}
          </SpanSequencia>
        </span>
        <ion-icon 
          onClick={() => selecionarHabito(id, done)} 
          data-identifier="done-habit-btn"
          name="checkmark-sharp" >    
        </ion-icon>
      </CardHoje>
    );
  }

  return (
    <>
      <Topo />
      <HojeContainer>
        <div>
          <h1 data-identifier="today-infos">
            {traducaoDias()}{dayjs().format(", DD/MM")}
          </h1>
          { (HabitosHoje.findIndex((item) => item.done === true) === -1) ? (
                <p>Nenhum hábito concluído ainda</p> 
            ) : (
                <TxtConcluidos data-identifier="today-infos">
                {((contador / HabitosHoje.length) * 100).toFixed(0)}% dos hábitos concluídos
                </TxtConcluidos>
            ) 
          }
        </div>
        <CardsContainer>
          { HabitosHoje.map((habitoHoje, index) => (
                <DinamicaCard key={index} id={habitoHoje.id} 
                           done={habitoHoje.done} nome={habitoHoje.name}
                           sequencia_atual={habitoHoje.currentSequence}
                           recorde={habitoHoje.highestSequence} /> ))
          }
        </CardsContainer>
      </HojeContainer>
    <Rodape />
    </>
    )
}