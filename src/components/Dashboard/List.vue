<template>
	<div :class="css.container">
		<ul>
			<li v-for="item in items" :key="item._id" :class="css.listItem">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { $get } from "@/core/stores";

const css = {
	container: `p-4`,
	listItem: `hover:bg-bg1 p-2 my-1 select-none`,
};

export default defineComponent({
	name: "List",
	setup() {
		return {
			css,
			items: $get.selectedList.value.items,
		};
	},
});
</script>
