import axios from "axios";

export function logarUsuario(dadosLogin) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosLogin);
}

export function cadastrarUsuario(dadosCadastro) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dadosCadastro);
}