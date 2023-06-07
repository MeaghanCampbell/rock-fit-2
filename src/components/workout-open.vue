<template>

    <button class="w-full border border-white rounded-lg">
        <div class="px-4 py-2 bg-white rounded-t-lg">
            <div class="flex justify-between text-black">
                <p class="font-semibold">Username</p>
                <p class="italic">Date</p>
            </div>
        </div>
        <div class="px-4 py-6 rounded-b-lg transition">
            <div class="text-center space-y-5">
                <p><span class="font-bold">Category: </span><span>category</span></p>
                <p><span class="font-bold">Time: </span><span>time</span></p>
                <p><span class="font-bold">Difficulty: </span><span>difficulty</span></p>
                <p><span class="font-bold">Description: </span><span>description</span></p>
            </div>
        </div>
        <!--different buttons depending on state-->
        <button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
            button text
        </button>
    </button>

</template>