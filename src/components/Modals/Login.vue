<template>
	<div>
		<div class="modal-overlay" @click="closeModal" />
		<div class="modal modal-small light">
			<h3 class="py-3 font-bold">Sign in with your ellipsis account</h3>
			<!-- Fields -->
			<div class="pb-4">
				<input
					type="text"
					class="input mt-4"
					placeholder="Your email address"
					v-model="email"
				/>
				<input
					:type="passwordVisible ? 'text' : 'password'"
					class="input mt-4"
					placeholder="Choose a password"
					v-model="password"
				/>
				<label class="flex-start text-small mt-4">
					<input
						type="checkbox"
						class="mr-2"
						:checked="passwordVisible"
						@change="passwordVisible = !passwordVisible"
					/>
					Show password
				</label>
			</div>
			<!-- Errors -->
			<div v-if="errorMessage.length > 0" class="alert mt-2 mb-2">
				<p class="font-bold">Please fix the following errors</p>
				<p v-for="(error, index) in errorMessage" :key="index">
					{{ `${index + 1}. ${error}` }}
				</p>
			</div>
			<div class="flex-end mt-3 mb-3">
				<div class="loader mr-3" v-if="signupInProgress"></div>
				<Button
					text="Sign in"
					theme="primary"
					hasGradient
					@click="checkForErrorsAndSignin"
				/>
			</div>
			<!-- Footer -->
			<p class="text-medium mt4">
				Don't have an account yet?
				<a :href="signupUrl" target="_blank" rel="noopener noreferrer"
					>Create one here</a
				>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import validator from "@/utilities/validator";
import api from "@/core/api";

import Button from "@/components/BaseComponents/Button.vue";

const signupUrl = process.env.VUE_APP_SIGNUP_URL;

export default defineComponent({
	name: "Login",
	components: { Button },
	setup(_, context) {
		const errorMessage = ref([] as string[]);
		const email = ref("");
		const password = ref("");
		const passwordVisible = ref(false);
		const signupInProgress = ref(false);

		function checkForErrors() {
			errorMessage.value = [];
			if (!validator.validate("email", email.value))
				errorMessage.value.push("Invalid email.");
			if (!validator.validate("password", password.value))
				errorMessage.value.push("Password must be 14 to 32 characters long.");
		}

		function checkForErrorsAndSignin() {
			checkForErrors();
			if (errorMessage.value.length > 1) return;
			signupInProgress.value = true;

			api
				.signin(email.value, password.value)
				.catch((error) => errorMessage.value.push(error))
				.finally(() => (signupInProgress.value = false));
		}

		function closeModal() {
			context.emit("close-modal");
		}

		return {
			signupUrl,
			checkForErrorsAndSignin,
			errorMessage,
			email,
			password,
			passwordVisible,
			signupInProgress,
			closeModal,
		};
	},
});
</script>
