<script setup>

import { onMounted } from "vue";
import Nav from "@/components/nav.vue"
import { checkLogin } from "@/check-login.js"

onMounted(() => {
    checkLogin()
})

</script>

<template>

    <main class="bg-black min-h-screen max-h-screen overflow-scroll background-shadow pb-28">

        <Nav />

        <section class="text-white max-w-md mx-auto px-4 py-8">
            <div class="space-y-6">
                This component is still in production. It will allow users to view all of the workouts from other users on the app that they have saved so they can reference them in the future. 
            </div>
        </section>

    </main>

</template>