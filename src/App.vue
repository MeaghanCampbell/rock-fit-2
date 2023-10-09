<script setup>

    import { useRoute } from "vue-router";
    const route = useRoute();

</script>

<template>

    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <component :is="Component"></component>
        </div>
    </router-view>

</template>
