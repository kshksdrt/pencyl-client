<template>
	<div>
		<div :class="css.actionBar">
			<div :class="css.title">
				<p>Your list</p>
			</div>
			<div :class="css.menu">
				<div :class="css.signOut" @click="signOut">
					Sign out
				</div>
				<div :class="css.signOut" @click="toggleTheme">
					Theme
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import settings from "@/core/stores/settings";
import sessionMachine from "@/core/xstate/sessionMachine";
import { defineComponent } from "vue";

const css = {
	actionBar: `bg-bg1 flex-between w-full p-2 cursor-default`,
	title: `font-bold text-green`,
	menu: `flex-end`,
	signOut: `bg-bg2 self p-2`,
};

export default defineComponent({
	name: "ListPanel",
	setup() {
		function signOut() {
			sessionMachine.sendEvent("SIGN_OUT");
		}

		function toggleTheme() {
			let theme;
			if (settings.state.theme === "light") theme = "dark";
			if (settings.state.theme === "dark") theme = "light";
			settings.mutate("setTheme", theme);
		}

		return {
			css,
			signOut,
			toggleTheme,
		};
	},
});
</script>
