<script setup>

</script>

<template>

    <div @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
        <div class="px-4 py-2 bg-white rounded-t-md">
            <div class="flex justify-between text-black">
                <p class="font-semibold">Username</p>
                <p class="italic">Date</p>
            </div>
        </div>
        <div class="px-4 py-6 rounded-b-lg text-white">
            <div class="text-center space-y-5">
                <p>
                    <span class="font-bold">Category: </span>
                    <span>category</span>
                </p>
                <p><span class="font-bold">Time: </span><span>time</span></p>
                <p><span class="font-bold">Difficulty: </span><span>difficulty</span></p>
                <p class="flex flex-col items-center">
                    <span class="font-bold">Description</span>
                    <span>description</span>
                </p>
            </div>
        </div>
        <button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
            Save Users Session
        </button>
    </div>

</template>