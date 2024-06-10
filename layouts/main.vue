<template>
  <div class="min-h-screen flex flex-col main bg-[#121212] text-white">
    <Header>Header</Header>
    <div class="flex-grow mt-3 p-4">
      <slot></slot>
    </div>
    <Footer>Footer</Footer>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

/* @font-face {
  font-family: "SF-Pro";
  src: url("/public/fonts/cruin.ttf") format("ttf");
} */

.main {
  font-family: "Nunito";
}
</style>
