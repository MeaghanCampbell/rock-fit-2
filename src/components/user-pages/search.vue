<script setup>

    import workoutPreview from "@/components/workout-preview.vue"
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import openWorkout from '../open-workout.vue'

    let searchedWorkoutObj = ref({});
    let showModal = ref(false)
    let searchedName = ref('')
    let username = ref('')
    let date = ref('')
    let category = ref('')
    let time = ref('')
    let level = ref('')
    let description = ref('')
    let errorMessage = ref(false)

    function openModal(workout) {
        date.value = workout.date
        category.value = workout.category
        time.value = workout.time
        level.value = workout.level
        description.value = workout.description
        username.value = workout.user_name
        showModal.value = !showModal.value
    }

    let searchUserWorkouts = function() {
        if(errorMessage) {
            errorMessage.value = false
        }
        axios
            .get('http://localhost:5001/api/workouts')
            .then(response => {
            const workoutArray = response.data;
            searchedWorkoutObj.value = workoutArray.filter(workout => workout.user_name === searchedName.value);
            if (searchedWorkoutObj.value.length === 0) {
                errorMessage.value = true
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

</script>

<template>

    <!-- Modal -->
    <div v-cloak v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="showModal = false" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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

    <section class="text-white max-w-md mx-auto px-4 py-8">
        <input v-model="searchedName" class="w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none" placeholder="Search a username" type="text">
        <button @click="searchUserWorkouts" class="btn transition rounded-lg text-black p-2 font-semibold mt-4 w-full" type="button">Search</button>

        <div class="space-y-6 mt-6">
            <!--components-->
            <button @click="openModal(workout)" class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in searchedWorkoutObj" :key="index">
                <workoutPreview 
                    :id="workout._id"
                    :user_name="workout.user_name"
                    :date="workout.date"
                    :category="workout.category"
                    :time="workout.time"
                    :level="workout.level"
                />
            </button>
            <p class="text-red-500 text-sm text-center" v-cloak v-if="errorMessage">Oops! It looks like there are no workouts for this user. Check the spelling or search another user.</p>
        </div>
    </section>

</template>