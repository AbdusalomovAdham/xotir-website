<template>
    <section class="pricing">
        <div class="pricing-title">
            <h1>Тарифы</h1>
        </div>

        <div class="pricing-cards flex center">
            <PricingCard :icon="UserRoundedPricing" :price="'25000'" :title="'Стандарт'" :advised="false"
                :features="userFeatures" :class="{ 'active-pricing': activeCard === 'standard' }"
                @click="activeCard = 'standard'" />

            <PricingCard :icon="IconGroupRounded" :price="'40000'" :title="'Семья'" :advised="true"
                :features="groupFeatures" :class="{ 'active-pricing': activeCard === 'family' }"
                @click="activeCard = 'family'" />
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'
import PricingCard from './PricingCard.vue';
import UserRoundedPricing from '@/components/icon/UserRoundedPricing.vue'
import IconGroupRounded from '@/components/icon/GroupRounded.vue'

const activeCard = ref(null)

const userFeatures = [
    'Только для 1 умершего',
    'Делитесь неограниченным количеством фотографий, видео, воспоминаний, дани уважения и многого другого',
    'Расскажите их историю — от щенячьего детства до последнего сна',
    'Поделитесь с семьёй и друзьями, чтобы собрать ещё больше воспоминаний',
    'Добавьте любимые игрушки, причуды и незабываемые моменты',
    'Доступ в любое время — с телефона, навсегда'
]

const groupFeatures = [
    'До 5 человек умершего',
    'Делитесь неограниченным количеством фотографий, видео, воспоминаний, дани уважения и многого другого',
    'Расскажите их историю — от щенячьего детства до последнего сна',
    'Поделитесь с семьёй и друзьями, чтобы собрать ещё больше воспоминаний',
    'Добавьте любимые игрушки, причуды и незабываемые моменты',
    'Доступ в любое время — с телефона, навсегда'

]
</script>
