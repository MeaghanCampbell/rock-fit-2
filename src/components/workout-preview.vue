<script setup>

    const props = defineProps(['user_name', 'date', 'category', 'time', 'level'])

</script>

<template>

    <div class="px-4 py-2 bg-white rounded-t-md">
        <div class="flex justify-between text-black">
            <p class="font-semibold">{{ props.user_name }}</p>
            <p class="italic">{{ props.date }}</p>
        </div>
    </div>
    <div class="px-4 py-6 rounded-b-lg workout-preview transition">
        <div class="flex justify-center space-x-5 font-semibold">
            <p>{{ props.category }}</p> <span>|</span>
            <p class="font-light italic">{{ props.time }} minutes</p> <span>|</span>
            <p>{{ props.level }}</p>
        </div>
    </div>

</template>