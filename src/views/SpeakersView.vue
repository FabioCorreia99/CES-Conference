<template>
    <div>
        <h2>Speakers</h2>
        <nav>
            <RouterLink :to="{ name: 'panelDiscussion' }">Panel Discussion</RouterLink>
        </nav>

        <router-view />
    </div>
</template>

<script>
export default {
    name: "SpeakersView",
};
</script>
