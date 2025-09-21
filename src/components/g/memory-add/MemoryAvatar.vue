<template>
    <div class="memory-avatar">
        <IconUserCircleDashed v-if="!avatarUrl && !member?.avatar" />
        <div class="choose-avatar" v-if="!member?.avatar">
            <IconGalleryCircle />
            <input type="file" accept="image/*" @change="onFileChange" />
        </div>
        <img :src="member.avatar" v-if="member?.avatar" />
        <div>
        </div>
    </div>
</template>


<script setup>
import IconUserCircleDashed from '@/components/icon/UserCircleDashed.vue'
import IconGalleryCircle from '@/components/icon/GalleryCircle.vue'
import { defineProps, defineEmits, ref } from 'vue'

const $props = defineProps({
    member: {
        type: Object,
        default: () => { }
    }
})

const avatarUrl = ref(null)
const $emits = defineEmits(['upload:avatar'])


const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        avatarUrl.value = URL.createObjectURL(file)
        event.target.value = null
    }
}
</script>