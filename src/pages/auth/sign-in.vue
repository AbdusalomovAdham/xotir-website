<template>
    <div class="sign-in">
        <div class="sign-in-wrapper">
            <div class="sign-in-title">
                <h1>Войти в аккаунт</h1>
                <span>Введите вашу личную информацию</span>
            </div>
            <form @submit.prevent>
                <Input :placeholder="'Введите'" :label="'Номер телефона:'" :type="'text'" :rightIcon="IconDevice" />
                <Input :placeholder="'Введите'" :label="'Пароль:'" :type="'password'" :rightIcon="IconLock" />
                <div class="sign-in-btns">
                    <Button class="sign-in-btn" @click="signIn">Войти</Button>
                    <Button class="sign-up-btn" @click="signUp">
                        Нет аккаунта?
                        <span> Зарегистрироваться</span>
                    </Button>
                </div>
            </form>
            <div class="divider">
                <span>
                    или
                </span>
            </div>
            <div class="sign-in-social">
                <Button :leftImg="Google" class="social-google">Google</Button>
                <Button :leftImg="Apple" class="social-apple">Apple</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import Button from '@/components/g/Button.vue'
import IconDevice from '@/components/icon/Device.vue'
import IconLock from '@/components/icon/Lock.vue'
import Google from '@/assets/images/google.png'
import Apple from '@/assets/images/apple.png'
import router from '@/routes'

const signUp = () => {
    router.push('/auth/sign-up')
}

const signIn = () => {
    router.push('/profile')
}
</script>ƒ