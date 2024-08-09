<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useHeroesStore } from '../stores/heroesStore';

const heroesStore = useHeroesStore();
const episode = heroesStore.episodeOne.value;
const charactersImg = [...episode.characters];
const characterImgList = ref([]);

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
  for (let item in charactersImg) {
    image = await heroesStore.getImageCharacter(charactersImg[item]);
    characterImgList.value.push(image);
  }
});
</script>

<template>
  <div class="card">
    <div class="card-header">{{ episode.name }}</div>
    <div class="card-body">
      <h5 class="card-title mb-3">
        ДАТА ВЫХОДА:
        <span style="font-weight: 700"> {{ episode.air_date }}</span>
      </h5>
      <div class="card-image-wrapper">
        <div
          class="character-image"
          v-for="(item, index) in characterImgList"
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
