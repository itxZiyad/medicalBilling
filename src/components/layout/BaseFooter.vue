<script setup>
const year = new Date().getFullYear();
const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];
</script>

<template>
  <footer class="bg-[--color-light] border-t border-slate-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div
              class="h-9 w-9 rounded-2xl bg-[--color-primary] grid place-items-center text-white font-bold"
            >
              MB
            </div>
            <span class="font-semibold gradient-text">MedBill</span>
          </div>
          <p class="text-sm">
            We simplify medical billing so you can focus on patients.
          </p>
          <div
            class="mt-2 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1 ring-1 ring-slate-200"
          >
            <span class="text-xs font-medium">HIPAA Compliant</span>
          </div>
        </div>
        <div>
          <h3 class="mb-3">Quick Links</h3>
          <div class="grid gap-2">
            <RouterLink
              v-for="l in quickLinks"
              :key="l.to"
              :to="l.to"
              class="text-slate-600 hover:text-slate-900 text-sm"
              >{{ l.label }}</RouterLink
            >
          </div>
        </div>
        <div>
          <h3 class="mb-3">Contact</h3>
          <ul class="space-y-2 text-sm text-slate-600">
            <li>Phone: (000) 123-4567</li>
            <li>Email: hello@medbill.com</li>
            <li>Address: 123 Health Ave, Suite 100</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-3">Follow</h3>
          <div class="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="Twitter" class="hover:text-slate-900">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.543 7.104c.014.2.014.4.014.6 0 6.132-4.668 13.2-13.2 13.2-2.628 0-5.072-.772-7.128-2.1.372.043.73.057 1.116.057a9.35 9.35 0 0 0 5.8-1.995 4.673 4.673 0 0 1-4.36-3.235c.286.043.572.072.872.072.415 0 .83-.057 1.216-.157A4.665 4.665 0 0 1 2.4 9.4v-.057c.628.357 1.358.572 2.128.6A4.656 4.656 0 0 1 2.987 5.9c0-.872.229-1.673.629-2.371a13.25 13.25 0 0 0 9.607 4.872c-.2-.872.086-1.73.772-2.414a3.28 3.28 0 0 1 4.757.143 6.574 6.574 0 0 0 2.1-.8 3.304 3.304 0 0 1-1.43 1.816 6.548 6.548 0 0 0 1.887-.514 7.072 7.072 0 0 1-1.782 1.672Z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:text-slate-900">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V24H.5zM8.5 8.5H12.3V10.4H12.36C12.88 9.42 14.14 8.38 16.06 8.38 20.16 8.38 21 10.98 21 15.02V24H17V15.96C17 14.02 16.96 11.6 14.54 11.6 12.08 11.6 11.72 13.72 11.72 15.82V24H8.5z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="hover:text-slate-900">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.67 9.19 8.47 9.98v-7.06H7.9v-2.92h2.43V9.41c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.58.75-1.58 1.52v1.83h2.69l-.43 2.92h-2.26v7.06c4.8-.79 8.47-4.96 8.47-9.98z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500">
        © {{ year }} MedBill. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

