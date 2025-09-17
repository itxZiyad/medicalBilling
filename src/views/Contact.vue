<script setup>
import { reactive } from "vue";
const form = reactive({ name: "", email: "", phone: "", message: "", subject: "" });
const routeSubject = new URLSearchParams(location.search).get('subject') || "";
if (routeSubject === 'consultation') form.subject = 'Free Consultation Request';
if (routeSubject === 'demo') form.subject = 'Product Demo Request';
const submit = () => {
  alert(`Thanks, ${form.name || "there"}! We will get back to you shortly.`);
};
</script>

<template>
  <section class="section bg-gradient-to-b from-emerald-50 via-white to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Contact Us</h1>
      <p>Have questions? Get in touch and our team will reach out.</p>
    </div>
  </section>

  <section class="section">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8"
    >
      <form class="card p-6 space-y-4" @submit.prevent="submit">
        <div v-if="form.subject">
          <label class="block text-sm font-medium mb-1">Subject</label>
          <input
            v-model="form.subject"
            type="text"
            class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2 bg-slate-50"
            readonly
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2 focus:outline-none focus:ring-[--color-primary]"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2 focus:outline-none focus:ring-[--color-primary]"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Phone</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2 focus:outline-none focus:ring-[--color-primary]"
            placeholder="(000) 123-4567"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Message</label>
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2 focus:outline-none focus:ring-[--color-primary]"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <div class="flex gap-3">
          <button
            class="btn-white flex-1"
            type="submit"
          >
            Send Message
          </button>
          <RouterLink
            to="/pricing"
            class="btn-white flex-1"
          >
            See Plans
          </RouterLink>
        </div>
      </form>

      <div class="space-y-6">
        <div class="card p-6">
          <h3 class="mb-2">Contact Info</h3>
          <ul class="text-sm text-slate-600 space-y-2">
            <li>Phone: (000) 123-4567</li>
            <li>Email: hello@medbill.com</li>
            <li>Address: 123 Health Ave, Suite 100</li>
          </ul>
        </div>
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=12&size=800x400&key=AIzaSyDUMMY"
          alt="Map"
          class="aspect-video w-full rounded-2xl object-cover ring-1 ring-slate-200"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>

