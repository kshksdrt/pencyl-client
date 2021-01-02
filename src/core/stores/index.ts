import settings from "@/core/stores/settings";
import user from "@/core/stores/user";

let log = false;
if (process.env.NODE_ENV === "development") log = false;

const mutations = {
  ...settings.mutations,
  ...user.mutations,
}

export const $get = {
  ...settings.getters,
  ...user.getters,
}

export function $mutate<T>(name: string, payload: T) {
  if (!Object.keys(mutations).includes(name)) {
    if (log) console.log("[store]", `${name} is not a valid mutation`)
    return
  }
  if (log) console.log("[store]", "MUTATION", {name, payload});
  mutations[name](payload)
}
