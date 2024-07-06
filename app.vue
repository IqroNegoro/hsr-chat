<template>
  <div class="w-full max-h-dvh overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/images/wallpaper.webp')] bg-cover bg-center bg-no-repeat p-4 px-8 grid grid-cols-1 md:grid-cols-[1fr,3fr] grid-rows-1 relative z-0 gap-12">
    <div class="w-full h-full flex flex-col gap-4 overflow-y-auto pr-1 white-scrollbar">
      <Character v-for="character in characters" :character="character" :key="character.id" @select-character="character => selectedCharacter = character" />
    </div>
    <Chat :character="selectedCharacter!" v-if="selectedCharacter" :key="selectedCharacter.id" @close="selectedCharacter = undefined" />
    <div v-else class="bg-[#D8D9DD] h-full w-full flex flex-col max-md:hidden justify-center items-center rounded-3xl">
      <img src="https://cdn.inspireuplift.com/uploads/images/seller_products/1701094245_HonkaiStarRailChibiClara.png" alt="Clara lucuk imuff kanii" class="w-96">
      <p>Choose Character First</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: characters, pending, error, refresh } = await getCharacters();
const selectedCharacter : Ref<undefined | Character> = ref(undefined);

if (import.meta.client) {
  if (!localStorage.getItem("chats")) {
    localStorage.setItem("chats", JSON.stringify({}));
  }
}

if (process.env.NODE_ENV === 'production') {
  const {data: counter} = await useFetch("/api/counter", {
    default: () => {},
    key: "get-counter"
  });
}
</script>