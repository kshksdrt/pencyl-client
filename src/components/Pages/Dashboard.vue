<template>
	<div>
		<div id="background" :class="css.bg">
			<div id="dashboard-view" :class="css.view">
				<div :class="css.list">
					<ListPanel />
				</div>
				<div :class="css.utils">
					<Utilities />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListPanel from "@/components/Dashboard/ListPanel.vue";
import Utilities from "@/components/Dashboard/Utilities.vue";

const css = {
	bg: `
		flex-column-start h-screen bg-bg1
	`,
	view: `
		w-full bg-bg0 border-bg2 px-4
		sm:flex sm:h-full sm:p-0
		md:my-10 md:mx-auto md:w-4/5 md:shadow md:border md:rounded
		lg:w-8/12
	`,
	list: `
		w-full my-4 border-bg2 border rounded
		sm:w-2/5 sm:m-0 sm:rounded-none sm:rounded-l sm:border-0 sm:border-r
		md:w-4/12
	`,
	utils: `
		w-full my-4 border-bg2 border rounded
		sm:w-3/5 sm:m-0 sm:rounded-none sm:rounded-r sm:border-0
		md:w-8/12
	`,
};

export default defineComponent({
	name: "Dashboard",
	components: { ListPanel, Utilities },
	setup() {
		return {
			css,
		};
	},
});
</script>
