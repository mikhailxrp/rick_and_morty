<script setup>
import { onMounted } from 'vue';
import { useHeroesStore } from '../stores/heroesStore';
import AppElementsContainer from '../components/AppElementsContainer.vue';

const heroesStore = useHeroesStore();

onMounted(async () => {
  await heroesStore.getAllLocations('https://rickandmortyapi.com/api/location');
});
</script>

<template>
  <div class="mt-5">
    <AppElementsContainer
      :locations="heroesStore.locations"
      :pagesLocation="heroesStore.locationTotalPage"
    />
  </div>
</template>

<style lang="scss" scoped></style>
