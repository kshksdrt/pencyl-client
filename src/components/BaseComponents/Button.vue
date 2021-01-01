<template>
	<div
		:class="classes"
		:style="{
			fontSize: `${size}px`,
			fontWeight: notBold ? 400 : 500,
		}"
	>
		<p>
			{{ text }}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const THEMES: string[] = ["primary", "secondary", "link"];

export default defineComponent({
	name: "Button",
	props: {
		text: {
			type: String,
			required: true,
		},
		theme: {
			type: String,
			required: false,
			default: "primary",
			validator: (value: string) => THEMES.includes(value),
		},
		hasShadow: {
			type: Boolean,
			default: false,
		},
		hasGradient: {
			type: Boolean,
			default: true,
		},
		notBold: {
			type: Boolean,
			default: false,
		},
		notUppercase: {
			type: Boolean,
			default: false,
		},
		size: {
			type: Number,
			default: 13,
			validator: (value: number) => value > 10 && value < 18,
		},
	},
	computed: {
		classes(): object {
			return {
				btn: true,
				gradient: this.hasGradient,
				shadow: this.hasShadow,
				uppercase: !this.notUppercase,
				"btn-primary": this.theme === "primary",
				"btn-secondary": this.theme === "secondary",
				"btn-link": this.theme === "link",
			};
		},
	},
});
</script>

<style lang="scss">
.btn {
	padding: 0.85em;
	border-radius: 0.3em;
	display: inline-block;
	border: none;
	transition: 100ms all ease-in-out;
	cursor: pointer;
}

.btn-primary {
	background-color: #00796b;
	color: white;
}

.btn-primary:hover {
	background: #00685c;
}

.btn-primary:active {
	background: rgb(24, 102, 94);
	-moz-box-shadow: 1px 1px 0px 0px #00000040;
	-webkit-box-shadow: 1px 1px 0px 0px #00000040;
	box-shadow: 0px 0px 0px 0px #00000040;
}

.btn-secondary {
	background: #fb8c00;
	color: black;
}

.btn-secondary:hover {
	background: #e87f00;
}

.btn-secondary:active {
	background: #d07200;
	-moz-box-shadow: 1px 1px 0px 0px #00000040;
	-webkit-box-shadow: 1px 1px 0px 0px #00000040;
	box-shadow: 0px 0px 0px 0px #00000040;
}

.btn-link {
	background: #4caf5000;
	color: var(--bg-2);
}

.btn-link:hover {
	background: var(--bg-1);
	text-decoration: underline;
}

.btn-link:active {
	background: var(--bg-2);
	-moz-box-shadow: 1px 1px 0px 0px #00000040;
	-webkit-box-shadow: 1px 1px 0px 0px #00000040;
	box-shadow: 0px 0px 0px 0px #00000040;
}

.gradient {
	background-image: linear-gradient(
		128deg,
		rgba(255, 255, 255, 0.2) 0%,
		rgba(255, 255, 255, 0) 90%
	);
}
.shadow {
	-moz-box-shadow: 1px 1px 4px 0px #00000040;
	-webkit-box-shadow: 1px 1px 4px 0px #00000040;
	box-shadow: 2px 2px 4px 0px #00000040;
}
</style>
