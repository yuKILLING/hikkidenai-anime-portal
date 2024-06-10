<template>
  <div class="w-3/5 m-auto">
    <!-- CAROUSEL -->
    <div class="rounded-xl bg-[#1c1c1c] pt-2">
      <span class="pl-3 text-lg text-[#a2a2a7]">Популярные онгоинги</span>
      <OngoingsList
        class="rounded-xl"
        :ongoings="ongoings"
        v-if="ongoings.length > 0"
      >
      </OngoingsList>
      <SkeletonCarousel v-else> </SkeletonCarousel>
    </div>

    <!-- ANIME LIST -->
    <div v-if="!pending" class="mt-10 flex flex-col items-center">
      <div>
        <div class="flex justify-between">
          <h1 class="text-3xl font-bold">Популярные аниме</h1>
          <div>
            <select
              class="bg-transparent outline-none w-44 h-12 px-2 border-[1px] border-[#27272A] rounded transition duration-500"
              v-model="sortBy"
            >
              <option value="popularity" class="bg-[#09090B]">
                По популярности
              </option>
              <option value="ranked" class="bg-[#09090B]">По оценке</option>
              <option value="status" class="bg-[#09090B]">По статусу</option>
              <option value="episodes" class="bg-[#09090B]">По сериям</option>
            </select>
          </div>
        </div>
        <AnimeList class="mt-5" :animeList="animeList"> </AnimeList>
      </div>
    </div>
    <!-- SKELETON -->
    <div v-if="pending">
      <div class="mt-10 flex flex-col items-center">
        <div>
          <div class="flex justify-between">
            <h1 class="text-3xl font-bold">Популярные аниме</h1>
            <div>
              <select
                class="bg-transparent outline-none w-44 h-12 px-2 border-[1px] border-[#27272A] rounded transition duration-500"
                v-model="sortBy"
              >
                <option value="popularity" class="bg-[#09090B]">
                  По популярности
                </option>
                <option value="ranked" class="bg-[#09090B]">По оценке</option>
                <option value="status" class="bg-[#09090B]">По статусу</option>
                <option value="episodes" class="bg-[#09090B]">По сериям</option>
              </select>
            </div>
          </div>
          <SkeletonAnime class="mt-5"> </SkeletonAnime>
        </div>
      </div>
    </div>
    <!-- PAGINATION -->
    <div class="flex justify-center items-center my-10">
      <Pagination
        v-slot="{ page }"
        :total="8230"
        :sibling-count="1"
        show-edges
        :default-page="currentPage"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst class="bg-[#27272A]" />
          <PaginationPrev class="bg-[#27272A]" />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
              class="bg-[#27272A]"
            >
              <Button
                class="w-10 h-10 p-0"
                :variant="item.value === page ? 'default' : 'outline'"
                @click="loadAnimeList(item.value)"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext class="bg-[#27272A]" />
          <PaginationLast class="bg-[#27272A]" />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const { ongoings } = useOngoings();
const { animeList, loadAnimeList, currentPage, pending, sortBy } =
  useAnimeList();

watch(sortBy, async (newSortBy) => {
  loadAnimeList();
});
</script>
