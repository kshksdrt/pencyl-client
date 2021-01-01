<template>
  <div class="home">
    <div class="container">
      <Intro />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/Intro.vue";

export default defineComponent({
  name: "Home",
  components: { Intro },
});
</script>
