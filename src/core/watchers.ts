import { watchEffect } from "vue";

import { $get } from "@/core/stores/index";
import applyStyles from "@/utilities/applyStyles";

watchEffect(() => {
  applyStyles($get.theme.value)
})