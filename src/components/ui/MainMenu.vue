<script setup></script>

<template>
  <ul class="nav nav-pills main-menu">
    <li class="nav-item">
      <router-link class="nav-link" aria-current="page" to="/"
        >Главная</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/episodes">Эпизоды</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/locations">Локации</router-link>
    </li>
  </ul>
</template>

<style scoped>
.main-menu {
  display: none;
}

@media (min-width: 576px) {
  .main-menu {
    display: flex;
  }
}
</style>
