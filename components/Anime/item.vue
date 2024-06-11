<template>
  <!-- <div
    class="flex flex-col w-[200px] overflow-hidden break-words relative"
    @click="navigateTo(`/animes/${anime.id}`)"
  >
    <img
      :src="apiBase + anime.image.original"
      alt="Poster"
      class="w-[200px] h-[300px] rounded"
    />

    <div class="flex justify-between items-center mt-2">
      <span>{{ anime.russian || anime.name }}</span>
    </div>
  </div> -->

  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="flex"
        ><div
          class="flex flex-col w-[200px] overflow-hidden break-words relative"
          @click="navigateTo(`/animes/${anime.id}`)"
        >
          <img
            :src="apiBase + anime.image.original"
            alt="Poster"
            class="w-[200px] h-[270px] rounded"
          />

          <div class="mt-2">
            <span>{{ anime.russian || anime.name }}</span>
          </div>
        </div></TooltipTrigger
      >
      <TooltipContent class="flex">
        <div>
          <p>{{ `Эпизодов: ${animeEpisodes(anime)}` }}</p>
          <p>{{ `Рейтинг: ${anime.score || "-"}` }}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup>
defineProps({
  anime: {
    type: Object,
    default: () => {},
  },
});

function animeEpisodes(anime) {
  if (anime.episodes_aired === 0) {
    return anime.episodes;
  }
  return `${anime.episodes_aired} / ${
    anime.episodes > 0 ? anime.episodes : "?"
  }`;
}

const {
  public: { apiBase },
} = useRuntimeConfig();
</script>
