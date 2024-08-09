import { ref, reactive, toRefs } from 'vue';
import { getTotalPages } from '../utils/navigation';
import { defineStore } from 'pinia';

export const useHeroesStore = defineStore('heroesStore', () => {
  const heroes = ref([]);
  const heroTotalPages = ref([]);
  const episodes = ref([]);
  const episodeTotalPage = ref([]);
  const locations = ref([]);
  const locationTotalPage = ref([]);
  const heroOne = reactive({});
  const episodeOne = reactive({});
  const locationOne = reactive({});

  const getAllHeroes = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      heroes.value = data.results;
      heroTotalPages.value = getTotalPages(data.info.pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOneHero = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const data = await response.json();
      heroOne.value = { ...data };
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllEpisodes = async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      episodes.value = data.results;
      episodeTotalPage.value = getTotalPages(data.info.pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getImageCharacter = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.image;
    } catch (e) {
      console.log(e.message);
    }
  };

  const getOneEpisode = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );

      const data = await response.json();
      episodeOne.value = { ...data };
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllLocations = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      locations.value = data.results;
      locationTotalPage.value = getTotalPages(data.info.pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOneLocation = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${id}`
      );

      const data = await response.json();
      locationOne.value = { ...data };
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    heroes,
    episodes,
    locations,
    heroOne,
    episodeOne,
    heroTotalPages,
    episodeTotalPage,
    locationTotalPage,
    locationOne,
    getAllHeroes,
    getAllEpisodes,
    getAllLocations,
    getOneHero,
    getOneEpisode,
    getImageCharacter,
    getOneLocation,
  };
});
