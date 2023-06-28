<script setup>

    import { onMounted } from 'vue'
    import home from '@/components/user-pages/home.vue'
    import search from '@/components/user-pages/search.vue'
    import saved from '@/components/user-pages/saved.vue'
    import profile from '@/components/user-pages/profile.vue'

    const tabSelect = function(selectedTab) {
        let selectedTabId = '';
        if(selectedTab.id) {
            selectedTabId = selectedTab.id;
        } else {
            selectedTabId = selectedTab.target.value;
        }
        Object.keys(this.tabs).forEach((key) => {
            key === selectedTabId ? this.tabs[key].active = true : this.tabs[key].active = false;
        });
        window.location.hash = selectedTab.href;
    }

    const tabs = {
            homeTab: {
                id: 'homeTab',
                name: 'HOME',
                href: '#home',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/></svg>',
                active: true,
            },
            searchTab: {
                id: 'searchTab',
                name: 'SEARCH',
                href: '#search',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>',
                active: false,
            },
            savedTab: {
                id: 'savedTab',
                name: 'SAVED',
                href: '#saved',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"/></svg>',
                active: false,
            },
            profileTab: {
                id: 'profileTab',
                name: 'PROFILE',
                href: '#profile',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"/></svg>',
                active: false,
            }
        }


    onMounted(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            window.location.replace('/login')
        }
    })

</script>

<template>

    <main class="bg-black min-h-screen max-h-screen overflow-scroll background-shadow pb-28">

        <!-- Bottom Nav -->
        <section class="nav-gradient fixed bottom-0 w-full">
            <div class="text-white flex justify-center max-w-md mx-auto">
                <a v-for="tab in tabs" :id="tab.id" :key="tab.name" :href="tab.href" @click.prevent="tabSelect(tab)" v-html="tab.svg" :class="[tab.active ? 'shadow-inner light-green-bg' : '', 'py-6 px-8']"></a>
            </div>
        </section>

        <!-- Home Dashboard -->
        <div v-if="tabs.homeTab" v-cloak>
            <div v-if="tabs.homeTab.active">
                <home />
            </div>
        </div>
        
        <!-- Search Page -->
        <div v-if="tabs.searchTab" v-cloak>
            <div v-if="tabs.searchTab.active">
                <search />
            </div>
        </div>

        <!-- Saved Page -->
        <div v-if="tabs.savedTab" v-cloak>
            <div v-if="tabs.savedTab.active">
                <saved />
            </div>
        </div>

        <!-- Profile Page -->
        <div v-if="tabs.profileTab" v-cloak>
            <div v-if="tabs.profileTab.active">
                <profile />
            </div>
        </div>
        
    </main>
    
</template>

