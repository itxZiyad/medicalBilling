<script setup>
import Accordion from "../components/ui/Accordion.vue";
const items = [
  {
    q: "What is your claim success rate?",
    a: "Our clean claim rate consistently exceeds 98%.",
  },
  {
    q: "Do you handle all specialties?",
    a: "Yes, we support most specialties including primary care and niche specialties.",
  },
  {
    q: "How do you ensure HIPAA compliance?",
    a: "We enforce strict controls, training, and secure infrastructure.",
  },
  {
    q: "What percentage do you charge?",
    a: "Pricing is tailored; contact us for a customized quote.",
  },
];
</script>

<template>
  <section class="section bg-[--color-light]">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">FAQs</h1>
      <p>Answers to common questions about our medical billing services.</p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Accordion :items="items" />
    </div>
  </section>
</template>

<style scoped></style>

