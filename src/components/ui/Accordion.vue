<script setup>
import { ref } from "vue";
const props = defineProps({ items: { type: Array, required: true } });
const openIndex = ref(-1);
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? -1 : i;
};
</script>

<template>
  <div class="space-y-3">
    <div v-for="(item, i) in items" :key="i" class="card overflow-hidden">
      <button
        class="w-full flex items-center justify-between px-4 py-4 text-left"
        @click="toggle(i)"
      >
        <span class="font-medium">{{ item.q }}</span>
        <span class="text-slate-400">{{ openIndex === i ? "−" : "+" }}</span>
      </button>
      <transition name="slide-fade">
        <div v-if="openIndex === i" class="px-4 pb-4 text-sm text-slate-600">
          {{ item.a }}
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

