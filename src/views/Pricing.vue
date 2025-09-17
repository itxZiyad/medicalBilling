<script setup>
const plans = [
  { name: "Starter", desc: "For small practices", cta: "Contact for Quote" },
  {
    name: "Professional",
    desc: "For growing clinics",
    cta: "Contact for Quote",
  },
  { name: "Enterprise", desc: "For hospitals", cta: "Contact for Quote" },
];
</script>

<template>
  <section class="section bg-gradient-to-b from-blue-50 via-emerald-50 to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-3">Pricing</h1>
      <p class="text-slate-600">Flexible plans. Transparent pricing. Tailored to your organization.</p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(p, i) in plans" :key="p.name" class="card p-6 relative overflow-hidden">
          <div v-if="i === 1" class="absolute right-4 top-4 text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">Most Popular</div>
          <h3 class="mb-1">{{ p.name }}</h3>
          <p class="text-sm mb-6">{{ p.desc }}</p>
          <ul class="text-sm text-slate-600 space-y-2 mb-6">
            <li>• End-to-end billing</li>
            <li>• Denial management</li>
            <li>• Reporting & analytics</li>
          </ul>
          <RouterLink
            to="/contact"
            class="btn-white w-full"
          >
            {{ p.cta }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

