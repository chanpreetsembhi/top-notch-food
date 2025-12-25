<script setup lang="ts">
import FooterLogo from "@/assets/footer-logo.png"
import { RiFacebookBoxLine, RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine, RiLinkedinLine, RiMailLine } from "@remixicon/vue";
const date = new Date
const year = date.getFullYear();

</script>
<template>
    <footer class="bg-white border-t border-gray-200 text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex font-medium items-center md:justify-start justify-center text-gray-900 gap-2">
                <img :src="FooterLogo" alt="logo" class="w-20" />
            </a>
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                &copy;
                {{ year }} TopNotch Foods LLP
            </p>
            <span class="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/" target="_blank" class="text-gray-500 hover:text-green-700">
                    <RiFacebookCircleLine class="size-5" />
                </a>
                <a href="https://www.gmail.com/" target="_blank" class="text-gray-500 hover:text-green-700">
                    <RiMailLine class="size-5" />
                </a>
                <a href="http://instagram.com/" target="_blank" class="text-gray-500 hover:text-green-700">
                    <RiInstagramLine class="size-5" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" class="text-gray-500 hover:text-green-700">
                    <RiLinkedinBoxLine class="size-5" />
                </a>
            </span>
        </div>
    </footer>
</template>