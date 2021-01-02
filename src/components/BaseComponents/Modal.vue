<template>
	<div>
		<teleport to="#modal">
			<div>
				<div class="modal-overlay" @click="close" />
				<div :class="`modal modal-${size}`">
					<slot />
				</div>
			</div>
		</teleport>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Modal",
	props: {
		size: {
			type: String,
			required: false,
			default: "small",
		},
	},
	emits: ["close"],
	methods: {
		close() {
			this.$emit("close");
		},
	},
});
</script>
