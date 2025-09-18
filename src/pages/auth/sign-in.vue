<template>
    <div class="sign-in flex center">
        <div class="sign-in-wrapper flex">
            <div class="sign-in-title flex">
                <h1>Войти в аккаунт</h1>
                <span>Введите вашу личную информацию</span>
            </div>
            <form @submit.prevent class="flex">
                <Input :label="'Электронная почта:'" :type="'email'" :rightIcon="IconEmail" class="mb-8" />
                <Input :label="'Пароль:'" :type="'password'" :rightIcon="IconLock" />
                <div class="sign-in-forgot-password flex content-end">
                    <router-link to="/auth/forgot-password">Забыли пароль</router-link>
                </div>
                <div class="sign-in-btns flex ">
                    <Button class="sign-in-btn flex center" @click="signIn">Войти</Button>
                    <Button class="sign-up-btn flex center" @click="signUp">
                        Нет аккаунта?
                        <span> Зарегистрироваться</span>
                    </Button>
                </div>
            </form>
            <div class="divider flex center">
                <span>
                    или
                </span>
            </div>
            <div class="sign-in-social flex">
                <Button :leftImg="Google" class="social-google flex center">Google</Button>
                <Button :leftImg="Apple" class="social-apple flex center">Apple</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import Button from '@/components/g/Button.vue'
import IconEmail from '@/components/icon/Email.vue'
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