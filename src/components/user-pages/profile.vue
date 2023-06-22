<script setup>

    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import openUserWorkout from '../open-workout-profile.vue'
    import addWorkout from '../add-workout.vue'
    import addBenchmark from '../add-benchmark.vue'

    let userWorkoutObj = ref({});
    let showOpenModal = ref(false)
    let showAddModal = ref(false)
    let showBenchmark = ref(false)

    function toggleOpenModal() {
        showOpenModal.value = !showOpenModal.value
    }

    function toggleAddModal() {
        showAddModal.value = !showAddModal.value
    }

    function toggleBenchmark() {
        showBenchmark.value = !showBenchmark.value
    }

    onMounted(() => {
    axios
        .get('http://localhost:5001/api/users/current')
        .then(response => {
            console.log(response)
            // const userWorkoutArray = response.data;
            // const newObj = {};
            // for (let i = 0; i < userWorkoutArray.length; i++) {
            //     const userWorkoutObject = userWorkoutArray[i];
            //     newObj['userWorkoutObject' + i] = userWorkoutObject;
            // }
            // userWorkoutObj.value = newObj;
        })
        .catch(error => {
            console.log(error);
        });
    });

</script>

<template>

    <!-- Open Workout Modal -->
    <div v-cloak v-if="showOpenModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="toggleOpenModal" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <openUserWorkout />
            </div>
        </div>
    </div>

    <!-- Add Workout Modal -->
    <div v-cloak v-if="showAddModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="toggleAddModal" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <addWorkout />
            </div>
        </div>
    </div>

    <!-- Add Benchmark Modal -->
    <div v-cloak v-if="showBenchmark" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="toggleBenchmark" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <addBenchmark />
            </div>
        </div>
    </div>

    <section class="text-white max-w-md mx-auto px-4 py-8 space-y-8">
        <div class="flex space-x-2">
            <button @click="toggleAddModal" class="btn transition rounded-lg text-black p-2 font-semibold w-1/2" type="button">Add Workout</button>
            <button @click="toggleBenchmark" class="btn transition rounded-lg text-black p-2 font-semibold w-1/2" type="button">Add Benchmark</button>
        </div>
        <div>
            <h2 class="text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6">Your Benchmarks</h2>
            <div class="flex items-center justify-center space-x-10">
                <div class="benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold">v4</div>
                <div class="benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold">5.12a</div>
            </div>
        </div>
        <div>
            <h2 class="text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6">Your Sessions</h2>
            
            <!--components loading-->
            <!-- <button v-if="Object.keys(workoutObj).length === 0" class="w-full border border-white rounded-lg" disabled>Loading...</button> -->

            <!--components-->
            <!-- <button v-else class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in workoutObj" :key="index">
                <workoutPreview 
                    :user_name="workout.user_name"
                    :date="workout.date"
                    :category="workout.category"
                    :time="workout.time"
                    :level="workout.level"
                />
            </button> -->

        </div>
    </section>

</template>