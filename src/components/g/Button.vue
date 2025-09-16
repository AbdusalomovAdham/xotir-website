<template>
    <button class="btn">
        <img :src="leftImg" alt="">
        <slot />
    </button>
</template>

<script setup>
import defineProps from 'vue'

const $props = defineProps({
    leftImg: {
        type: String,
        default: ""
    }
})
</script>