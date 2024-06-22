<template>
    <div class="w-[385px] overflow-hidden flex gap-2 cursor-pointer" @click="navigateToAnime">
      <NuxtImg :src="apiBase + anime.image.original" width="50px" />
      <div>
        <p class="text-nowrap">
          {{ anime.russian }}
        </p>
        <p class="text-nowrap">{{ anime.name }}</p>
        <div class="flex gap-2">
          <p>{{ anime.aired_on.slice(0, 4) }}</p>
          <span>/</span>
          <p>{{ `Оценка: ${anime.score}` }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    anime: Object,
  });
  
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  
  const navigateToAnime = () => {
    const animeUrl = `/animes/${props.anime.id}`;
    window.location.assign(animeUrl); // Полная перезагрузка страницы
  };
  </script>
  