<script setup>
const cards = [
  "Clinics",
  "Hospitals",
  "Independent Practitioners",
  "Specialty Practices",
];
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Industries We Serve</h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="c in cards"
          :key="c"
          class="card p-6 hover:shadow-md transition"
        >
          <div
            class="aspect-video rounded-xl bg-[--color-light] grid place-items-center text-slate-400 mb-4"
          >
            Photo
          </div>
          <h3>{{ c }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

