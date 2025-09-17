<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', email: '', ehr: '', teamSize: '', goals: '' })
const submit = () => {
  alert(`Thanks ${form.name || 'there'}! We will reach out with a demo.`)
}
</script>

<template>
  <section class="section bg-gradient-to-b from-emerald-50 via-white to-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="mb-6">Request a Demo</h1>
      <p>See how our platform streamlines your billing workflows and reporting.</p>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <form class="card p-6 space-y-4" @submit.prevent="submit">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Full Name</label>
            <input v-model="form.name" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="John Smith" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input v-model="form.email" type="email" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="john@example.com" />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Current EHR</label>
            <input v-model="form.ehr" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="Epic, Cerner, Athena..." />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Team Size</label>
            <input v-model="form.teamSize" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="e.g., 25" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Goals</label>
          <textarea v-model="form.goals" rows="4" class="w-full rounded-2xl ring-1 ring-slate-200 px-3 py-2" placeholder="What do you want to see in the demo?" />
        </div>
        <button class="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 font-medium shadow-md ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition">Request Demo</button>
      </form>
    </div>
  </section>
</template>
