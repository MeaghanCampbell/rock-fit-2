<script setup>

    import workoutPreview from "@/components/workout-preview.vue"
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import openWorkout from '@/components/open-workout.vue'
    import Nav from "@/components/nav.vue"
    import { checkLogin } from "@/check-login.js"
    import { 
        openModal, 
        showModal, 
        username, 
        date, 
        category, 
        time, 
        level, 
        description } from '@/workout-modal.js'

    let workoutObj = ref({});

    const apiBaseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5001/api';

    const api = axios.create({
        baseURL: apiBaseURL,
    });

    onMounted(() => {

        checkLogin()

        api
        .get('/workouts')
        .then(response => {
            const workoutArray = response.data;
            const newObj = {};

            workoutArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            for (let i = 0; i < workoutArray.length; i++) {
                const workoutObject = workoutArray[i];
                newObj['workoutObject' + i] = workoutObject;
            }

            workoutObj.value = newObj;
        })
        .catch(error => {
            console.log(error);
        });

    });
        

</script>

<template>

    <main class="bg-black min-h-screen max-h-screen overflow-scroll background-shadow pb-28">

        <Nav />

        <!-- Modal -->
        <div v-cloak v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div @click="showModal = false" class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <openWorkout
                        :user_name="username"
                        :date="date"
                        :category="category"
                        :time="time"
                        :level="level"
                        :description="description"
                    />
                </div>
            </div>
        </div>

        <!-- All Workouts -->
        <section v-cloak class="text-white max-w-md mx-auto px-5 py-8">
            <button v-if="Object.keys(workoutObj).length === 0" class="w-full border border-white rounded-lg" disabled>Loading...</button>
            <button v-else @click="openModal(workout)" class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in workoutObj" :key="index">
                <workoutPreview 
                    :user_name="workout.user_name"
                    :date="workout.date"
                    :category="workout.category"
                    :time="workout.time"
                    :level="workout.level"
                />
            </button>
        </section>

    </main>

</template>