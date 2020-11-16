import axios from 'axios'
import { mutations } from './state'

function signin(email: string, password: string) {
    return axios({
      method: "post",
      url: `${process.env.VUE_APP_SERVER_URL}/user/signin`,
      data: { email, password },
    })
      .then((res) => {
        const { success, tokens, error } = res.data;
        if (success === true) {
          mutations.setTokens(tokens)
          return { success }
        }
        if (success === false || error) return { error: error || "Error" }
      })
      .catch((err) => {
        if (err.response?.data?.error) return { error: err.response?.data?.error || "Error" };
      })
}

export default {
  signin
}