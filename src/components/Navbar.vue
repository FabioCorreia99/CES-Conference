<template>
  <nav id="navbar-large">
    <RouterLink
      :to="{ name: 'home' }"
      id="LogoLink"
      :class="{ active: isCurrentRoute('home') }"
    >
      <img src="@/assets/media/Logo.svg" alt="CES logo" class="nav-logo" />
    </RouterLink>
    <div class="links">
      <RouterLink
        :to="{ name: 'schedule' }"
        :class="{ active: isCurrentRoute('schedule') }"
        >Schedule</RouterLink
      >
      <RouterLink
        :to="{ name: 'speakers' }"
        :class="{ active: isCurrentRoute('speakers') }"
        >Speakers</RouterLink
      >
      <RouterLink
        :to="{ name: 'forum' }"
        :class="{ active: isCurrentRoute('forum') }"
        >Forum</RouterLink
      >
      <RouterLink
        :to="{ name: 'partners' }"
        :class="{ active: isCurrentRoute('partners') }"
        >Partners</RouterLink
      >
      <RouterLink
        :to="{ name: 'about' }"
        :class="{ active: isCurrentRoute('about') }"
        >About</RouterLink
      >
      <div class="profile" v-if="user">
        
        <v-avatar id="profileAvatar" size="x-small" :image="avatar" @click="goToProfile()" tabindex="7" aria-label="User Profile" role="button"></v-avatar>

        <ArrowRightStartOnRectangleIcon @click="logout()" style="display: block;width: 25px; height: 25px;cursor: pointer;" tabindex="8" aria-label="Log out" role="button" />

      </div>
      <!-- Se ainda não tiver feito login -->
      <RouterLink
        v-else
        :to="{ name: 'login' }"
        id="LoginLink"
        :class="{ active: isCurrentRoute('login') }"
        >Register</RouterLink
      >
    </div>

  </nav>

  <nav id="navbar-small">
    <RouterLink
      :to="{ name: 'home' }"
      id="LogoLink"
      :class="{ active: isCurrentRoute('home') }"
    >
      <img src="@/assets/media/Logo.svg" alt="CES logo" class="nav-logo" />
    </RouterLink>

    <div id="menu" @click="toggleNAV()">
      <Bars3Icon :style="{color: hoverColor}" />
    </div>

  </nav>

  <div id="overlay" v-show="isNavOpen" @click.self="toggleNAV()">
        <div class="overlay-links">
          <RouterLink
            :to="{ name: 'schedule' }"
            :class="{ active: isCurrentRoute('schedule') }"
            >Schedule</RouterLink
          >
          <RouterLink
            :to="{ name: 'speakers' }"
            :class="{ active: isCurrentRoute('speakers') }"
            >Speakers</RouterLink
          >
          <RouterLink
            :to="{ name: 'forum' }"
            :class="{ active: isCurrentRoute('forum') }"
            >Forum</RouterLink
          >
          <RouterLink
            :to="{ name: 'partners' }"
            :class="{ active: isCurrentRoute('partners') }"
            >Partners</RouterLink
          >
          <RouterLink
            :to="{ name: 'about' }"
            :class="{ active: isCurrentRoute('about') }"
            >About</RouterLink
          >
          <div class="profile" v-if="user">
            
            <v-avatar id="profileAvatar" size="x-small" :image="avatar" @click="goToProfile()" tabindex="7" aria-label="User Profile" role="button"></v-avatar>

            <ArrowRightStartOnRectangleIcon @click="logout()" style="display: block;width: 25px; height: 25px;cursor: pointer;" tabindex="8" aria-label="Log out" role="button" />

          </div>

          <!-- Se ainda não tiver feito login -->
          <RouterLink
            v-else
            :to="{ name: 'login' }"
            id="LoginLink"
            :class="{ active: isCurrentRoute('login') }"
            >Register</RouterLink
          >

      </div>
    </div>

</template>

<script>
import { useRoute } from "vue-router";
import { Bars3Icon, ArrowRightStartOnRectangleIcon } from "@heroicons/vue/24/solid";
import { useUsersStore } from "@/stores/users";
import { computed } from "vue";
import { gsap } from "gsap";

export default {
  components: {
    Bars3Icon,
    ArrowRightStartOnRectangleIcon,
  },
  data() {
    return {
      hoverColor: "#ffff",
      avatar: this.user ? new URL(this.user.picture, import.meta.url).href : "",
      isNavOpen: false,
    };
  },
  setup() {
    const route = useRoute();
    const isCurrentRoute = (name) => route.name === name;

    const userStore = useUsersStore();
    const user = computed(() => userStore.getUserById(userStore.currentUserId));

    return {
      isCurrentRoute,
      user,
      isAdmin: userStore.isAdmin, // Adiciona o getter de admin
    };
  },

  methods: {
    goToProfile() {
      if (this.isAdmin) {
        this.$router.push({
          name: "adminProfile",
          params: { adminId: this.user.id },
        });
      } else {
        this.$router.push({
          name: "profileSettings",
          params: { userId: this.user.id },
        });
      }
    },
    logout() {
      const userStore = useUsersStore();
      userStore.logout();
    },
    toggleNAV() {
      const overlay = document.querySelector("#overlay");

      if (!this.isNavOpen) {
        this.isNavOpen = true;
        // Slide up animation
        gsap.fromTo(
          overlay,
          { y: "100%", opacity: 0 }, // Start at the bottom
          { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" } // Slide into view
        );
      } else {
        // Slide down animation
        gsap.to(overlay, {
          y: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            this.isNavOpen = false; // Close after animation completes
          },
        });
      }
    }
  },
};
</script>

<style scoped>
#navbar-large {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: fit-content;
  width: fit-content;
  padding: 8px 16px 8px 16px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-radius: 20px;
  z-index: 9999;
}

.nav-logo {
  display: flex;
  height: 30px;
  width: 121px;
  align-self: center;
}

#menu {
  display: block;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 30px;
  cursor: pointer;
}

#LogoLink {
  width: 137px;
}

#LoginLink {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: fit-content;
  height: 32px;
  padding: 8px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: fit-content;
  height: 32px;
  padding: 8px;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#profileAvatar {
  cursor: pointer;
}

.links {
  display: flex;
  gap: 16px;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  text-align: center;
  position: relative;
}

a::after {
  content: "_";
  opacity: 0;
  transition: opacity 0.25 ease;
}

a:hover::after,
a.active::after {
  animation: pulse 1s infinite;
}

.nav-logo {
  height: 30px;
  width: 121px;
}

.links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
}

.menu-button {
  display: none;
  cursor: pointer;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.links RouterLink {
  display: inline-block;
  width: 97px;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  #navbar-large {
    display: none;
  }
  #navbar-small {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: fit-content;
    width: fit-content;
    padding: 8px 16px 8px 16px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(100px);
    border-radius: 20px;
    z-index: 9999;
  }
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    transform: translateY(100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .overlay-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem; /* Spacing between links */
  }

}

</style>
