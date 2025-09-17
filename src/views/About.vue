<script setup>
const highlights = [
  {
    title: "98% Claim Acceptance",
    desc: "Clean claims and rapid submissions.",
  },
  {
    title: "Certified Coders",
    desc: "Experienced team with industry certifications.",
  },
  {
    title: "Transparent Reporting",
    desc: "Dashboards that keep you informed.",
  },
  { title: "Security First", desc: "HIPAA-aligned processes and tooling." },
];
</script>

<template>
  <section class="section bg-gradient-to-b from-emerald-50 via-white to-white">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">About Us</h1>
      <p>
        Our mission is to simplify medical billing for healthcare providers. We
        deliver end-to-end billing, coding, and revenue cycle services so you
        can focus on patient care.
      </p>
      <div class="mt-8 grid md:grid-cols-3 gap-6">
        <div class="card p-6">
          <h3>Mission</h3>
          <p class="mt-2 text-sm">
            To maximize revenue integrity and reduce administrative burden.
          </p>
        </div>
        <div class="card p-6">
          <h3>Vision</h3>
          <p class="mt-2 text-sm">
            Be the most trusted partner for healthcare finances.
          </p>
        </div>
        <div class="card p-6">
          <h3>Certifications</h3>
          <p class="mt-2 text-sm">
            AAPC, AHIMA, HIPAA training, SOC2-ready processes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center mb-10">Why Choose Us?</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="h in highlights"
          :key="h.title"
          class="card p-6 hover:shadow-md transition"
        >
          <h3 class="mb-2">{{ h.title }}</h3>
          <p class="text-sm">{{ h.desc }}</p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1800&auto=format&fit=crop"
        alt="Our team"
        class="mt-12 aspect-[16/6] w-full rounded-2xl object-cover ring-1 ring-slate-200"
      />
    </div>
  </section>
</template>

<style scoped></style>

