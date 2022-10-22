import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { logarUsuario } from "../API/dadosRequests";
import UserContext from "../UserContext";
import logo from "../assets/Logo.png";
import LoginStyles from "../styled_components/LoginStyles";

export default function Login() {
  const { setDadosUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);
  const [formLogin, setFormLogin] = useState(
    {
      email: "",
      password: ""
    } 
  );

  function preencherForm(event) {
    setFormLogin(
      {
        ...formLogin,
        [event.target.name]: event.target.value
      }
    );
    console.log(formLogin);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCarregando(true);

    const promise = logarUsuario(formLogin);
    console.log(promise);

    promise.then((event) => {
      setDadosUsuario(event.data);
    //console.log(event, 'aqui oioi');
      localStorage.setItem("trackit", JSON.stringify({...event.data, formLogin: formLogin}));
      navigate("/habitos");
    });
    promise.catch(() => {
      alert("Houve um erro no seu login");
      setCarregando(false);
    });

  }

  return (
    <LoginStyles>
      <img src={logo} alt="trackit" />

      <form onSubmit={handleSubmit}>
        <input value={formLogin.email} onChange={preencherForm} placeholder="email"
               name="email" type="email" disabled={carregando} 
        required />
        <input value={formLogin.password} onChange={preencherForm} name="password" 
               placeholder="senha" type="password" disabled={carregando} 
         required />

        {carregando ? (
            <button>
                <ThreeDots color="#FFFFFF"/>
            </button> ) : 
          ( <button type="submit">Entrar</button> )
        }
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginStyles>
  );
}