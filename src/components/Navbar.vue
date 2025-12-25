<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from "@/assets/logo.png"

const route = useRoute();

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Products" },
    { path: "/contact", title: "Contact" },
];
</script>

<template>
    <nav class="bg-white border-b border-neutral-200 py-3 px-2">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <RouterLink to="/">
                <img :src="Logo" alt="logo" class="w-32">
            </RouterLink>
            <div class="hidden lg:flex items-center gap-6">
                <RouterLink :to="nav.path" v-for="nav in navLinks" :key="nav.title"
                    :class="route.path === nav.path ? 'text-green-700 font-medium' : 'text-neutral-500 hover:text-neutral-600'">
                    {{ nav.title }}
                </RouterLink>
            </div>
        </div>
    </nav>
</template>