<script setup>
const posts = Array.from({ length: 6 }).map((_, i) => ({
  title: `How to Improve Claims ${i + 1}`,
  desc: "Short guide on optimizing billing workflows and reducing denials.",
}));
</script>

<template>
  <section class="section bg-[--color-light]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Blog & Resources</h1>
      <p>
        Insights and best practices for billing, coding, and revenue growth.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p, i) in posts" :key="i" class="card p-4">
          <div
            class="aspect-video rounded-xl bg-[--color-light] grid place-items-center text-slate-400 mb-4"
          >
            Thumbnail
          </div>
          <h3 class="mb-2">{{ p.title }}</h3>
          <p class="text-sm">{{ p.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

