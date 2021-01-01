import { reactive, readonly } from "vue";

import ls from "@/utilities/ls/crud";
import { getKey } from "@/utilities/ls/keys";

const THEMES = ["light", "dark"];

// state
const app = reactive({
  theme: "light",
});

// Mutations
export const mutations = {
  toggleTheme() {
    app.theme === "dark" ? (app.theme = "light") : (app.theme = "dark");
    console.log("MUTATION", "toggleTheme");
  },

  setTheme(payload: string) {
    if (!THEMES.includes(payload)) return;
    app.theme = payload;
    ls.write(getKey('theme'), payload);
    console.log("MUTATION", "setTheme");
  },

  storeUser(payload: object) {
    console.log(payload)
  }
};

export const state = readonly(app);
