<template>
	<div class="app">
		<Debug />
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Debug from "@/components/Debug.vue";

export default defineComponent({
	name: "App",
	components: { Debug },
});
</script>

<style lang="scss">
/*! @import */
@import "@/assets/styles/app";
@import "@/assets/styles/utilities";
@import "@/assets/styles/elements";
@import "@/assets/styles/components";
@import "@/assets/styles/layout";
@import "@/assets/styles/animations";
</style>
