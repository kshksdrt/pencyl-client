<template>
  <div :class="state.theme.value">
    <Debug />
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script setup>
import Debug from "@/components/Debug";
import { state } from "@/store/state";

export { state };

export default {
  name: "App",
  components: { Debug },
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
