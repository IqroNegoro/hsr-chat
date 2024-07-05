<template>
    <div class="flex gap-3 self-end">
        <div class="flex flex-col items-end gap-2">
            <p class="poppins-medium text-[#6A6B6F] text-right">Trailblazer</p>
            <div class="bg-[#F1F3F2] rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)]">
                <p class="font-medium text-md"> {{ message.text }} </p>
            </div>
        </div>
        <img src="/images/trash.webp" alt="Trailblazer" class="avatar">
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    message: Message
}>()
</script>