<template>
   <div class="sign-up">
      <div class="sign-up-wrapper">
         <div class="sign-up-title">
            <h1>Зарегистрироваться</h1>
            <span>Введите вашу личную информацию</span>
         </div>
         <form @submit.prevent>
            <Input :label="'Имя и фамилия:'" :rightIcon="IconUser" />
            <Input  :label="'Номер телефона:'" :rightIcon="IconDevice" />
            <Select :label="'Регион:'" :options="regions" />
            <Select :label="'Район/город:'" :options="cities" />
            <Input  :label="'Пароль:'" :rightIcon="IconLock" />
            <Input  :label="'Повторно введите пароль:'" :rightIcon="IconLock" />
            <div class="sign-up-btns">
               <Button class="sign-up-btn" @click="signUp">Зарегистрироваться</Button>
               <Button class="sign-in-btn" @click="signIn">Уже есть аккаунт? <span>Войти</span></Button>
            </div>
         </form>
         <div class="divider">
            <span>
               или
            </span>
         </div>
         <div class="sign-up-social">
            <Button :leftImg="Google" class="social-google">Google</Button>
            <Button :leftImg="Apple" class="social-apple">Apple</Button>
         </div>
      </div>
   </div>
</template>

<script setup>
import Button from '@/components/g/Button.vue'
import Input from '@/components/g/Input.vue'
import IconUser from '@/components/icon/User.vue'
import IconLock from '@/components/icon/Lock.vue'
import Select from '@/components/g/Select.vue'
import Google from '@/assets/images/google.png'
import Apple from '@/assets/images/apple.png'
import IconDevice from '@/components/icon/Device.vue'
import router from '@/routes'

const regions = ["Buxoro", "Toshkent", "Jizzax"]
const cities = ["Kitob", "Yakka bog'", "Beda poya"]

const signUp = () => {
   router.push('/profile')
}

const signIn = () => {
   router.push('/auth/sign-in')
}
</script>