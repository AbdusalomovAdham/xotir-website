<template>
    <div class="reset-password">
        <div class="reset-password-wrapper pa-20 radius-12">
            <div class="reset-password-title flex items-center space-between mb-16">
                <h2>Создайте новый пароль</h2>
                <IconClose @click="close" />
            </div>
            <div class="reset-password-inputs flex mb-16">
                <Input :label="'Пароль:'" :rightIcon="IconLock" :type="'password'" v-model="password" />
                <Input :label="'Повторно введите пароль:'" :rightIcon="IconLock" :type="'password'"
                    v-model="confirmPassword" />
            </div>
            <button class="bg-btn py-13 radius-12 flex center" @click="continuePsw">Продолжать</button>
        </div>
    </div>
</template>

<script setup>
import IconClose from '@/components/icon/Close.vue'
import router from '@/routes'
import Input from '@/components/g/Input.vue'
import IconLock from '@/components/icon/Lock.vue'
import { useUpdatePsw } from '@/store/auth/update-password'
import { ref } from 'vue'

const updatePswStore = useUpdatePsw()
const password = ref('')
const confirmPassword = ref('')

const close = () => {
    router.push('/auth/sign-in')
}

const continuePsw = async () => {
    if (confirmPassword.value !== password.value) {
        alert('re-enter password')
        confirmPassword.value = ""
        password.value = ""
        return
    }
    try {
        await updatePswStore.updatePsw(password)
    } catch (e) {
        console.error(e)
    }
    router.push('/auth/sign-in')
    localStorage.removeItem('token')
}
</script>