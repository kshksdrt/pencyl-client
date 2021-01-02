import { readonly, ref } from "vue";

import { Theme, MutationsObject } from "@/core/types";

const theme = ref("light")

const getters = {
  theme: readonly(theme)
}

const mutations: MutationsObject = {
  setTheme(payload: Theme) {
    theme.value = payload;
  },
};

export default {
  getters,
  mutations,
}
