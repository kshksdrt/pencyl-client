import { computed, readonly, ref } from "vue";

import { ActionMeta, MutationsObject, User } from "@/core/types";

// State
const user = ref({} as User);
const remoteActionQueue = ref([] as ActionMeta[])

// Getters
const getters = {
  user: readonly(user),
  lists: computed(() => {
    if (!user.value.data || !user.value.data.lists) return [];
    return user.value.data.lists;
  })
}

// Mutations
const mutations: MutationsObject = {
  storeUser(payload: User) {
    user.value = payload
  },
  addToRemoteQueue(payload: ActionMeta) {
    remoteActionQueue.value.push(payload)
  }
};

export default {
  getters,
  mutations,
}
