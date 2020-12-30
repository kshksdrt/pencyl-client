<template>
	<div :class="theme">
		<Debug />
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<script>
import { defineComponent } from "vue";

import { $state } from "@/store/state";

import Debug from "@/components/Debug";

export default defineComponent({
	name: "App",
	components: { Debug },
	provide() {
		return {
			$state,
		};
	},
	setup() {
		return {
			theme: $state.theme,
		};
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
