<script setup>

import { ref } from 'vue'
import axios from 'axios';

const email = ref('')
const username = ref('')
const password = ref('')

const handleSignup = () => {
    const formError = document.getElementById('form-error')
    formError.classList.add('hidden')
    axios.post('/api/users/register', {
        email: email.value,
        username: username.value,
        password: password.value
    })
    .then(response => {
        console.log(response)
        if (response.status === 201 || response.status === 200) {
            document.location.replace('/')
        } else {
            formError.classList.remove('hidden')
            formError.innerHTML = 'System error - please try again in a minute'
        }
    })
    .catch(error => {
        formError.classList.remove('hidden')
        formError.innerHTML = error.response.data.message
    })
}

</script>

<template>

    <section class="bg-black h-screen flex items-center justify-center background-shadow">

        <div class="text-center m-6 text-white space-y-8 w-screen max-w-md">
            <h1 class="text-5xl tracking-wider font-semibold">ROCK<span class="font-light italic">fit</span></h1>
            <p class="text-gray-200 tracking-wide">Track your training | Learn from others</p>
            <div>
                <form class="flex flex-col text-lg">
                    <input v-model="email" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none" placeholder="email" type="email">
                    <input v-model="username" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none mt-3" placeholder="username" type="text">
                    <input v-model="password" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none mt-3" placeholder="password" type="password">
                    <p id="form-error" class="text-red-500 text-sm mt-6 hidden"></p>
                    <button @click.prevent="handleSignup()" class="btn mt-6 transition rounded-lg text-black p-2 font-semibold" type="button">Sign Up</button>
                </form>
            </div>
            <div>Already a Member? <a href="/login" class="font-bold green">Log In!</a></div>
        </div>

    </section>

</template>