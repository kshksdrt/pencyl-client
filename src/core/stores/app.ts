import { computed, ref } from "vue";
import { List, MutationsObject } from "@/core/types";
import * as user from "@/core/stores/user";

const selectedListId = ref("none")

export const getters = {
  selectedList: computed((): List => {
    console.log("computing selected list", selectedListId.value)
    const result = user.getters.lists.value.find(list => {
      return list._id === selectedListId.value
    })
    return result ?? {} as List
  })
}

export const mutations: MutationsObject = {
  selectListById(payload: string) {
    selectedListId.value = payload
  }
}
