<template>
    <div class="step-card">
        <div class="step-number-wrapper">
            <div class="step-number-main">
                <div class="step-number">
                    {{ $props.stepNumber }}
                </div>
            </div>
            <div class="step-card-icon">
                <component :is="$props.icon"></component>
            </div>
        </div>

        <div class="card-text">
            <div class="card-title">
                <h1>{{ $props.title }}</h1>
            </div>
            <div class="card-paragraph">
                <p>{{ $props.text }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const $props = defineProps({
    stepNumber: {
        type: Number,
        default: null
    },
    icon: {
        type: [Object, String],
        default: null
    },
    title: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
})
</script>