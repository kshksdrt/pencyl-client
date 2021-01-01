import { watch } from "vue";

import settings from "@/core/stores/settings";
import applyStyles from "@/utilities/applyStyles";

watch(settings.theme, applyStyles)