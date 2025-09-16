<template>
    <div class="pricing-card">
        <div class="card-icon">
            <component :is="$props.icon"></component>
            <div v-if="$props.advised">
                Рекомендуется
            </div>
        </div>
        <div class="pricing-card-title">
            {{ $props.title }}
        </div>
        <div class="pricing-card-price">
            <h3>{{ $props.price }} сум</h3>
            <span>/ месяц</span>
        </div>
        <div class="pricing-card-features">
            <div class="card-feature" v-for="(feature, idx) in $props.features" :key="idx">
                <div>
                    <IconCheck />
                </div>
                <p>{{ feature }}</p>
            </div>
        </div>
        <Button class="choose-btn">Выбрать тариф</Button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Button from '@/components/g/Button.vue'
import IconCheck from '@/components/icon/Check.vue'
const $props = defineProps({
    price: {
        type: String,
        default: ""
    },
    priceType: {
        type: String,
        default: ""
    },
    features: {
        type: Object,
        default: () => { [] }
    },
    advised: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    }

})
</script>