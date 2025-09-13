<template>
    <div class="advantages-card">
        <div class="advantages-card-img">
            <img :src="$props.img" alt="">
        </div>

        <div class="advantages-card-text">
            <h1>{{ $props.title }}</h1>
            <p>{{ $props.paragraph }}</p>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const $props = defineProps({
    img: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    paragraph: {
        type: String,
        default: ""
    }
})

</script>