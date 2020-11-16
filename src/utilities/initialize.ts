import ls from "./localStorage";
import { mutations } from "../store/state";

// Constants
const LS_KEYS = {
  theme: "pencyl.theme",
};

export default function() {
  const lsTheme = ls.get(LS_KEYS.theme);
  mutations.setTheme(lsTheme);
}
