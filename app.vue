<template>
  <div class="w-full max-h-dvh bg-[url('/images/wallpaper.webp')] bg-cover bg-center bg-no-repeat p-4 px-8 grid grid-cols-[1fr,3fr] grid-rows-1 relative z-0 gap-12">
    <div class="w-full h-full flex flex-col gap-4 overflow-y-auto pr-1 white-scrollbar">
      <Character v-for="character in characters" :character="character" :key="character.id" />
    </div>
    <Chat />
  </div>
</template>
<script setup lang="ts">
const { data: characters, pending, error, refresh } = await getCharacters<Characters[]>();
</script>