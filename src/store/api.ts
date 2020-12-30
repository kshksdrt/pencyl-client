import axios from 'axios'
import { mutations } from './state'

function signin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${process.env.VUE_APP_SERVER_URL}/user/signin`,
      data: { email, password },
    })
      .then((res) => {
        const { success, tokens, error } = res.data;
        if (success === true) {
          mutations.setTokens(tokens)
          resolve(true)
          return
        }
        if (success === false || error) {
          reject(error || "Error" )
          return
        }
      })
      .catch((err) => {
        reject(err.response?.data?.error || "Error" )
        return
      })
  })
}

export default {
  signin
}