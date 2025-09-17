import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Services = () => import('../views/Services.vue')
const Industries = () => import('../views/Industries.vue')
const Pricing = () => import('../views/Pricing.vue')
const Blog = () => import('../views/Blog.vue')
const Faqs = () => import('../views/Faqs.vue')
const Contact = () => import('../views/Contact.vue')
const Consultation = () => import('../views/Consultation.vue')
const Demo = () => import('../views/Demo.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/services', name: 'services', component: Services },
        { path: '/industries', name: 'industries', component: Industries },
        { path: '/pricing', name: 'pricing', component: Pricing },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/faqs', name: 'faqs', component: Faqs },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/consultation', name: 'consultation', component: Consultation },
        { path: '/demo', name: 'demo', component: Demo },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router



