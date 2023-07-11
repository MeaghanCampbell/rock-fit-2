<script setup>

import { ref } from 'vue'
import axios from 'axios';

const username = ref('')
const password = ref('')

const apiBaseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5001/api';

const api = axios.create({
    baseURL: apiBaseURL,
});

const handleLogin = () => {
    const formError = document.getElementById('form-error')
    formError.classList.add('hidden')
    api.post('/users/login', {
        username: username.value,
        password: password.value
    })
    .then(response => {
        if (response.status === 200) {
            const token = response.data.accessToken;
            localStorage.setItem('token', token);
            document.location.replace('/')
        } else {
            formError.classList.remove('hidden')
            formError.innerHTML = 'System error - please try again in a minute'
        }
    })
    .catch(error => {
        if (error.response.status === 400) {
            formError.classList.remove('hidden')
            formError.innerHTML = 'All fields are required'
        } else if (error.response.status === 401) {
            formError.classList.remove('hidden')
            formError.innerHTML = 'Please enter a valid username and password'
        }
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
                    <div class="flex flex-col items-start">
                        <label class="text-base font-semibold">Username:</label>
                        <input v-model="username" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none mt-2" placeholder="enter your username" type="text">
                    </div>
                    <div class="flex flex-col items-start mt-5">
                        <label class="text-base font-semibold">Password:</label>
                        <input v-model="password" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none mt-2" placeholder="enter your password" type="password">
                    </div>
                    <p id="form-error" class="text-red-500 text-sm mt-6 hidden"></p>
                    <button @click.prevent="handleLogin()" class="btn mt-6 transition rounded-lg text-black p-2 font-semibold" type="button">Login</button>
                </form>
            </div>
            <div>Not a Member? <a href="/signup" class="font-bold green">Sign Up!</a></div>
        </div>

    </section>

</template>


