<template>
  <!-- <div class="bg-[#252527] grid grid-cols-3 text-[#bfbfbf]"> -->
  <div
    class="bg-[#252527] 800:grid 800:grid-cols-3 h-20 text-[#bfbfbf] border-b-[1px] border-[#151518] flex justify-around items-center relative"
  >
    <!-- LOGO -->
    <div class="flex justify-center items-center">
      <a href="/"><NuxtImg src="/pngs/logo.png" sizes="200px" /></a>
    </div>

    <!-- MAIN BUTTONS  -->
    <div class="800:flex hidden justify-center items-center gap-5">
      <div class="transisiton_blocks">
        <Icon name="material-symbols:layers" size="17px" />
        <span>Каталог</span>
        <Icon name="material-symbols:keyboard-arrow-down" size="20px" />
      </div>
      <!-- SEACH DIALOG -->
      <Dialog>
        <DialogTrigger as-child>
          <div class="transisiton_blocks">
            <Icon name="material-symbols:search" size="20px" />
            <span>Поиск</span>
          </div>
        </DialogTrigger>
        <DialogContent
          class="bg-transparent border-none text-white absolute top-10"
        >
          <!-- SHADCN SHIT -->
          <div class="hidden">
            <DialogTitle>Search</DialogTitle>
            <DialogDescription> Search </DialogDescription>
          </div>
          <!-- MAIN SEARCH DIV -->
          <div class="relative w-full max-w-sm flex flex-col">
            <!-- INPUT -->
            <div>
              <Input
                id="search"
                type="text"
                placeholder="Search..."
                class="pl-8 bg-zinc-950 placeholder:text-white"
                maxlength="60"
                @input="onChangeSearchInput"
              />
              <span
                class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
              >
                <!-- <Icon name="material-symbols:search" size="23px" /> -->
              </span>
            </div>

            <div class="bg-[#09090B] absolute top-14 rounded">
              <SearchedAnimeList :searchQuery="searchQuery"/>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>

    <!-- PROFILE -->
    <div
      class="800:flex hidden justify-center items-center space-x-2 cursor-pointer"
    >
      <Icon name="material-symbols:account-circle-full" size="20px" />
      <span>Профиль</span>
    </div>

    <!-- HAMBURGER -->
    <div class="flex flex-col 800:hidden justify-center items-center">
      <Icon name="material-symbols:menu-rounded" size="40px" class="ham_icon">
      </Icon>

      <!-- HAMBURGER DIV -->
      <div
        class="absolute top-[78px] bg-[#252527] hamburger hidden z-10 text-xl py-2 px-1 rounded"
      >
        <div class="transisiton_blocks">
          <Icon name="material-symbols:layers" size="17px" />
          <span>Каталог</span>
          <Icon name="material-symbols:keyboard-arrow-down" size="20px" />
        </div>
        <div class="transisiton_blocks">
          <Icon name="material-symbols:search" size="20px" />
          <span>Поиск</span>
        </div>
        <div
          class="800:flex justify-center items-center space-x-2 cursor-pointer"
        >
          <Icon name="material-symbols:account-circle-full" size="20px" />
          <span>Профиль</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transisiton_blocks {
  @apply space-x-1 transition duration-300 hover:bg-[#7a7a7a] p-1 rounded cursor-pointer flex items-center;
}

.ham_icon:hover ~ .hamburger {
  display: block;
}
</style>

<script setup>
import debounce from 'lodash.debounce'
const { searchQuery } = useSearch();

const onChangeSearchInput = debounce((event) => {
  searchQuery.value = event.target.value;
}, 300);
</script>
