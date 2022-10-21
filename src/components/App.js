import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styled_components/GlobalStyles";
import UserContext from "../UserContext";
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function App() {
  const [dadosUsuario, setDadosUsuario] = useState("");

  useEffect(() => {
    const dadosLocais = JSON.parse(localStorage.getItem("trackit"));

    setDadosUsuario(dadosLocais);

  },[]);

  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <UserContext.Provider value={{ dadosUsuario, setDadosUsuario }}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            {/* <Route path="/hoje" element={<Hoje />} />
                <Route path="/historico" element={<Historico />} />
                <Route path="/habitos" element={<Habitos />} /> */}
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    </>
  );
}