import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { enviarHabito, receberHabito, deletarHabito } from "../API/dadosRequests";
import { HabitosContainer, AddHabito, InputHabito, BotaoInput, DiasDaSemana, DivHabito, ListaDeHabitos } from "../styled_components/HabitosStyles";
import UserContext from "../UserContext";
import Rodape from "./Rodape";
import Topo from "./Topo";

export default function Habitos() {
  const { dadosUsuario } = useContext(UserContext);
  const config = {
    headers: { Authorization: `Bearer ${dadosUsuario.token}` }
  };

  const [carregando, setCarregando] = useState(false);
  const [criandoHabito, setCriandoHabito] = useState(false);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [meusHabitos, setMeusHabitos] = useState([]);

  useEffect(() => {
    renderizarHabitos();
  }, []);

  function renderizarHabitos() {
    receberHabito(config).then((e) => { setMeusHabitos(e.data); });
  }

  function deleteHabito(event) {
    const indexHabito = event.target.getAttribute("habitoid");

    if(!window.confirm('Tem certeza que deseja excluir esse hábito?')){
      return;
    }
    const promise = deletarHabito(config, indexHabito);
    promise.then(() => renderizarHabitos());
  }

  function criarHabito() {
    if (name === '' || days.length === 0) {
      alert('Erro!  :( \nPor favor, confira se todos os campos foram preenchidos adequadamente');
      return;
    }

    setCarregando(true);
    const promise = enviarHabito({ name:name, days:days }, config);
    promise.then(() => {
      renderizarHabitos();
      setName("");
      setDays([]);
      setCriandoHabito(false);
    });
  }

  function selecionarDias(numero_do_dia) {
    if(carregando)
    return;

    if (days.includes(numero_do_dia)) {
      let index = days.indexOf(numero_do_dia);
      days.splice(index, 1);
      setDays([...days]);
    }else {
      setDays([...days, numero_do_dia]);
    }

  }

  function ListarHabitos() {

    return (
      <ListaDeHabitos>
        {meusHabitos.map((habito, index) => (
          <DivHabito key={index}>

            <h1>{habito.name}</h1>
            <div>
              <DiasDaSemana
                color={habito.days.includes(0) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(0) ? "#CFCFCF" : "#FFFFFF"}>
                D
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(1) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(1) ? "#CFCFCF" : "#FFFFFF"}>
                S
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(2) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(2) ? "#CFCFCF" : "#FFFFFF"}>
                T
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(3) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(3) ? "#CFCFCF" : "#FFFFFF"}>
                Q
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(4) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(4) ? "#CFCFCF" : "#FFFFFF"}>
                Q
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(5) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(5) ? "#CFCFCF" : "#FFFFFF"}>
                S
              </DiasDaSemana>
              <DiasDaSemana
                color={habito.days.includes(6) ? "#FFFFFF" : "#dbdbdb"}
                background={habito.days.includes(6) ? "#CFCFCF" : "#FFFFFF"}>
                S
              </DiasDaSemana>
            </div>
            <ion-icon onClick={deleteHabito} habitoid={habito.id} name="trash-outline"></ion-icon>

          </DivHabito>
        ))}
      </ListaDeHabitos>
    );
  }
  return (
    <>
      <Topo />
      <HabitosContainer>
        <AddHabito>
          <h1>Meus hábitos</h1>
          <div onClick={() => {
            setCarregando(false);
            setCriandoHabito(true);
            }}> + 
          </div>
        </AddHabito>
        <InputHabito display={criandoHabito ? "flex" : "none"}>
          <input placeholder="nome do hábito" type="text" value={name}
                 onChange={(e) => setName(e.target.value)} disabled={carregando} />
          <div>
            <DiasDaSemana
              onClick={() => selecionarDias(0)}
              color={days.includes(0) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(0) ? "#CFCFCF" : "#FFFFFF"}>
              D
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(1)}
              color={days.includes(1) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(1) ? "#CFCFCF" : "#FFFFFF"}>
              S
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(2)}
              color={days.includes(2) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(2) ? "#CFCFCF" : "#FFFFFF"}>
              T
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(3)}
              color={days.includes(3) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(3) ? "#CFCFCF" : "#FFFFFF"}>
              Q
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(4)}
              color={days.includes(4) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(4) ? "#CFCFCF" : "#FFFFFF"}>
              Q
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(5)}
              color={days.includes(5) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(5) ? "#CFCFCF" : "#FFFFFF"}>
              S
            </DiasDaSemana>
            <DiasDaSemana
              onClick={() => selecionarDias(6)}
              color={days.includes(6) ? "#FFFFFF" : "#dbdbdb"}
              background={days.includes(6) ? "#CFCFCF" : "#FFFFFF"}>
              S
            </DiasDaSemana>
          </div>
          <div>
            <BotaoInput onClick={() => setCriandoHabito(false)} color="#52B6FF" backgroundcolor="#FFFFFF">
                Cancelar
            </BotaoInput>

            { carregando ? (
                <BotaoInput color="#FFFFFF" backgroundcolor="#52B6FF">
                    <ThreeDots color="#FFFFFF" />
                </BotaoInput>
                ) : (
                <BotaoInput onClick={criarHabito} color="#FFFFFF" backgroundcolor="#52B6FF">
                    Salvar
                </BotaoInput>
                )
            }
          </div>

        </InputHabito>

        {meusHabitos.length === 0 ? ( 
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            ) : (
            <ListarHabitos />
            )
        }

      </HabitosContainer>
      <Rodape />
    </>
  );
}