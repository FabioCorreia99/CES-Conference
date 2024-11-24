<template>
    <div>
        <h2>Login Area</h2>
        <nav>
            <RouterLink :to="{ name: 'profileSettings' }">Profile Settings</RouterLink>
            <RouterLink :to="{ name: 'favouritesTalks' }">Favourites Talks</RouterLink>
            <RouterLink :to="{ name: 'personalAgenda' }">Personal Agenda</RouterLink>
        </nav>

        <router-view />
    </div>
</template>

<script>
export default {
    name: "LoginView",
};
</script>
