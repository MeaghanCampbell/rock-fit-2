<script setup>

    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import addBenchmark from '../add-benchmark.vue'
    import workoutPreview from "@/components/workout-preview.vue"

    let userWorkoutObj = ref({});
    let showModal = ref(false)
    let showAddModal = ref(false)
    let showBenchmark = ref(false)
    let username = ref('')
    let date = ref('')
    let category = ref('')
    let time = ref('')
    let level = ref('')
    let description = ref('')
    let workoutId = ''



    function openModal(workout) {
        workoutId = workout._id
        date.value = workout.date
        category.value = workout.category
        time.value = workout.time
        level.value = workout.level
        description.value = workout.description
        showModal.value = true
    }

    function closeModal() {
        date.value = ''
        category.value = ''
        time.value = ''
        level.value = ''
        description.value = ''
        showModal.value = false
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
            username.value = response.data.currentUser.username
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
            showAddModal.value = false
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    const deleteWorkout = function() {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:5001/api/workouts/${workoutId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            showModal.value = false
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    const logOut = function() {
        localStorage.removeItem('token');
        window.location.replace('/login');
    }

</script>

<template>

    <!-- Open Workout Modal -->
    <div v-cloak v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div @click="closeModal" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
                    <div class="px-4 py-2 bg-white rounded-t-md">
                        <div class="flex justify-between text-black">
                            <p class="font-semibold">{{ username }}</p>
                            <p class="italic">{{ date }}</p>
                        </div>
                    </div>
                    <div class="px-4 py-6 rounded-b-lg text-white">
                        <div class="text-center space-y-5">
                            <p>
                                <span class="font-bold">Category: </span>
                                <span>{{ category }}</span>
                            </p>
                            <p><span class="font-bold">Time: </span><span>{{ time }}</span></p>
                            <p><span class="font-bold">Difficulty: </span><span>{{ level }}</span></p>
                            <p class="flex flex-col items-center">
                                <span class="font-bold">Description</span>
                                <span>{{ description }}</span>
                            </p>
                        </div>
                    </div>
                    <button @click="deleteWorkout" class="bg-red-500 w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
                        Delete Workout
                    </button>
                </div>
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

    <div class="max-w-md mx-auto flex items-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px" class="mr-1" fill="#FFFFFF">    <path d="M 10.166016 6.9335938 C 9.874125 6.9056562 9.5785313 7.0081563 9.3632812 7.2226562 L 2.2929688 14.292969 C 1.9019687 14.683969 1.9019687 15.316031 2.2929688 15.707031 L 9.3632812 22.777344 C 9.5542813 22.968344 9.8103125 23.070312 10.070312 23.070312 C 10.199312 23.070312 10.329125 23.047094 10.453125 22.996094 C 10.827125 22.842094 11.070312 22.476266 11.070312 22.072266 L 11.070312 18 L 26.070312 18 C 27.175313 18 28.070312 17.105 28.070312 16 L 28.070312 14 C 28.070312 12.895 27.175313 12 26.070312 12 L 11.070312 12 L 11.070312 7.9296875 C 11.070312 7.5256875 10.827125 7.1598594 10.453125 7.0058594 C 10.359625 6.9668594 10.263312 6.9429063 10.166016 6.9335938 z"/></svg>
        <button @click="logOut" class="text-white font-bold">Log Out</button>
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
            <button v-else @click="openModal(workout)" class="w-full border border-white rounded-lg mt-4" v-for="(workout, index) in userWorkoutObj" :key="index">
                <workoutPreview 
                    :id="workout._id"
                    :user_name="username"
                    :date="workout.date"
                    :category="workout.category"
                    :time="workout.time"
                    :level="workout.level"
                />
            </button>

        </div>
    </section>

</template>