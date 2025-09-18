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
                <Input :label="'Электронная почта:'" :rightIcon="IconMessage" :type="'email'"/>
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

const close = () => {
    router.push('/auth/sign-in')
}

const sendCode = () => {
    router.push('/auth/email/code')
}
</script>