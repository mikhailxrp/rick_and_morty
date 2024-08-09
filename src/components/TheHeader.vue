<script setup>
import { ref } from 'vue';
import MainMenu from './ui/MainMenu.vue';
import MobileMenu from './ui/MobileMenu.vue';

const mobileMenuActive = ref(false);

const openCloseMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value;
};
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header-wrapper">
        <router-link to="/" class="header-logo">
          <img src="../assets/rickAndMortyLogo.svg" alt="" />
        </router-link>
        <MobileMenu
          :isActive="mobileMenuActive"
          @toggleMenu="openCloseMobileMenu"
        />
        <MainMenu />
        <button
          type="button"
          class="btn mobile-menu-btn btn-primary"
          @click="openCloseMobileMenu"
        >
          <i class="bi bi-list"></i>
          MENU
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.mobile-menu-btn {
  display: block;
  position: relative;
  z-index: 10;
}
.header-wrapper {
  padding: 10px 15px;
}
.header-logo {
  max-width: 150px;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 576px) {
  .mobile-menu-btn {
    display: none;
  }
}
</style>
