<template>
    <div class="input">
        <label v-if="$props.label" :class="{ 'info': $props.info }">{{ $props.label }}</label>
        <div class="input-wrapper">
            <input :type="$props.type" :placeholder="placeholder" :value="$props.modelValue"
                @input="$emit('update:modelValue', $event.target.value)" v-if="!info">
            <component :is="rightIcon" v-if="$props.rightIcon && !info" @click="emit"></component>
            <span v-if="$props.info">{{ $props.info }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const $props = defineProps({
    label: {
        type: String,
        default: ''
    },
    rightIcon: {
        type: [String, Object],
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
    },
    info: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(["update:modelValue", "iconClick"]);

</script>