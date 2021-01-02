import { readonly, ref } from "vue";

import { Theme, MutationsObject } from "@/core/types";

const theme = ref("light")

export const getters = {
  theme: readonly(theme)
}

export const mutations: MutationsObject = {
  setTheme(payload: Theme) {
    theme.value = payload;
  },
};
