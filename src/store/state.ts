import { reactive, computed } from "vue";
import ls from "@/utilities/localStorage";

// Constants
const LS_KEYS = {
  theme: "pencyl.theme",
};

const themes = ["light", "dark"];

// State
const state = reactive({
  theme: "light",
});

// Getters
const theme = computed(() => state.theme);

// Mutations
function toggleTheme() {
  state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
  console.log("MUTATION", "toggleTheme");
}

function setTheme(payload: string) {
  if (!themes.includes(payload)) return;
  state.theme = payload;
  ls.set(LS_KEYS.theme, payload);
  console.log("MUTATION", "setTheme");
}

export default {
  theme,
  toggleTheme,
  setTheme,
};
