<template>
    <div class="forgot-password flex center">
        <div class="forgot-password-main radius-12 pa-20">
            <div class="forgot-password-title flex mb-16">
                <div class="title-header flex items-center space-between">
                    <h1>Восстановление пароля</h1>
                    <IconClose @click="close" />
                </div>
                <span>Введите зарегистрированный адрес электронной почты</span>
            </div>
            <form @submit.prevent="sendCode" class="flex">
                <Input :label="'Электронная почта:'" :rightIcon="IconEmail" :type="'email'" v-model="email" />
                <button class="flex center bg-btn radius-12">Отправить код</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import IconClose from '@/components/icon/Close.vue'
import IconEmail from '@/components/icon/Email.vue'

import router from '@/routes';

import { useForgotPsw } from '@/store/auth/forgot-psw'
const forgotPswStore = useForgotPsw()

import { ref } from 'vue';
import { useCheckCode } from '@/store/auth/email-code'
const checkCodeStore = useCheckCode()

const email = ref('')
const close = () => {
    router.push('/auth/sign-in')
}




const sendCode = async () => {
    localStorage.removeItem('token')
    if (email.value === "") {
        alert('Create email!');
        return
    }
    try {
        router.push('/auth/email/code')
        await forgotPswStore.forgotPsw(email.value)
    } catch (e) {
        console.error(e)
    }

}
</script>