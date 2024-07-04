<template>
    <div
        class="bg-[#D8D9DD] h-full w-full flex flex-col rounded-tr-3xl relative before:absolute before:content-[''] before:w-full before:h-full before:top-1 before:-left-1 before:border before:border-white/50 before:rounded-tr-3xl before:-z-10">
        <div class="shadow-[0_1px_0_0_rgba(0,0,0,0.1)] px-5 pt-3 pb-5">
            <p class="poppins-medium">Firefly</p>
        </div>
        <div class="px-8 py-2 w-full h-full overflow-y-auto flex flex-col gap-4">
            <div class="flex gap-3">
                <img src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/character/1107.png" alt=""
                    class="rounded-full bg-[#3A3B3F] w-12 h-12 object-cover object-center aspect-square">
                <div class="flex flex-col gap-2">
                    <p class="poppins-medium text-[#6A6B6F]">Clara</p>
                    <div
                        class="bg-[#F1F3F2] rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)]">
                        <p class="font-medium text-md break-all" v-text="'a'.repeat(1000)"></p>
                    </div>
                </div>
            </div>
            <div class="flex gap-3">
                <img src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/character/1107.png" alt=""
                    class="rounded-full bg-[#3A3B3F] w-12 h-12 object-cover object-center aspect-square">
                <div class="flex flex-col gap-2">
                    <p class="poppins-medium text-[#6A6B6F]">Clara</p>
                    <div
                        class="bg-[#F1F3F2] rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)]">
                        <p class="font-medium text-md break-all" v-text="'a'.repeat(1000)"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
