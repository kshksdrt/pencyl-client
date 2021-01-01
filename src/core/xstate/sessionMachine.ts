import { readonly, ref } from 'vue';
import { AnyEventObject, interpret, Machine } from 'xstate';

import router from '@/config/router';
import ls from '@/core/ls/crud'
import { getKey } from '@/core/ls/keys'

const sessionMachine = Machine(
  // Config
  {
    id: 'user-session',
    context: {
      token: '',
      refresh: '',
    },
    initial: 'startup',
    states: {
      startup: {
        on: {
          SIGN_IN: {
            target: 'signedIn',
            cond: 'signInGuard', 
          },
          SIGN_OUT: 'signedOut',
        }
      },
      signedIn: {
        entry: ['storeTokens', 'updateLs', 'navigateToDashboard'],
        on: {
          SIGN_OUT: 'signedOut'
        }
      },
      signedOut: {
        entry: ['removeTokens', 'updateLs', 'navigateToHome'],
        on: {
          SIGN_IN: {
            target: 'signedIn',
            cond: 'signInGuard', 
          },
        }
      },
    }
  },
  // Options
  {
    actions: {
      storeTokens: (context, event) => {
        console.log("Storing tokens")
        context.token = event.payload.token
        context.refresh = event.payload.refresh
      },
      removeTokens: (context) => {
        console.log("Removing tokens")
        context.token = ""
        context.refresh = ""
      },
      updateLs: (context) => {
        console.log("Updating Ls")
        ls.write(getKey("token"), context.token);
        ls.write(getKey("refresh"), context.refresh);
      },
      navigateToDashboard: () => {
        router.push("/dashboard")
      },
      navigateToHome: () => {
        router.push("/")
      }
    },
    guards: {
      signInGuard: (_, event) => {
        const {token, refresh} = event.payload
        if (typeof token !== "string") return false
        if (typeof refresh !== "string") return false
        return true
      }
    }
  }
);

const context = ref(sessionMachine.context);
const state = ref(sessionMachine.initialState);

const sessionService = interpret(sessionMachine)

sessionService.onTransition((newState) => {
  state.value = newState;
  context.value = newState.context;
});

function sendEvent(event: string | AnyEventObject) {
  sessionService.send(event)
}

export default {
  startService: () => sessionService.start(),
  state: readonly(state),
  context: readonly(context),
  sendEvent,
}