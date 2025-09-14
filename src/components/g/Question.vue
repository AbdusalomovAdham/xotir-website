<template>
    <div class="question" :class="{ 'active-queation': isActive }" @click="toggle">
        <div class="queastion-title">
            <h3>{{ $props.title }}</h3>
            <p>{{ $props.answer }}</p>
        </div>
        <IconDown v-if="!isActive" />
        <IconUp v-else />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import IconDown from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'
const $props = defineProps({
    title: {
        type: String,
        default: ""
    },
    answer: {
        type: String,
        default: ""
    }
})

const isActive = ref(false);

const toggle = () => {
    isActive.value = !isActive.value;
};
</script>