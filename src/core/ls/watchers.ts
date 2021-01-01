import { watch } from "vue";

import settings from "@/core/stores/settings";
import crud from "@/core/ls/crud";
import { getKey } from "@/core/ls/keys";

watch(settings.state, (val) => {
  console.log("changing theme")
  crud.write(getKey('theme'), val.theme);
})