<template>
  <div class="grid grid-cols-1 500:grid-cols-2 1000:grid-cols-3 1400:grid-cols-4 1800:grid-cols-5 gap-10 align-items-center 500:justify-items-normal justify-items-center">
    <AnimeItem v-for="anime in animeList" :key="anime.id" :anime="anime"></AnimeItem>
  </div>
</template>

<script setup>
defineProps({
  animeList: {
    type: Array,
    default: () => [],
  },
});
</script>
