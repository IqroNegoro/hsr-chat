<template>
    <div class="bg-[#D8D9DD] h-full w-full max-md:top-0 max-md:left-0 max-md:fixed flex flex-col md:rounded-tr-3xl relative max-md:before:hidden before:absolute before:content-[''] before:w-full before:h-full before:top-1 before:-left-1 before:border before:border-white/50 before:rounded-tr-3xl before:-z-10">
        <div class="flex items-center gap-2 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] px-5 pt-3 pb-5">
            <button class="flex justify-center items-center md:hidden" @click="$emit('close')">
                <i class="bx bx-chevron-left text-2xl"></i>
            </button>
            <p class="poppins-medium">{{ character.name }}</p>
        </div>
        <div class="px-8 py-2 w-full h-full overflow-y-auto overflow-x-hidden flex flex-col gap-4" ref="container">
            <template v-for="chat in chats" :key="chat.id">
                <TrailblazerMessage v-if="chat.isTrailblazer" :message="chat" @delete-message="handleDeleteMessage" />
                <CharacterMessage v-else :character="character" :message="chat" @delete-message="handleDeleteMessage" />
            </template>
        </div>
        <div class="flex justify-center items-center px-4 md:px-12 py-2 gap-4 md:gap-8">
            <button class="aspect-square h-full" @click="isTrailblazer = false">
                <img :src="character.icon" :alt="character.name" class="avatar" :class="{'grayscale': isTrailblazer}">
            </button>
            <div class="flex justify-center items-center gap-2 relative w-full bg-black/10 p-2 rounded-md">
                <div class="absolute bottom-[110%] rounded-md left-0 bg-white/50 backdrop-blur-sm w-full h-96 overflow-y-auto grid grid-cols-4 grid-flow-row gap-2" v-show="showSticker">
                    <button v-for="i in 224" :key="i" @click="handleSendImage(`https://hsrchat.pages.dev/assets/img/stickers/sticker_${i - 1}.png`)">
                        <img :src="`https://hsrchat.pages.dev/assets/img/stickers/sticker_${i - 1}.png`" alt="">
                    </button>
                </div>
                <input type="text" class="w-full bg-transparent" v-model="message" @keydown.enter="sendMessage">
                <button class="flex justify-center items-center" @click="showSticker = !showSticker">
                    <i class="bx bxs-sticker"></i>
                </button>
                <label for="imageInput" class="cursor-pointer flex justify-center items-center">
                    <i class="bx bxs-camera hover:text-[#CC833E] text-xl"></i>
                </label>
                <input type="file" class="hidden" id="imageInput" @change="handleSendImage" accept=".jpeg,.jpg,.png,.webp">
                <button class="flex justify-center items-center" @click="sendMessage">
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
const showSticker : Ref<boolean> = ref(false);

const message : Ref<string> = ref("");

const container : Ref<HTMLDivElement | undefined> = ref(undefined);

watch(chats, async (val, old) => {
    await nextTick();
    if (val.length > old.length) {
        container.value!.scrollTop = container.value!.scrollHeight
    }
});

onMounted(() => {
    container.value!.scrollTop = container.value!.scrollHeight;
});

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
    if (!message.value) return;
    chats.value = [...chats.value, {
        id: +new Date(),
        text: message.value,
        type: "text",
        isTrailblazer: isTrailblazer.value
    }];
    allChats.value[props.character.id] = chats.value
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

    chats.value = [...chats.value, {
        id: +new Date(),
        text: image,
        type: "image",
        isTrailblazer: isTrailblazer.value
    }];console.log(chats.value)
    allChats.value[props.character.id] = chats.value
    saveChat();
    showSticker.value = false;
    if (typeof v === 'object') v.value = "";
}
</script>