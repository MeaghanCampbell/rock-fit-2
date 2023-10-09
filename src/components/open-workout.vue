<script setup>

    import { ref } from 'vue'

    const props = defineProps(['user_name', 'date', 'category', 'time', 'level', 'description', 'id'])

    let errorMsg = ref(false)

    let saveWorkout = function() {
        errorMsg.value = true
        setTimeout(function() {
            errorMsg.value = false
        }, 5000);
    }


</script>

<template>

    <div @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
        <div class="px-4 py-2 bg-white rounded-t-md">
            <div class="flex justify-between text-black">
                <p class="font-semibold">{{ props.user_name }}</p>
                <p class="italic">{{ props.date }}</p>
            </div>
        </div>
        <div class="px-4 py-6 rounded-b-lg text-white">
            <div class="text-center space-y-5">
                <p>
                    <span class="font-bold">Category: </span>
                    <span>{{ props.category }}</span>
                </p>
                <p><span class="font-bold">Time: </span><span>{{ props.time }}</span></p>
                <p><span class="font-bold">Difficulty: </span><span>{{ props.level }}</span></p>
                <p class="flex flex-col items-center">
                    <span class="font-bold">Description</span>
                    <span>{{ props.description }}</span>
                </p>
            </div>
            <Transition name="modal">
                <p v-if="errorMsg" class="green text-sm mt-6 text-center"><strong>Save functionality is still in production.</strong> <br /><em>Check back later for live feature.</em></p>
            </Transition>
        </div>
        <button @click.prevent="saveWorkout" class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
            Save {{ props.user_name }}'s Workout
        </button>
    </div>

</template>