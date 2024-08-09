<script setup>
import { onMounted } from 'vue';
import { useHeroesStore } from '../stores/heroesStore';
import AppElementsContainer from '../components/AppElementsContainer.vue';

const heroesStore = useHeroesStore();

onMounted(async () => {
  await heroesStore.getAllHeroes(`https://rickandmortyapi.com/api/character`);
});
</script>

<template>
  <div class="mt-5 mb-5">
    <AppElementsContainer
      :heroes="heroesStore.heroes"
      :pagesHeroes="heroesStore.heroTotalPages"
    />
  </div>
</template>

<style scoped></style>
