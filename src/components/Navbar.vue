<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from '@/assets/logo.png'
import { RiCloseLine, RiMenuLine } from '@remixicon/vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue'

const route = useRoute()

const isOpen = ref(false)

const navLinks = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/products', title: 'Products' },
  { path: '/contact', title: 'Contact' },
]
</script>

<template>
  <nav class="bg-white border-b border-neutral-200 py-3 px-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <RouterLink to="/">
        <img :src="Logo" alt="logo" class="w-32" />
      </RouterLink>
      <div class="hidden lg:flex items-center gap-6">
        <RouterLink
          :to="nav.path"
          v-for="nav in navLinks"
          :key="nav.title"
          :class="
            route.path === nav.path
              ? 'text-green-700 font-medium'
              : 'text-neutral-500 hover:text-neutral-600'
          "
        >
          {{ nav.title }}
        </RouterLink>
      </div>
      <button @click="isOpen = true" class="lg:hidden cursor-pointer">
        <RiMenuLine class="size-6" />
      </button>
    </div>
  </nav>
  <!-- Mobile Nav -->
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-10" @close="isOpen = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to=""
        leave="ease-in-out duration-500"
        leave-from=""
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 sm:pr-16">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to=""
                  leave="ease-in-out duration-500"
                  leave-from=""
                  leave-to="opacity-0"
                >
                  <div class="absolute" />
                </TransitionChild>
                <div class="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="flex items-center justify-between">
                      <img :src="Logo" alt="logo" class="w-30" />
                      <button
                        type="button"
                        class="text-neutral-500 cursor-pointer"
                        @click="isOpen = false"
                      >
                        <RiCloseLine class="size-6" />
                      </button>
                    </DialogTitle>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <!-- Your content -->
                    <div className="inline-flex flex-col space-y-3 *:transition-all *:duration-100">
                      <RouterLink
                        :to="nav.path"
                        v-for="nav in navLinks"
                        :key="nav.title"
                        @click="isOpen = false"
                        :class="
                          route.path === nav.path
                            ? 'text-green-700 font-medium'
                            : 'text-neutral-500 hover:text-neutral-600'
                        "
                      >
                        {{ nav.title }}
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
