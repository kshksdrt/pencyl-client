import * as app from "@/core/stores/app";
import * as user from "@/core/stores/user";
import * as settings from "@/core/stores/settings";

import { MutationsObject, Payload } from "@/core/types";

let log = false;
if (process.env.NODE_ENV === "development") log = true;

const mutations: MutationsObject = {
  ...app.mutations,
  ...user.mutations,
  ...settings.mutations,
}

export const $get = {
  ...app.getters,
  ...user.getters,
  ...settings.getters,
}

export function $mutate(name: string, payload: Payload) {
  if (!Object.keys(mutations).includes(name)) {
    if (log) console.log("[store]", `${name} is not a valid mutation`)
    return
  }
  if (log) console.log("[store]", "MUTATION", {name, payload});
  mutations[name](payload)
}
