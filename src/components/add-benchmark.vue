<script setup>

</script>

<template>

    <form @click.stop="" class="bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
        <div class="px-4 py-6 rounded-b-lg text-white">
            <div class="text-center space-y-5">
                <div class="flex flex-col items-center">
                    <label for="location" class="block font-bold text-white leading-6">Boulder Grade</label>
                    <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
                    <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
        <button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition">
            Save
        </button>
    </form>

</template>