<script setup>
const items = [
  {
    title: "Medical Billing & Coding",
    img: "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6791?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Revenue Cycle Management (RCM)",
    img: "https://images.unsplash.com/photo-1551281044-8d8d0a2371a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Credentialing Services",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Practice Management Support",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Patient Billing & Collections",
    img: "https://images.unsplash.com/photo-1554224155-1696413569ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Analytics & Reporting",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="section bg-gradient-to-b from-blue-50 via-white to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Services</h1>
      <p>Comprehensive services tailored to practices of any size.</p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink
          v-for="s in items"
          :key="s.title"
          to="/contact"
          class="card p-6 group hover:shadow-md transition"
        >
          <img :src="s.img" alt="Service" class="aspect-video rounded-xl object-cover mb-4" />
          <h3 class="mb-2 group-hover:text-[--color-primary]">{{ s.title }}</h3>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae.
          </p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

