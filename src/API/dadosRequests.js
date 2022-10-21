import axios from "axios";

export function loginUser(dadosLogin) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosLogin);
  }

