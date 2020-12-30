<template>
	<teleport to="#overlay">
		<div id="info" v-show="enabled" @click="enabled = !enabled">
			<p>
				{{
					`
						${$state.token}
						${$state.refresh}
						${$state.theme}
          `
				}}
			</p>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
	name: "Debug",
	inject: ["$state"],
	setup() {
		const $state = inject("$state");
		const enabled = ref(true);

		console.log($state);

		return { enabled };
	},
});
</script>

<style scoped>
#info {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	word-wrap: break-word;
}
#info > p {
	padding: 10px;
	background: rgba(121, 121, 121, 0.131);
}
</style>
