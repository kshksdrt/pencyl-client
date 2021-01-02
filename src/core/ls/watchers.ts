import { watch } from "vue";

import { $get } from "@/core/stores/index";
import crud from "@/core/ls/crud";
import { getKey } from "@/core/ls/keys";

watch($get.theme, (val) => {
  console.log("[watcher]", "changing theme")
  crud.write(getKey('theme'), val);
})