<script setup>

</script>

<template>

    <form @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
        <div class="px-4 py-6 rounded-b-lg text-white">
            <div class="text-center space-y-5">
                <div class="flex flex-col items-center">
                    <label for="location" class="block font-bold text-white leading-6">Category</label>
                    <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option selected>Bouldering</option>
                        <option>Route Climbing</option>
                        <option>Lifting</option>
                        <option>Hangboarding</option>
                    </select>
                </div>
                <div class="flex flex-col items-center">
                    <label for="location" class="block font-bold text-white leading-6">Time (in minutes)</label>
                    <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option selected>30</option>
                        <option>60</option>
                        <option>90</option>
                        <option>120+</option>
                    </select>
                </div>
                <div class="flex flex-col items-center">
                    <label for="location" class="block font-bold text-white leading-6">Level</label>
                    <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option selected>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div> 
                <p class="flex flex-col items-center pb-4">
                    <span class="font-bold">Description</span>
                    <textarea rows="5" cols="60" name="text" placeholder="Enter text" class="rounded-lg p-2 text-black" style="max-width:21em;"></textarea>
                </p>
            </div>
        </div>
        <button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
            Save
        </button>
    </form>

</template>