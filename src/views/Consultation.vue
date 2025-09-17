<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', email: '', practice: '', notes: '' })
const submit = () => {
  alert(`Thanks ${form.name || 'there'}! We will schedule a free consultation.`)
}
</script>

<template>
  <section class="section bg-gradient-to-b from-blue-50 via-white to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Free Consultation</h1>
      <p>Tell us about your practice and goals. We’ll tailor a free session for you.</p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <form class="card p-6 space-y-4" @submit.prevent="submit">
        <div>
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input v-model="form.name" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="Jane Doe" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input v-model="form.email" type="email" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="jane@example.com" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Practice / Organization</label>
          <input v-model="form.practice" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="Acme Clinic" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Notes</label>
          <textarea v-model="form.notes" rows="4" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="What would you like to discuss?" />
        </div>
        <button class="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 font-medium shadow-md ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition">Book Consultation</button>
      </form>
    </div>
  </section>
</template>
