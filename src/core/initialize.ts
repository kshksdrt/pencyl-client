import ls from "@/core/ls/crud";
import api from "@/core/api";
import { $mutate } from "@/core/stores/index";
import sessionMachine from "@/core/xstate/sessionMachine";

import "@/core/ls/watchers"
import "@/core/watchers"

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
  setTimeout(() => {
    api.getUser({token, refresh})
  }, 200)
}

export default function initialize() {
  const lsTheme = ls.read(LS_KEYS.theme, "light");
  $mutate("setTheme", lsTheme);
  testTokens()
}
