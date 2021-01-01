<template>
	<div class="app">
		<Debug />
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

import settings from "@/core/stores/settings";

import Debug from "@/components/Debug.vue";

export default defineComponent({
	name: "App",
	components: { Debug },
	setup() {
		provide("settings", settings.state);

		return {};
	},
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
