<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const open = ref(false);
const isScrolled = ref(false);
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 8;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header
    class="sticky top-0 z-50 glass transition-shadow"
    :class="{ 'shadow-md ring-1 ring-slate-100/60': isScrolled }"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center gap-2">
          <div
            class="h-9 w-9 rounded-2xl bg-white grid place-items-center text-[--color-primary] font-bold ring-1 ring-slate-200 transition-transform hover:-translate-y-0.5 hover:rotate-1"
          >
            MB
          </div>
          <span class="font-semibold gradient-text">MedBill</span>
        </RouterLink>
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a
              :href="href"
              @click="navigate"
              class="group relative px-3 py-2 rounded-xl transition flex items-center"
              :class="[
                isActive
                  ? 'text-slate-900 bg-slate-100 active'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              ]"
            >
              <span>{{ l.label }}</span>
              <span class="nav-underline"></span>
            </a>
          </RouterLink>
          <RouterLink
            to="/consultation"
            class="btn-ghost px-4 py-2"
            >Get a Free Consultation</RouterLink
          >
        </div>
        <button
          class="md:hidden p-2 rounded-xl ring-1 ring-slate-200"
          @click="open = !open"
          aria-label="Toggle Menu"
        >
          <span class="i-hamburger">☰</span>
        </button>
      </div>
    </nav>
    <transition name="fade">
      <div v-if="open" class="md:hidden glass">
        <div class="px-4 py-3 space-y-2">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a
              :href="href"
              @click="() => { navigate(); open = false }"
              class="block px-2 py-2 rounded-lg"
              :class="[
                isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
              ]"
            >
              {{ l.label }}
            </a>
          </RouterLink>
          <RouterLink
            to="/contact"
            class="btn-ghost w-full justify-center"
            @click="open = false"
            >Get a Free Consultation</RouterLink
          >
        </div>
      </div>
    </transition>
    <div class="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animated underline for navbar links */
.nav-underline {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 6px;
  height: 2px;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
  background: linear-gradient(90deg, #2563EB, #10B981);
}
a.group:hover .nav-underline,
a.active .nav-underline {
  transform: scaleX(1);
}
</style>

