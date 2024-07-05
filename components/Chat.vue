<template>
    <div class="bg-[#D8D9DD] h-full w-full flex flex-col rounded-tr-3xl relative before:absolute before:content-[''] before:w-full before:h-full before:top-1 before:-left-1 before:border before:border-white/50 before:rounded-tr-3xl before:-z-10">
        <div class="shadow-[0_1px_0_0_rgba(0,0,0,0.1)] px-5 pt-3 pb-5">
            <p class="poppins-medium">{{ character.name }}</p>
        </div>
        <div class="px-8 py-2 w-full h-full overflow-y-auto flex flex-col gap-4">
            <template v-for="chat in chats" :key="chat.id">
                <TrailblazerMessage v-if="chat.isTrailblazer" :message="chat" />
                <CharacterMessage v-else :character="character" :message="chat" />
            </template>
        </div>
        <div class="flex justify-center items-center px-12 py-2 gap-8 ">
            <button class="aspect-square h-full" @click="isTrailblazer = false">
                <img :src="character.icon" :alt="character.name" class="avatar" :class="{'grayscale': isTrailblazer}">
            </button>
            <div class="flex justify-center items-center relative w-full bg-black/10 p-2 rounded-md">
                <input type="text" class="w-full bg-transparent" v-model="message" @keydown.enter="sendMessage">
                <button @click="sendMessage">
                    <i class="bx bxs-send hover:text-[#CC833E] text-xl"></i>
                </button>
            </div>
            <button class="aspect-square h-full" @click="isTrailblazer = true">
                <img src="/images/trash.webp" alt="" class="avatar" :class="{'grayscale': !isTrailblazer}">
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    character: Character
}>();

const isTrailblazer : Ref<boolean> = ref(false);

const allChats : Ref<Chat> = ref({})

const chats : Ref<Message[]> = ref([]);

const message : Ref<string> = ref("");

if (import.meta.client) {
    allChats.value = JSON.parse(localStorage.getItem("chats")!);
    chats.value = allChats.value[props.character.id] || [];
    if (!chats.value.length) {
        allChats.value[props.character.id] = [];
        chats.value = allChats.value[props.character.id];
    }
}

const sendMessage = () => {
    chats.value.push({
        id: +new Date(),
        text: message.value,
        type: "text",
        isTrailblazer: isTrailblazer.value
    });

    localStorage.setItem("chats", JSON.stringify(allChats.value));

    message.value = "";
};
</script>