<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios';

let workoutObj = {}

onMounted(() => {
    axios.get('http://localhost:5001/api/workouts')
    .then(response => {
        let workoutArray = response.data
        for (let i = 0; i < workoutArray.length; i++) {
            let workoutObject = workoutArray[i];
            workoutObj['workoutObject' + i] = workoutObject;
        }
        // render this data on the actual component with a loop
        console.log(workoutObj)
    })
    .catch(error => {
        console.log(error)
    })
})

</script>

<template>

    <button class="w-full border border-white rounded-lg" v-for="(str, i) in workoutObj" :key="i">
        <div class="px-4 py-2 bg-white rounded-t-lg">
            <div class="flex justify-between text-black">
                <p class="font-semibold"></p>
                <p class="italic">Date</p>
            </div>
        </div>
        <div class="px-4 py-6 rounded-b-lg workout-preview transition">
            <div class="flex justify-center space-x-5 font-semibold">
                <p>Workout Type</p>
                <p class="font-light italic">Time</p>
                <p>Level</p>
            </div>
        </div>
    </button>

</template>