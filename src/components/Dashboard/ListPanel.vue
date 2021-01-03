<template>
	<div :class="css.container">
		<div :class="css.actionBar">
			<div :class="css.title" @click="toggleSelectListModal">
				<h1>{{ selectedList.name || "No lists" }}</h1>
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
		<List :class="css.list" v-if="selectedList._id" />
		<Modal
			size="small"
			:class="css.selectListModal"
			@close="toggleSelectListModal"
			v-if="selectListModal"
		>
			<h1 :class="css.modalTitle">Select a list</h1>
			<p v-for="list in lists" :key="list._id" @click="selectList(list._id)">
				{{ list.name }}
			</p>
		</Modal>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { $get, $mutate } from "@/core/stores/index";
import sessionMachine from "@/core/xstate/sessionMachine";

import Modal from "@/components/BaseComponents/Modal.vue";
import List from "@/components/Dashboard/List.vue";

const css = {
	container: `px-4 pt-2`,
	actionBar: `flex-between w-full px-2 py-1 cursor-default select-none border-bg2 border-b`,
	title: `hover:bg-bg2 font-bold text-green m-2 p-2 rounded`,
	modalTitle: `font-bold my-4`,
	menu: `flex-end`,
	menuItems: `bg-bg1 hover:bg-bg2 text-xs m-2 p-2 rounded`,
	selectListModal: `py-4 px-2`,
	list: `w-full`,
};

export default defineComponent({
	name: "ListPanel",
	components: { Modal, List },
	setup() {
		const selectListModal = ref(false);

		function signOut() {
			sessionMachine.sendEvent("SIGN_OUT");
		}

		function toggleTheme() {
			let theme = "light";
			if ($get.theme.value === "light") theme = "dark";
			if ($get.theme.value === "dark") theme = "light";
			$mutate("setTheme", theme);
		}

		function toggleSelectListModal() {
			selectListModal.value = !selectListModal.value;
		}

		function selectList(_id: string) {
			$mutate("selectListById", _id);
			toggleSelectListModal();
		}

		return {
			css,
			toggleTheme,
			signOut,
			selectListModal,
			toggleSelectListModal,
			lists: $get.lists,
			selectedList: $get.selectedList,
			selectList,
		};
	},
});
</script>
