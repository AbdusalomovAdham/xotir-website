<template>
    <div class="add-memory">
        <div class="add-memory-main">

            <div class="add-memory-header">
                <IconLeftBack @click="returnBack" />
                <h3>Добавить память</h3>
            </div>

            <div class="add-memory-content">
                <div class="memory-top">
                    <div class="memory-avatar">
                        <IconUserCircleDashed v-if="!avatarUrl" />
                        <img v-else :src="avatarUrl" />
                        <div class="choose-avatar">
                            <IconGalleryCircle />
                            <input type="file" accept="image/*" @change="onFileChange" />
                        </div>
                    </div>

                    <div class="memory-info">
                        <Input :label="'Имя и фамилия:'" :placeholder="'Введите'" type="text" />
                        <Input :label="'Член семьи:'" :placeholder="'Выбрать'" type="text" :rightIcon="IconDown" />
                        <Input :label="'Дата рождения:'" :placeholder="'Выбрать'" type="text" :rightIcon="Calendar" />
                        <Input :label="'Место рождения:'" :placeholder="'Введите'" type="text" />
                    </div>
                </div>


                <div class="memory-bio">
                    <label>Биография:</label>
                    <textarea placeholder="Введите биографию"></textarea>
                </div>

                <div class="memory-extra">
                    <Input :label="'Адрес смерти:'" :placeholder="'Введите'" type="text" />
                    <Input :label="'Дата смерти:'" :placeholder="'Выбрать'" type="text" :rightIcon="Calendar" />
                    <Input :label="'Причина смерти:'" :placeholder="'Введите'" type="text" />
                </div>

                <div class="memory-gallery">
                    <h4>Галерея</h4>
                    <div class="gallery-list">
                        <div class="gallery-add">
                            <IconAddGallery />
                            <input type="file" multiple accept="image/*" @change="addGallery" />
                        </div>
                        <div v-for="(img, index) in gallery" :key="index" class="gallery-item">
                            <img :src="img" />
                            <button @click="removeImage(index)">
                                <IconTrash />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="memory-actions">
                    <button class="save-btn" @click="saveMemory">Сохранить</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import IconLeftBack from '@/components/icon/LeftBack.vue'
import IconUserCircleDashed from '@/components/icon/UserCircleDashed.vue'
import IconGalleryCircle from '@/components/icon/GalleryCircle.vue'
import Input from '@/components/g/Input.vue'
import Calendar from '@/components/icon/Calendar.vue'
import IconDown from '@/components/icon/Down.vue'
import IconAddGallery from '@/components/icon/AddGallery.vue'
import IconTrash from '@/components/icon/Trash.vue'
import router from '@/routes'
const avatarUrl = ref(null)
const gallery = ref([])

const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        avatarUrl.value = URL.createObjectURL(file)
    }
}

const addGallery = (event) => {
    const file = event.target.files[0]

    if (file) {
        gallery.value.push(URL.createObjectURL(file))
    }
}
const removeImage = (index) => {
    gallery.value.splice(index, 1)
}

const saveMemory = () => {
    router.push('/profile/family-tree')
}

const returnBack = () => {
    router.push('/profile/family-tree')
}
</script>