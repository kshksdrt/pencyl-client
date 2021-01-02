<template>
	<div>
		<div :class="css.actionBar">
			<div :class="css.title" @click="toggleSelectListModal">
				<p>Your list</p>
			</div>
			<div :class="css.menu">
				<div :class="css.menuItems" @click="toggleTheme">
					Theme
				</div>
				<div :class="css.menuItems" @click="signOut">
					Sign out
				</div>
			</div>
		</div>
		<Modal
			size="small"
			:class="css.selectListModal"
			@close="toggleSelectListModal"
			v-if="selectListModal"
		>
			<h1 :class="css.modalTitle">Select a list</h1>
			<p v-for="list in lists" :key="list._id" @click="selectList">
				{{ list._id }}
			</p>
		</Modal>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { $get, $mutate } from "@/core/stores/index";
import sessionMachine from "@/core/xstate/sessionMachine";

import Modal from "@/components/BaseComponents/Modal.vue";

const css = {
	actionBar: `bg-bg1 flex-between w-full p-2 cursor-default select-none`,
	title: `font-bold text-green m-2`,
	modalTitle: `font-bold my-4`,
	menu: `flex-end`,
	menuItems: `bg-bg2 self p-2 m-2 rounded`,
	selectListModal: `py-4 px-2`,
};

export default defineComponent({
	name: "ListPanel",
	components: { Modal },
	setup() {
		const selectListModal = ref(false);

		function signOut() {
			sessionMachine.sendEvent("SIGN_OUT");
		}

		function toggleTheme() {
			let theme;
			if ($get.theme.value === "light") theme = "dark";
			if ($get.theme.value === "dark") theme = "light";
			$mutate("setTheme", theme);
		}

		function toggleSelectListModal() {
			selectListModal.value = !selectListModal.value;
		}

		function selectList(_id: string) {
			console.log(_id);
		}

		return {
			css,
			signOut,
			toggleTheme,
			selectListModal,
			lists: $get.lists,
			toggleSelectListModal,
			selectList,
		};
	},
});
</script>
