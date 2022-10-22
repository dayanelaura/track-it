import axios from "axios";

export function logarUsuario(dadosLogin) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosLogin);
}

export function cadastrarUsuario(dadosCadastro) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dadosCadastro);
}

export function enviarHabito(dadosHabito, config) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", dadosHabito, config);
}

export function receberHabito(config) {
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
}

export function deletarHabito(config, ID_Habito) {
    return axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${ID_Habito}`,config);
}