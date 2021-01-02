import { v4 as uuid } from "uuid";

import { Action, ActionMeta, List, UserData } from "@/core/types";
import { $get, $mutate } from "@/core/stores/index";

function makeCopyOfData(): UserData {
  return JSON.parse(JSON.stringify($get.user.value.data))
}

function applyChanges(actions: Action[]) {
  const initialData = makeCopyOfData()
  actions.reduce((state, action) => {

    const changeResult = applyChange(state, action)
    if (changeResult.action.type === 'discard') return state

    $mutate("addToRemoteQueue", changeResult)
    return changeResult.data

  }, initialData)
}

interface ChangeResult {
  data: UserData;
  action: ActionMeta;
}

function applyChange(data: UserData, action: Action): ChangeResult {
  const { type, payload } = action
  switch (type) {

    case "create-list":
      const _id = uuid()
      const createdList: List = {
        ...payload,
        _id,
        items: [],
      }
      data['lists'] = [...data.lists, createdList]
      return {
        data,
        action: { ...action, md: { _id } } 
      }

    case "delete-list":
      const filtered = data.lists.filter(each => each._id !== payload)
      data['lists'] = filtered
      return {
        data,
        action: { ...action, md: { payload } }
      }

    default:
      return {
        data,
        action: {
          type: 'discard',
          payload: {},
          md: {}
        }
      }
  }
}
