import axios from 'axios';

import { TokenPair } from '@/core/types';

import sessionMachine from '@/core/xstate/sessionMachine';
import settings from '@/core/stores/settings';

const exampleUser = {
  name: 'Example',
  email: 'example@example.com',
  settings: {},
  _id: "7fedbc0d17ad3f2cc02278c2",
}

function signin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    const onSuccess = (tokens: TokenPair) => {
      sessionMachine.sendEvent({
        type: "SIGN_IN",
        payload: tokens
      });
      resolve(true)
    }
    const onFailure = (error: string) => {
      sessionMachine.sendEvent("SIGN_OUT")
      reject(error || "Error")
    }

    if (+process.env.VUE_APP_MOCK_API === 1) {
      return onSuccess({token: "foo", refresh: "bar"})
    }
    axios({
      method: "post",
      url: `${process.env.VUE_APP_SERVER_URL}/user/signin`,
      data: { email, password },
    })
      .then((res) => {
        const { success, tokens, error } = res.data;
        if (success === false || error) return onFailure(error)
        if (success === true) return onSuccess(tokens)
      })
      .catch((err) => onFailure(err.response?.data?.error))
  })
}

function getUser(oldTokens: TokenPair) {
  return new Promise((resolve, reject) => {
    const onSuccess = (tokens: TokenPair, user: object) => {
      settings.mutate("storeUser", user)
      sessionMachine.sendEvent({
        type: "SIGN_IN",
        payload: tokens
      });
      resolve(true)
    }
    const onFailure = (error: string) => {
      sessionMachine.sendEvent("SIGN_OUT")
      reject(error || "Error")
    }

    if (+process.env.VUE_APP_MOCK_API === 1) {
      return onSuccess({token: "foo", refresh: "bar"}, exampleUser)
    }

    axios({
      method: "get",
      url: `${process.env.VUE_APP_SERVER_URL}/app-pencyl/user`,
      headers: {
        token: oldTokens.token,
        refresh: oldTokens.refresh,
      }
    })
      .then((res) => {
        const { success, tokens, data, error } = res.data;
        if (success === true) return onSuccess(tokens || oldTokens, data)
        if (success === false || error) return onFailure(error)
      })
      .catch((err) => onFailure(err.response?.data?.error))
  })
}

export default {
  signin,
  getUser,
}