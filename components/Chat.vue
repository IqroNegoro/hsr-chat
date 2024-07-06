<template>
    <div class="bg-[#D8D9DD] h-full w-full max-lg:top-0 max-lg:left-0 max-lg:fixed flex flex-col lg:rounded-tr-3xl relative max-lg:before:hidden before:absolute before:content-[''] before:w-full before:h-full before:top-1 before:-left-1 before:border before:border-white/50 before:rounded-tr-3xl before:-z-10">
        <div class="flex items-center gap-2 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] px-5 pt-3 pb-5">
            <button class="flex justify-center items-center lg:hidden" @click="$emit('close')">
                <i class="bx bx-chevron-left text-2xl"></i>
            </button>
            <p class="poppins-medium">{{ character.name }}</p>
        </div>
        <div class="px-8 py-2 w-full h-full overflow-y-auto overflow-x-hidden flex flex-col gap-4">
            <template v-for="chat in chats" :key="chat.id">
                <TrailblazerMessage v-if="chat.isTrailblazer" :message="chat" @delete-message="handleDeleteMessage" />
                <CharacterMessage v-else :character="character" :message="chat" @delete-message="handleDeleteMessage" />
            </template>
        </div>
        <div class="flex justify-center items-center px-4 lg:px-12 py-2 gap-4 lg:gap-8">
            <button class="aspect-square h-full" @click="isTrailblazer = false">
                <img :src="character.icon" :alt="character.name" class="avatar" :class="{'grayscale': isTrailblazer}">
            </button>
            <div class="flex justify-center items-center gap-2 relative w-full bg-black/10 p-2 rounded-md">
                <input type="text" class="w-full bg-transparent" v-model="message" @keydown.enter="sendMessage">
                <label for="imageInput" class="cursor-pointer">
                    <i class="bx bxs-camera hover:text-[#CC833E] text-xl"></i>
                </label>
                <input type="file" class="hidden" id="imageInput" @change="handleSendImage" accept=".jpeg,.jpg,.png,.webp">
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
    if (!chats.value?.length) {
        allChats.value[props.character.id] = [];
        chats.value = allChats.value[props.character.id];
    }
}

const saveChat = () => localStorage.setItem("chats", JSON.stringify(allChats.value));

const sendMessage = () => {
    chats.value.push({
        id: +new Date(),
        text: message.value,
        type: "text",
        isTrailblazer: isTrailblazer.value
    });
    saveChat();
    message.value = "";
};

const handleDeleteMessage = (id : number) => {
    chats.value = chats.value.filter(v => v.id !== id);
    allChats.value[props.character.id] = chats.value;
    saveChat();
};

const handleSendImage = async (v : any) => {
    let image = undefined;
    if (typeof v === 'object') {
        image = await convertImageToUrl(v.target.files[0]);
    } else {
        image = v;
    }

    chats.value.push({
        id: +new Date(),
        text: image,
        type: "image",
        isTrailblazer: isTrailblazer.value
    });

    saveChat();

    if (typeof v === 'object') v.value = "";
}
</script>