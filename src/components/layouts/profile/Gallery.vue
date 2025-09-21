<template>
    <div class="gallery">
        <div class="gallery-main">
            <div class="gallery-main-title flex items-center space-between">
                <h3>Галерея</h3>
                <div v-if="imageUrls.length" class="flex">
                    <IconPlus />
                    <span> Добавить</span>
                    <input type="file" accept="image/*" @change="addImage">
                </div>
            </div>

            <div class="gallery-body">
                <div class="gallery-body-content flex items-center" v-if="!imageUrls.length">
                    <img src="@/assets/images/gallery.png" alt="" class="mb-8 mt-20">
                    <h5 class="mb-4">Фотографии отсутствуют</h5>
                    <span class="mb-16">Добавьте фото, нажав кнопку Добавить.</span>
                    <button class="px-16 flex center bg-btn radius-12">
                        <IconPlus />
                        Добавить
                        <input type="file" accept="image/*" @change="addImage">
                    </button>
                </div>
            </div>
        </div>
        <div class="gallery-body-images mt-16">
            <div v-for="(url, idx) in imageUrls" :key="idx" class="gallery-item">
                <img :src="url" alt="">
                <IconTrash @click="remove(url)" />
            </div>
        </div>

    </div>
</template>

<script setup>
import IconPlus from '@/components/icon/GalleryPlus.vue'
import IconTrash from '@/components/icon/Trash.vue'
import { ref } from 'vue'
const imageUrls = ref([])

const addImage = (event) => {
    const file = event.target.files[0]
    if (file) {
        const url = URL.createObjectURL(file)
        imageUrls.value.push(url)
        event.target.value = null
    }
}

const remove = (url) => {
    imageUrls.value = imageUrls.value.filter(img => img !== url)
}




</script>