import { reactive, toRefs } from "vue";
import ls from "@/utilities/localStorage";

// Constants
const LS_KEYS = {
  theme: "pencyl.theme",
  token: "pencyl.token",
  refresh: "pencyl.refresh",
};

const THEMES = ["light", "dark"];

interface TokenPair {
  token: string;
  refresh: string;
}

// $state
const $state = reactive({
  theme: "light",
  token: "",
  refresh: "",
});

// Mutations
function toggleTheme() {
  $state.theme === "dark" ? ($state.theme = "light") : ($state.theme = "dark");
  console.log("MUTATION", "toggleTheme");
}

function setTheme(payload: string) {
  if (!THEMES.includes(payload)) return;
  $state.theme = payload;
  ls.set(LS_KEYS.theme, payload);
  console.log("MUTATION", "setTheme");
}

function setTokens(payload: TokenPair) {
  const { token, refresh } = payload;
  // if (token.length !== 64 || refresh.length !== 64) return;
  $state.token = token;
  $state.refresh = refresh;
  ls.set(LS_KEYS.token, token);
  ls.set(LS_KEYS.refresh, refresh);
  console.log("MUTATION", "setTokens");
}

export const state = {
  ...toRefs($state),
};

export const mutations = {
  toggleTheme,
  setTheme,
  setTokens,
};
