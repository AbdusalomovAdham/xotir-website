<template>
    <div class="how-it-work">
        <div class="main-title">
            <h1>Как это работает?</h1>
            <span>Всего 3 простых шага к сохранению истории</span>
        </div>
        <div class="work-steps">
            <StepCard :stepNumber="1" :icon="IconLogin" :title="'Зарегистрироваться'"
                :text="'Заполните биографию, загрузите любимые фото и видео в удобном редакторе.'" />

            <StepCard :stepNumber="2" :icon="IconCodeScan" :title="'Получите QR-табличку'"
                :text="'Мы изготовим для вас долговечную табличку из и доставим ее вам'" />

            <StepCard :stepNumber="3" :icon="IconForwar" :title="'Поделитесь наследием'"
                :text="'Установите табличку на памятник, чтобы любой член семьи мог узнать историю жизни вашего близкого.'" />
        </div>
    </div>
</template>

<script setup>
import StepCard from './StepCard.vue';
import IconLogin from '@/components/icon/Login.vue'
import IconCodeScan from '@/components/icon/CodeScan.vue'
import IconForwar from '@/components/icon/Forword.vue'
</script>