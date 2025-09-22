<template>
    <div class="textarea flex">
        <label v-if="label" :class="{ 'info': info }">
            {{ label }}
        </label>
        <textarea cols="30" rows="10" :placeholder="placeholder" v-if="!info" v-model="modelValue"></textarea>
        <span v-if="info">{{ info }}</span>
    </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Введите'
    },
    label: {
        type: String,
        default: ''
    },
    info: {
        type: String,
        default: ''
    }
})

// modelValue bilan parentga bog'lanadi
const modelValue = defineModel()
</script>