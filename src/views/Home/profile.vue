<script setup>

    import { onMounted } from 'vue';
    import workoutPreview from "@/components/workout-preview.vue"
    import Nav from "@/components/nav.vue"
    import { checkLogin } from "@/check-login.js"

    import {
        loadData,
        deleteWorkout,
        addWorkout,
        updateBenchmark,
        addBenchmark,
        toggleBenchmark,
        logOut,
        openModal,
        closeModal,
        toggleAddModal,
        userWorkoutObj,
        benchmark,
        boulder_grade,
        route_grade,
        showModal,
        showAddModal,
        showBenchmarkModal,
        workouts,
        username,
        date,
        category,
        time,
        level,
        description
    } from '@/profile.js'

    onMounted(() => {

        checkLogin()
        loadData()

    });

</script>

<template>

    <main class="bg-black min-h-screen max-h-screen overflow-scroll background-shadow pb-28">

        <Nav />

        <Transition name="modal">
            <!-- Open Workout Modal -->
            <div v-cloak v-if="showModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div @click="closeModal" class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
        </Transition>

        <Transition name="modal">
            <!-- Add Workout Modal -->
            <div v-cloak v-if="showAddModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div @click="toggleAddModal" class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                                        <label for="location" class="block font-bold text-white leading-6">Time (in minutes)</label>
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
        </Transition>

        <Transition name="modal">
            <!-- Add Benchmark Modal -->
            <div v-cloak v-if="showBenchmarkModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div @click="toggleBenchmark" class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <form @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
                            <div class="px-4 py-6 rounded-b-lg text-white">
                                <div class="text-center space-y-5">
                                    <div class="flex flex-col items-center">
                                        <label for="location" class="block font-bold text-white leading-6">Boulder Grade</label>
                                        <select v-model="boulder_grade" id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option selected>v1</option>
                                            <option>v2</option>
                                            <option>v3</option>
                                            <option>v4</option>
                                            <option>v5</option>
                                            <option>v6</option>
                                            <option>v7</option>
                                            <option>v8</option>
                                            <option>v9</option>
                                            <option>v10</option>
                                            <option>v11</option>
                                            <option>v12</option>
                                            <option>v13</option>
                                            <option>v14</option>
                                            <option>v15</option>
                                        </select>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <label for="location" class="block font-bold text-white leading-6">Route Grade</label>
                                        <select v-model="route_grade" id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option selected>5.7</option>
                                            <option>5.8</option>
                                            <option>5.9</option>
                                            <option>5.10a</option>
                                            <option>5.10b</option>
                                            <option>5.10c</option>
                                            <option>5.10d</option>
                                            <option>5.11a</option>
                                            <option>5.11b</option>
                                            <option>5.11c</option>
                                            <option>5.11d</option>
                                            <option>5.12a</option>
                                            <option>5.12b</option>
                                            <option>5.12c</option>
                                            <option>5.12d</option>
                                            <option>5.13a</option>
                                            <option>5.13b</option>
                                            <option>5.13c</option>
                                            <option>5.13d</option>
                                            <option>5.14a</option>
                                            <option>5.14b</option>
                                            <option>5.14c</option>
                                            <option>5.14d</option>
                                            <option>5.15a</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button @click.prevent="updateBenchmark" v-if="benchmark" class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
                                Update
                            </button>
                            <button @click.prevent="addBenchmark" v-else class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Transition>

        <div class="max-w-md mx-auto flex items-center mt-4 px-4">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px" class="mr-1" fill="#FFFFFF">    <path d="M 10.166016 6.9335938 C 9.874125 6.9056562 9.5785313 7.0081563 9.3632812 7.2226562 L 2.2929688 14.292969 C 1.9019687 14.683969 1.9019687 15.316031 2.2929688 15.707031 L 9.3632812 22.777344 C 9.5542813 22.968344 9.8103125 23.070312 10.070312 23.070312 C 10.199312 23.070312 10.329125 23.047094 10.453125 22.996094 C 10.827125 22.842094 11.070312 22.476266 11.070312 22.072266 L 11.070312 18 L 26.070312 18 C 27.175313 18 28.070312 17.105 28.070312 16 L 28.070312 14 C 28.070312 12.895 27.175313 12 26.070312 12 L 11.070312 12 L 11.070312 7.9296875 C 11.070312 7.5256875 10.827125 7.1598594 10.453125 7.0058594 C 10.359625 6.9668594 10.263312 6.9429063 10.166016 6.9335938 z"/></svg>
            <button @click="logOut" class="text-white font-bold">Log Out</button>
        </div>

        <section class="text-white max-w-md mx-auto px-4 py-8 space-y-8">
            <div class="flex space-x-2">
                <button @click="toggleAddModal" class="btn transition rounded-lg text-black p-2 font-semibold w-1/2" type="button">Add Workout</button>
                <button v-if="benchmark" @click="toggleBenchmark" class="btn transition rounded-lg text-black p-2 font-semibold w-1/2" type="button">Update Benchmark</button>
                <button v-else @click="toggleBenchmark" class="btn transition rounded-lg text-black p-2 font-semibold w-1/2" type="button">Add Benchmark</button>
            </div>
            <div v-if="benchmark">
                <h2 class="text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6">Your Benchmarks</h2>
                <div class="flex items-center justify-center space-x-10">
                    <div class="benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold">{{ boulder_grade }}</div>
                    <div class="benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold">{{ route_grade }}</div>
                </div>
            </div>
            <div v-if="workouts">
                <h2 class="text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6">Your Workouts</h2>
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

    </main>

</template>