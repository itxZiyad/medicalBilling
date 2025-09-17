<script setup>
import Accordion from "../components/ui/Accordion.vue";
const heroImg =
  "https://smartclinix.net/wp-content/uploads/2022/10/types-of-medical-billing-1.jpg";

const logos = [
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+1",
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+2",
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+3",
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+4",
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+5",
  "https://dummyimage.com/120x40/eaecf0/94a3b8.png&text=Logo+6",
];

const features = [
  {
    title: "Faster Claim Submission",
    desc: "Streamlined workflows to submit clean claims quickly.",
  },
  {
    title: "Denial Management",
    desc: "Identify, correct, and resubmit denials with precision.",
  },
  {
    title: "HIPAA Compliance",
    desc: "Security-first processes to keep patient data protected.",
  },
  {
    title: "Revenue Growth",
    desc: "Insights and actions that increase your collections.",
  },
];
const stats = [
  { value: "98%", label: "Clean Claim Rate" },
  { value: "<14d", label: "Avg. A/R Days" },
  { value: "35%", label: "Denial Reduction" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  {
    quote: "They transformed our billing process and cash flow.",
    author: "Clinic Director",
  },
  {
    quote: "Fast, compliant, and transparent. Highly recommend!",
    author: "Practice Owner",
  },
  { quote: "Our denial rate dropped dramatically.", author: "RCM Manager" },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Most practices are onboarded within 7–10 business days depending on scope.",
  },
  {
    q: "Do you work with our EHR?",
    a: "Yes, we integrate with major EHRs and provide custom workflows when needed.",
  },
  {
    q: "How do you charge?",
    a: "Transparent percentage of collections or flat-fee options for specific services.",
  },
];
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-gradient-to-r from-blue-100 via-emerald-100 to-violet-100">
    <div
      class="absolute inset-0 -z-10 opacity-40"
      style="background-image: radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.08) 1px, transparent 0);
      background-size: 24px 24px;"
    ></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 text-[--color-primary] px-3 py-1 ring-1 ring-blue-100 text-sm font-medium">
            HIPAA-Compliant Billing • U.S.-Based Team
          </div>
          <h1>We simplify medical billing so you can focus on patients.</h1>
          <p class="text-lg">
            End-to-end billing, coding, and revenue cycle management.
          </p>
          <div class="flex flex-wrap gap-3">
            <RouterLink
              to="/consultation"
              class="btn-ghost"
            >
              Get a Free Consultation
            </RouterLink>
            <RouterLink
              to="/demo"
              class="btn-ghost"
            >
              Request a Demo
            </RouterLink>
          </div>
          <div class="flex items-center gap-6 text-sm text-slate-600">
            <div class="flex items-center gap-2">
              <span class="i-badge">✓</span> 98% clean-claims
            </div>
            <div class="flex items-center gap-2">
              <span class="i-badge">✓</span> <span>Denial reduction</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            :src="heroImg"
            alt="Medical billing team working"
            class="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
          />
          <div
            class="absolute -bottom-6 -right-6 hidden md:block h-24 w-24 rounded-2xl bg-[--color-primary]/10"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center mb-10">Features</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="f in features"
          :key="f.title"
          class="card card-accent p-6 hover:shadow-md transition group"
        >
          <div class="h-10 w-10 rounded-xl bg-[--color-primary]/10 grid place-items-center mb-4 group-hover:scale-105 transition">
            <svg class="h-5 w-5 text-[--color-primary]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z"/>
            </svg>
          </div>
          <h3 class="mb-2">{{ f.title }}</h3>
          <p class="text-sm">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="section section-emerald">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="s in stats" :key="s.label" class="card p-6 text-center">
          <div class="text-3xl font-semibold text-[--color-primary]">{{ s.value }}</div>
          <div class="mt-1 text-sm text-slate-600">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Slider (simple) -->
  <section class="section bg-[--color-light]">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center mb-10">What our clients say</h2>
      <div class="overflow-x-auto no-scrollbar">
        <div class="flex gap-6 min-w-max">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="card p-6 w-80 shrink-0"
          >
            <p class="italic">“{{ t.quote }}”</p>
            <div class="mt-4 text-sm text-slate-600">— {{ t.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="section section-violet">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
        <div class="relative z-10 max-w-2xl space-y-3">
          <h2 class="text-white">Ready to accelerate your revenue cycle?</h2>
          <p class="text-white/90">Chat with a specialist and get a tailored plan for your practice.</p>
          <div class="flex gap-3">
            <RouterLink to="/contact" class="btn-primary">Talk to Sales</RouterLink>
            <RouterLink to="/pricing" class="btn-accent bg-black/20 ring-1 ring-white/20">View Pricing</RouterLink>
          </div>
        </div>
        <div class="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
      </div>
    </div>
  </section>

  <!-- FAQs -->
  <section class="section">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center mb-8">Frequently Asked Questions</h2>
      <Accordion :items="faqs" />
    </div>
  </section>
  <!-- Partner Logos -->
  <section class="section">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center mb-6">Trusted by leading insurers</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        <div v-for="(src, i) in logos" :key="i" class="flex items-center justify-center">
          <img
            :src="src"
            alt="Insurer logo"
            class="h-10 w-auto opacity-70 hover:opacity-100 transition"
            referrerpolicy="no-referrer"
            @error="$event.target && ($event.target.style.display = 'none')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

