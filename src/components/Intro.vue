<template>
	<div class="flex-between w-full">
		<div class="m-4">
			<h3 class="font-bold">Pencyl</h3>
			<p class="mb-8">All your lists in one place.</p>
			<v-button
				text="Get started"
				theme="primary"
				hasGradient
				hasShadow
				@click="openModal"
			/>
		</div>
		<div class="m-4">
			<img src="@/assets/preview.jpeg" alt="Preview" />
		</div>
	</div>
	<teleport to="#modal">
		<Login @close-modal="closeModal" v-if="signinModal" />
	</teleport>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import Login from "@/components/Modals/Login.vue";

const signinModal = ref(false);
function openModal() {
	signinModal.value = true;
}
function closeModal() {
	signinModal.value = false;
}

export { signinModal, openModal, closeModal };

export default defineComponent({
	name: "Intro",
	components: { Login },
});
</script>
