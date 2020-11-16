<template>
  <div class="flex-between full-width">
    <div class="m4">
      <h3 class="text-bold">Pencyl</h3>
      <p class="mb8">All your lists in one place.</p>
      <v-button
        text="Get started"
        theme="primary"
        hasGradient
        hasShadow
        @click="openModal"
      />
    </div>
    <div class="m4">
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
