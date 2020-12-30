import ls from "./localStorage";
import { mutations } from "../store/state";

// Constants
const LS_KEYS = {
  theme: "pencyl.theme",
  token: "pencyl.token",
  refresh: "pencyl.refresh",
};

export default function initialize () {
  const lsTheme = ls.get(LS_KEYS.theme);
  mutations.setTheme(lsTheme);
  
  
}
