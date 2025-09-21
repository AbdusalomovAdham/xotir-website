<template>
    <div class="media-box flex center radius-12">
        {{ $props.mediaName }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const $props = defineProps({
    mediaName: {
        type: String,
        default: ''
    }
})
</script>