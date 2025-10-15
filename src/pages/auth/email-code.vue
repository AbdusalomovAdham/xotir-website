<template>
    <div class="otp-container flex center">
        <div class="otp-container-wrapper flex radius-12">
            <div class="otp-container-title flex items-center space-between">
                <h2 class="mb-6">Введите код</h2>
                <IconClose @click="close" />
            </div>
            <p class="mb-16">Пароль был отправлен на {{ email }}, пожалуйста, введите пароль.</p>
            <div class="otp-inputs flex mb-16">
                <input v-for="(digit, index) in 6" :key="index" type="text" maxlength="1" class="otp-box"
                    v-model="otp[index]" @input="focusNext($event, index)" @keydown.backspace="focusPrev($event, index)"
                    placeholder="-" />
            </div>

            <p class="timer mb-16">Пароль можно сбросить после {{ timer }}</p>

            <button @click="continueFunc" class="bg-btn flex center py-13 radius-12">Продолжать</button>
        </div>
    </div>
</template>

<script setup>
import router from '@/routes';
import IconClose from '@/components/icon/Close.vue'
import { computed, onMounted, ref } from 'vue';
import { useCheckCode } from '@/store/auth/email-code'

import { useForgotPsw } from '@/store/auth/forgot-psw'
const forgotPswStore = useForgotPsw()

const checkCodeStore = useCheckCode()
const email = computed(() => forgotPswStore.userEmail)
const otp = ref(Array(6).fill(""));

const focusNext = (e, index) => {
    if (e.target.value && index < 5) {
        e.target.nextElementSibling.focus();
    }
}

const focusPrev = (e, index) => {
    if (!otp.value[index] && index > 0) {
        e.target.previousElementSibling.focus();
    }
}

const timer = ref("02:00")

onMounted(() => {
    let seconds = 120
    const interval = setInterval(() => {
        seconds--
        const m = String(Math.floor(seconds / 60)).padStart(2, "0")
        const s = String(Math.floor(seconds % 60)).padStart(2, "0")
        timer.value = `${m}:${s}`
        if (seconds <= 0) clearInterval(interval)
    }, 1000)
})

const continueFunc = async () => {
    try {
        const code = otp.value.join("")
        await checkCodeStore.checkCode(code)
        router.push('/auth/reset-password')
    } catch (e) {
        console.log(e)
    }
}

const close = () => {
    router.push('/auth/sign-in')
}
</script>


<style scoped>
.otp-container {
    /* position: relative; */
    z-index: 100000;
}
</style>