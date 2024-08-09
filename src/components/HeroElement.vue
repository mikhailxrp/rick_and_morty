<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useHeroesStore } from '../stores/heroesStore';
const props = defineProps({
  hero: Object,
});

const heroStore = useHeroesStore();

const { id, image, name } = props.hero;
const router = useRouter();

const route = useRoute();

const singleLookHero = async (id) => {
  await heroStore.getOneHero(id);
  router.push(route.path + 'hero/' + id);
};
</script>

<template>
  <div class="card card-hero" style="width: 18rem" @click="singleLookHero(id)">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">
        {{ name }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  text-align: center;
  font-weight: 700;
}
.card-hero {
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.card-hero:hover {
  transform: scale(1.05);
}
</style>
