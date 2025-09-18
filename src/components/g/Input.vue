<template>
    <div class="input">
        <label v-if="$props.label">{{ $props.label }}</label>
        <div class="input-wrapper">
            <input :type="$props.type" :placeholder="placeholder" :value="$props.modelValue"
                @input="$emit('update:modelValue', $event.target.value)">
            <component :is="rightIcon" v-if="$props.rightIcon" @click="emit"></component>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const $props = defineProps({
    label: {
        type: String,
        default: ''
    },
    rightIcon: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: 'Введите'
    },
    type: {
        type: String,
        default: ""
    },
    modelValue: {
        type: String,
        default: ""
    },
    showPassword: {
        type: Boolean,
        default: false
    }
})

</script>