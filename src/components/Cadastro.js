import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import LoginStyles from "../styled_components/LoginStyles";
import logo from "../assets/Logo.png";
import { cadastrarUsuario } from "../API/dadosRequests";

export default function Cadastro() {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);
  const [formCadastro, setFormCadastro] = useState(
    {
        email: "",
        name: "",
        image: "",
        password: "",
    }
  );

  function handleForm(event) {
    setFormCadastro(
        {
        ...formCadastro,
        [event.target.name]: event.target.value,
        }
    );
    console.log(formCadastro);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCarregando(true);

    const promise = cadastrarUsuario(formCadastro);
    promise.then(() => { navigate("/"); });
    promise.catch(() => {
      alert("Houve um erro no seu cadastro");
      setCarregando(false);
    });
  }

  return (
    <LoginStyles>
      <img src={logo} alt="trackit" />

      <form onSubmit={handleSubmit}>
        <input value={formCadastro.email} onChange={handleForm} placeholder="email"
               name="email" type="email" disabled={carregando} 
         required />
        <input value={formCadastro.password} onChange={handleForm} placeholder="senha"
               name="password" type="password" disabled={carregando}
         required />
        <input value={formCadastro.name} onChange={handleForm} placeholder="nome"
               name="name" type="text" disabled={carregando} 
         required />
        <input value={formCadastro.image} onChange={handleForm} placeholder="foto"
               name="image" type="text" disabled={carregando} 
         required />

        {carregando ? (
            <button>
                <ThreeDots color="#FFFFFF" />
            </button> ) : 
          ( <button type="submit">Registrar</button> )
        }
      </form>

      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>

    </LoginStyles>
  );
}
