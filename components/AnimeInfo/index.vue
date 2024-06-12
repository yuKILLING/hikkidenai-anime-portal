<template>
  <section class="flex flex-col 1400:flex-row items-center 1400:items-start">
    <!-- ASIDE BAR -->
    <aside
      class="1400:w-64 p-4 flex 1400:flex-col flex-col sm:flex-row gap-10 1400:gap-0 items-center"
    >
      <Dialog>
        <DialogTrigger>
          <div class="flex flex-wrap gap-3">
            <img
              :src="apiBase + info.image.original"
              alt="Anime Image"
              class="rounded-lg w-[220px] h-[340px]"
              @click="modalScreenShotMiddleware(info.image.original)"
              v-if="info"
            /></div
        ></DialogTrigger>
        <DialogContent
          class="flex justify-center items-center bg-zinc-950 text-white p-0"
        >
          <img :src="selectedImage" alt="Image" />
        </DialogContent>
      </Dialog>
      <div class="space-y-3 bg-[#1c1c1c] rounded-lg p-3 mt-3">
        <div class="block">
          <span class="types">Тип</span>
          <span class="uppercase">{{ info.kind }}</span>
        </div>
        <div class="block">
          <span class="types">Эпизоды</span>
          <span>{{ animeEpisodes(info) }}</span>
        </div>
        <div class="block">
          <span class="types">Статус</span>
          <span class="capitalize">{{ info.status || "Нет статуса" }}</span>
        </div>
        <div class="block">
          <span class="types">Жанры</span>
          <span>{{
            info.genres
              .slice(0, 3)
              .map((genre) => genre.russian)
              .join(", ") || "Нет жанров"
          }}</span>
        </div>
        <div class="block">
          <span class="types">Рейтинг</span>
          <span class="uppercase">{{
            info.rating.split("_").join(" ") || "Нет рейтинга"
          }}</span>
        </div>
        <div class="block">
          <span class="types">Дата выхода</span>
          <span>{{ airedOn(info.aired_on) || "Нет даты выхода" }}</span>
        </div>
        <div class="block">
          <span class="types">Другие названия</span>
          <span>{{ info.synonyms.join(", ") || "Нет других названий" }}</span>
        </div>
      </div>
    </aside>

    <!-- MAIN BAR -->
    <div class="flex-1 p-4">
      <!-- TITLE OF ANIME -->
      <div class="flex justify-between mb-3">
        <h1 class="text-4xl max-h-[80px] overflow-hidden">
          {{ info.russian }}
        </h1>
        <!-- SCORE OF ANIME -->
        <div class="flex items-center gap-2">
          <svg data-v-b161af16="" class="w-6" viewBox="0 0 576 512">
            <path
              class=""
              fill="orange"
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
          <span class="text-2xl">{{ info.score }}</span>
        </div>
      </div>
      <!-- OTHER NAME -->
      <h2 class="text-2xl">{{ info.name }}</h2>
      <div class="bg-[#1c1c1c] py-2 px-3 rounded-lg mt-7 space-y-5">
        <!-- DESCRIPTION -->
        <div>
          <span class="other_types">Описание</span>
          <p class="mt-2">{{ normalizeString(info.description) }}</p>
        </div>
        <!-- SCREENSHOTS -->
        <div class="flex flex-col">
          <span class="other_types">Скриншоты</span>
          <Dialog>
            <DialogTrigger>
              <div class="flex flex-wrap gap-3 mt-2">
                <img
                  :src="apiBase + screenshot.original"
                  alt="Studio"
                  class="w-52 mt-2 rounded"
                  v-for="screenshot in info.screenshots"
                  @click="modalScreenShotMiddleware(screenshot.original)"
                /></div
            ></DialogTrigger>
            <DialogContent
              class="flex justify-center items-center bg-zinc-950 text-white p-0"
            >
              <img :src="selectedImage" alt="Image" />
            </DialogContent>
          </Dialog>
        </div>

        <!-- STUDIOS -->
        <div class="flex flex-col">
          <span class="other_types">Студия</span>
          <Dialog>
            <DialogTrigger>
              <div class="flex flex-wrap gap-3 mt-2">
                <img
                  :src="apiBase + studioChecking(info.studios)"
                  alt="Studio"
                  class="w-52 mt-2"
                  @click="modalScreenShotMiddleware(info.studios[0].image)"
                /></div
            ></DialogTrigger>
            <DialogContent
              class="flex justify-center items-center bg-zinc-950 text-white p-0"
            >
              <img :src="selectedImage" alt="Image" />
            </DialogContent>
          </Dialog>
        </div>

        <!-- DUBBERS -->
        <div>
          <span class="other_types">Озвучки</span>
          <p class="mt-2">{{ info.fandubbers.join(", ") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
});

const {
  public: { apiBase },
} = useRuntimeConfig();
const isOpen = ref(false);
const selectedImage = ref(null);

function airedOn(dateString) {
  if (!dateString) return 'Нет даты выхода';
  const date = new Date(dateString);
  const monthNames = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function animeEpisodes(anime) {
  if (anime.episodes_aired === 0) {
    return anime.episodes;
  }
  return `${anime.episodes_aired} / ${anime.episodes > 0 ? anime.episodes : "?"}`;
}

function modalScreenShotMiddleware(path) {
  isOpen.value = true;
  selectedImage.value = apiBase + path;
}

function studioChecking(studios) {
  if (studios.length === 0) return "Студии не найдены";
  return studios[0].image
}

function normalizeString(input) {
  if (!input) return "Описания нет";
  const characterTagPattern = /\[character=\d+\](.*?)\[\/character\]/g;
  const outputString = input.replace(characterTagPattern, "$1");
  return outputString;
}
</script>

<style scoped>
.types {
  @apply text-[#a2a2a7] text-sm;
}

.block {
  @apply flex flex-col justify-center;
}

.other_types {
  @apply text-3xl font-bold;
}
</style>
