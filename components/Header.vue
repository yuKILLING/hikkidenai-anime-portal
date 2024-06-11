<template>
  <!-- <div class="bg-[#252527] grid grid-cols-3 text-[#bfbfbf]"> -->
  <div
    class="bg-[#09090B] grid grid-cols-3 h-20 text-[#bfbfbf] border-b-[1px] border-[#151518]"
  >
    <div class="flex justify-center items-center">
      <a href="/"><NuxtImg src="/pngs/logo.png" sizes="200px" /></a>
    </div>
    <div class="flex justify-center items-center gap-5">
      <div class="transisiton_blocks">
        <Icon name="material-symbols:layers" size="17px" />
        <span>Каталог</span>
        <Icon name="material-symbols:keyboard-arrow-down" size="20px" />
      </div>
      <div class="transisiton_blocks">
        <Icon name="material-symbols:search" size="20px" />
        <span>Поиск</span>
      </div>
    </div>
    <div class="flex justify-center items-center space-x-2 cursor-pointer">
      <Icon name="material-symbols:account-circle-full" size="20px" />
      <span>Профиль</span>
    </div>
  </div>
</template>

<style scoped>
.transisiton_blocks {
  @apply space-x-1 transition duration-300 hover:bg-[#7a7a7a] p-1 rounded cursor-pointer;
}
</style>
