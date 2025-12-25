<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <main class="flex flex-col h-svh">
    <Navbar />
    <div class="h-full py-8">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>