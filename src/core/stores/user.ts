import { computed, readonly, ref } from "vue";

import { ActionMeta, MutationsObject, User } from "@/types/types";

// State
const user = ref({} as User);
const remoteActionQueue = ref([] as ActionMeta[])

// Getters
export const getters = {
  user: readonly(user),
  lists: computed(() => {
    console.log("generating lists")
    if (!user.value.data || !user.value.data.lists) return [];
    return user.value.data.lists;
  })
}

// Mutations
export const mutations: MutationsObject = {
  storeUser(payload: User) {
    user.value = payload
  },
  addToRemoteQueue(payload: ActionMeta) {
    remoteActionQueue.value.push(payload)
  }
};
