<template>
  <div>
    <div class="modal-overlay" @click="closeModal" />
    <div class="modal modal-small light">
      <h3>Sign in with your ellipsis account.</h3>
      <!-- Fields -->
      <div class="pb4">
        <input
          type="text"
          class="input mt4"
          placeholder="Your email address"
          v-model="email"
        />
        <input
          :type="passwordVisible ? 'text' : 'password'"
          class="input mt4"
          placeholder="Choose a password"
          v-model="password"
        />
        <label class="flex-start text-small mt2 mb2">
          <input
            type="checkbox"
            class="mr2"
            :checked="passwordVisible"
            @change="passwordVisible = !passwordVisible"
          />
          Show password
        </label>
      </div>
      <!-- Errors -->
      <div v-if="errorMessage.length > 0" class="alert mt2 mb2">
        <p class="text-bold">Please fix the following errors</p>
        <p v-for="(error, index) in errorMessage" :key="index">
          {{ `${index + 1}. ${error}` }}
        </p>
      </div>
      <div class="flex-end mt3 mb3">
        <div class="loader mr3" v-if="signupInProgress"></div>
        <v-button
          text="Sign in"
          theme="primary"
          hasGradient
          @click="checkForErrorsAndSignin"
        />
      </div>
      <!-- Footer -->
      <p class="text-medium mt4">
        Don't have an account yet?
        <a
          href="https://accounts-ellipsis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          >Create one here</a
        >
      </p>
    </div>
  </div>
</template>

<script setup="_, {emit}">
import { defineComponent, ref } from "vue";
import router from "@/router";

import validator from "@/utilities/validator.js";
import api from "@/store/api";

const errorMessage = ref([]);
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

async function checkForErrorsAndSignin() {
  checkForErrors();
  if (errorMessage.value.length > 1) return;
  signupInProgress.value = true;

  const status = await api.signin(email.value, password.value);
  const { success, error } = status;
  if (error) errorMessage.value.push(error);
  if (success) router.push("/dashboard");

  signupInProgress.value = false;
}

function closeModal() {
  emit("close-modal");
}

export {
  checkForErrorsAndSignin,
  errorMessage,
  email,
  password,
  passwordVisible,
  signupInProgress,
  closeModal,
};

export default defineComponent({
  name: "Login",
});
</script>
