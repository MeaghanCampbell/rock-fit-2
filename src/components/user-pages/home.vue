<script setup>

    import workoutPreview from "@/components/workout-preview.vue"
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import openWorkout from '../open-workout.vue'

    let workoutObj = ref({});
    let showModal = ref(false)

    function toggleModal() {
        showModal.value = !showModal.value
    }

    onMounted(() => {
    axios
        .get('http://localhost:5001/api/workouts')
        .then(response => {
            const workoutArray = response.data;
            const newObj = {};
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

    <!-- Modal -->
    <div v-cloak v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="toggleModal" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <openWorkout />
            </div>
        </div>
    </div>

    <section v-cloak class="text-white max-w-md mx-auto px-5 py-8">

        <button v-if="Object.keys(workoutObj).length === 0" class="w-full border border-white rounded-lg" disabled>Loading...</button>

        <button v-else @click="toggleModal" class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in workoutObj" :key="index">
            <workoutPreview 
                :user_name="workout.user_name"
                :date="workout.date"
                :category="workout.category"
                :time="workout.time"
                :level="workout.level"
            />
        </button>

    </section>

</template>