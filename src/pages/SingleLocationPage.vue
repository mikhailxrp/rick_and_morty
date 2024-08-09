<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useHeroesStore } from '../stores/heroesStore';

const heroesStore = useHeroesStore();
const location = heroesStore.locationOne.value;
const residents = [...heroesStore.locationOne.value.residents];
const residentsImgs = ref([]);

const router = useRouter();

const singleLookHero = async (id) => {
  const match = id.match(/\/avatar\/(\d+)/);
  const characterId = match ? match[1] : nul;
  if (characterId) {
    await heroesStore.getOneHero(parseInt(characterId));
    router.push('/hero/' + parseInt(characterId));
  }
};

onMounted(async () => {
  let image = null;
  for (let item in residents) {
    image = await heroesStore.getImageCharacter(residents[item]);
    residentsImgs.value.push(image);
  }
});
</script>

<template>
  <div class="card">
    <div class="card-header">{{ location.name }}</div>
    <div class="card-body">
      <p class="list-group-item">
        ТИП ЛОКАЦИИ:
        <span style="font-weight: 700"> {{ location.type }}</span>
      </p>
      <p class="list-group-item">
        ИЗМЕРЕНИЕ:
        <span style="font-weight: 700"> {{ location.dimension }}</span>
      </p>
      <div class="card-image-wrapper">
        <div
          class="character-image"
          v-for="(item, index) in residentsImgs"
          :key="index"
          @click="singleLookHero(item)"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  text-align: center;
  font-weight: 700;
}
.card-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
}
.character-image {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.character-image img {
  object-fit: cover;
}
</style>
