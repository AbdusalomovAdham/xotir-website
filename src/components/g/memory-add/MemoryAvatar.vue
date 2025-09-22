<template>
    <div class="memory-avatar">
        <IconUserCircleDashed v-if="!isView" />
        <div class="choose-avatar" v-if="!isView">
            <IconGalleryCircle />
            <input type="file" accept="image/*" @change="onFileChange" />
        </div>
        <img src="@/assets/images/banner.png" v-if="isView" />
    </div>
</template>


<script setup>
import IconUserCircleDashed from '@/components/icon/UserCircleDashed.vue'
import IconGalleryCircle from '@/components/icon/GalleryCircle.vue'
import { defineProps, defineEmits, ref, computed } from 'vue'

import { useFamilyTreeStore } from '@/store/profile/familyaTree'
const familyTreeStore = useFamilyTreeStore()

const avatarUrl = ref(null)
const $emits = defineEmits(['upload:avatar'])

const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        avatarUrl.value = URL.createObjectURL(file)
        event.target.value = null
    }
}

const $props = defineProps({
    isView: {
        type: Boolean,
        default: false
    }
})
</script>