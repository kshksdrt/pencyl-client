import axios from 'axios'

function signin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${process.env.VUE_APP_SERVER_URL}/user/signin`,
      data: { email, password },
    })
      .then((res) => {
        const { success, tokens, error } = res.data;
        if (success === true) resolve(tokens)
        if (success === false) reject(error || "Error")
        if (error) reject(error);
      })
      .catch((err) => {
        if (err.response?.data?.error) reject(err.response?.data?.error || "Error");
      })
  })  
}

export default {
  signin
}