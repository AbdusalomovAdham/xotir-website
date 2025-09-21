<template>
    <div class="textarea flex">
        <label v-if="$props.label" :class="{ 'info': $props.info }">
            {{ label }}
        </label>
        <textarea cols="30" rows="10" :placeholder="$props.placeholder" v-if="!info"></textarea>
        <span v-if="info">{{ $props.info }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const $props = defineProps({
    placeholder: {
        type: String,
        default: 'Введите'
    },
    label: {
        type: String,
        default: ""
    },
    info: {
        type: String,
        default: ''
    }
})
</script>