import ls from "@/utilities/ls/crud";

import api from "@/store/api";
import { mutations } from "@/store/state";
import sessionMachine from "@/xstate/sessionMachine";

// Constants
const LS_KEYS = {
  theme: "pencyl.theme",
  token: "pencyl.token",
  refresh: "pencyl.refresh",
};

sessionMachine.startService()

function testTokens() {
  const token = ls.read(LS_KEYS.token);
  const refresh = ls.read(LS_KEYS.refresh);
  api.getUser({token, refresh})
}

export default function initialize() {
  const lsTheme = ls.read(LS_KEYS.theme, "light");
  mutations.setTheme(lsTheme);
  testTokens()
}
