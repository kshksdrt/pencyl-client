<template>
	<teleport to="#overlay">
		<div
			id="info"
			v-show="enabled"
			@click="togglePosition"
			:class="`${position}-0`"
		>
			<p>
				{{
					`
						${sessionState.value}
						${sessionContext.token}
						${sessionContext.refresh}
						${get.theme.value}
          `
				}}
			</p>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { $get } from "@/core/stores/index";
import sessionMachine from "@/core/xstate/sessionMachine";

export default defineComponent({
	name: "Debug",
	setup() {
		const enabled = ref(true);
		const position = ref("bottom" as "top" | "bottom");
		function togglePosition() {
			if (position.value === "top") {
				position.value = "bottom";
			} else {
				position.value = "top";
			}
		}

		const sessionState = sessionMachine.state;
		const sessionContext = sessionMachine.context;

		return {
			enabled,
			position,
			togglePosition,
			sessionState,
			sessionContext,
			get: $get,
		};
	},
});
</script>

<style scoped>
#info {
	position: fixed;
	width: 100vw;
	word-wrap: break-word;
}
#info > p {
	padding: 10px;
	background: rgba(121, 121, 121, 0.131);
}
</style>
