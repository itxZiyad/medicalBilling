<script setup>
import BaseNavbar from "./components/layout/BaseNavbar.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white relative z-10">
    <div class="app-bg" aria-hidden="true">
      <div class="bg-blob blob-blue"></div>
      <div class="bg-blob blob-emerald"></div>
      <div class="bg-blob blob-purple"></div>
    </div>
    <BaseNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <BaseFooter />
  </div>
</template>

<style scoped></style>
