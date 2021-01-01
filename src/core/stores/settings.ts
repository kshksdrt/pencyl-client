import { computed, reactive, readonly } from "vue";

import { Theme, MutationsObject } from "@/core/types";

const settings = reactive({
  theme: "light",
});

const mutations: MutationsObject = {
  setTheme(payload: Theme) {
    settings.theme = payload;
  },

  storeUser(payload: object) {
    console.log(payload)
  }
};

function mutate<T>(name: string, payload: T) {
  if (!Object.keys(mutations).includes(name)) {
    console.log(`${name} is not a valid mutation`)
    return
  }
  console.log("MUTATION", {name, payload});
  mutations[name](payload)
}

export default {
  state: readonly(settings),
  theme: computed(() => settings.theme),
  mutate,
}
