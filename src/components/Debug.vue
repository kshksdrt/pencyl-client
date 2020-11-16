<template>
  <teleport v-show="enabled" to="#overlay">
    <div class="fixed top left">
      <p>
        {{
          `${state.token.value} + ${state.refresh.value} + ${state.theme.value}`
        }}
      </p>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { state } from "@/store/state.ts";

const enabled = ref(true);
export { state, enabled };

export default {
  name: "Debug",
};
</script>

<style lang="scss" scoped></style>
