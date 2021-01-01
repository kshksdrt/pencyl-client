import ls from "@/core/ls/crud";

import api from "@/core/api";
import { mutations } from "@/core/state";
import sessionMachine from "@/core/xstate/sessionMachine";

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
