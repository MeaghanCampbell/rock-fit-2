<script setup>

    const props = defineProps(['user_name', 'date', 'category', 'time', 'level', 'id'])

</script>

<template>

    <div class="px-4 py-2 bg-white rounded-t-md">
        <div class="flex justify-between text-black">
            <p class="font-semibold">{{ props.user_name }}</p>
            <p class="italic">{{ props.date }}</p>
        </div>
    </div>
    <div class="px-4 py-6 rounded-b-lg workout-preview transition">
        <div class="flex flex-col sm:flex-row justify-center sm:space-x-5 font-semibold">
            <p>{{ props.category }}</p> <span class="hidden sm:block">|</span>
            <p class="font-light italic">{{ props.time }} min</p> <span class="hidden sm:block">|</span>
            <p>{{ props.level }}</p>
        </div>
    </div>

</template>