<template>
  <div class="flex flex-col gap-2 py-2 px-1" v-if="searchedAnimes.length > 0">
    <SearchedAnimeItem
      v-for="anime in searchedAnimes"
      :key="anime.id"
      :anime="anime"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  searchQuery: String,
});

const {
  public: { apiBase },
} = useRuntimeConfig();

const searchedAnimes = ref([]);

watch(
  () => props.searchQuery,
  async (newQuery) => {
    try {
      const data = await $fetch(`${apiBase}/api/animes`, {
        params: {
          search: newQuery,
          limit: 8,
        },
      });
      searchedAnimes.value = data;
    } catch (error) {
      console.error(error);
    }
  },
  { immediate: true }
);
</script>
