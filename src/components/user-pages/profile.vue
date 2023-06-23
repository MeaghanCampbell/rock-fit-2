<script setup>

    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import openUserWorkout from '../open-workout-profile.vue'
    import addBenchmark from '../add-benchmark.vue'
    import workoutPreview from "@/components/workout-preview.vue"

    let userWorkoutObj = ref({});
    let showOpenModal = ref(false)
    let showAddModal = ref(false)
    let showBenchmark = ref(false)
    const date = ref('')
    const category = ref('')
    const time = ref('')
    const level = ref('')
    const description = ref('')



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
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5001/api/users/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const userWorkoutArray = response.data.workouts;
            const newObj = {};
            for (let i = 0; i < userWorkoutArray.length; i++) {
                const userWorkoutObject = userWorkoutArray[i];
                newObj['userWorkoutObject' + i] = userWorkoutObject;
            }
            userWorkoutObj.value = newObj;
        })
        .catch(error => {
            console.log(error);
        });
    });

    function addWorkout() {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const requestBody = {
            date: date._rawValue,
            category: category._rawValue,
            time: parseInt(time._rawValue),
            level: level._rawValue,
            description: description._rawValue
        }
        axios.post('http://localhost:5001/api/workouts', requestBody, config)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
    }

    // function deleteWorkout() {
    //     const token = localStorage.getItem('token');

    // }

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
                <form @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
                    <div class="px-4 py-6 rounded-b-lg text-white">
                        <div class="text-center space-y-5">
                            <div class="flex flex-col items-center text-black">
                                <label for="location" class="block font-bold text-white leading-6">Date</label>
                                <input class="w-full rounded-md px-2 py-1" type="text" v-model="date"/>
                            </div>
                            <div class="flex flex-col items-center text-black">
                                <label for="location" class="block font-bold text-white leading-6">Category</label>
                                <input class="w-full rounded-md px-2 py-1" type="text" v-model="category"/>
                            </div>
                            <div class="flex flex-col items-center text-black">
                                <label for="location" class="block font-bold text-white leading-6">Time</label>
                                <input class="w-full rounded-md px-2 py-1" type="text" v-model="time"/>
                            </div>
                            <div class="flex flex-col items-center text-black">
                                <label for="location" class="block font-bold text-white leading-6">Level</label>
                                <input class="w-full rounded-md px-2 py-1" type="text" v-model="level"/>
                            </div>
                            <p class="flex flex-col items-center pb-4">
                                <span class="font-bold">Description</span>
                                <textarea v-model="description" rows="5" cols="60" name="text" placeholder="Enter text" class="rounded-lg p-2 text-black" style="max-width:21em;"></textarea>
                            </p>
                        </div>
                    </div>
                    <button @click.prevent="addWorkout" class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
                        Save
                    </button>
                </form>
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
            <button v-if="Object.keys(userWorkoutObj).length === 0" class="w-full border border-white rounded-lg" disabled>Loading...</button>

            <!--components-->
            <button v-else @click="toggleOpenModal" class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in userWorkoutObj" :key="index">
                <workoutPreview 
                    :user_name="workout.user_name"
                    :date="workout.date"
                    :category="workout.category"
                    :time="workout.time"
                    :level="workout.level"
                />
            </button>

        </div>
    </section>

</template>