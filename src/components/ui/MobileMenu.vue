<script setup>
const props = defineProps({
  isActive: Boolean,
});

const emit = defineEmits(['toggleMenu']);
</script>

<template>
  <div :class="isActive ? 'mobile-nav-panel active' : 'mobile-nav-panel'">
    <ul class="mobile-menu nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" to="/" @click="$emit('toggleMenu')"
          >Главная</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/episodes"
          @click="$emit('toggleMenu')"
          >Эпизоды</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/locations"
          @click="$emit('toggleMenu')"
          >Локации</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mobile-nav-panel {
  padding: 70px 50px 30px 50px;
  width: 100%;
  height: 200px;
  position: fixed;
  top: -300px;
  right: 0;
  left: 0;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #000;
  transition: all 0.3s ease-in;
  z-index: 1;
}
.mobile-nav-panel li {
  margin-bottom: 10px;
}
.mobile-nav-panel li a {
  font-size: 18px;
}
.mobile-nav-panel.active {
  top: 0;
}

@media (min-width: 576px) {
  .mobile-nav-panel {
    display: none;
  }
}
</style>
