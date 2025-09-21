<template>
    <div class="logout-wrapper flex center">
        <div class="logout-wrapper-main pa-20 radius-12">
            <div class="logout-title flex space-between">
                <h3>Вы хотите выйти?</h3>
                <IconClose @click="cancel" />
            </div>
            <p class="mb-10">После выхода из системы ваши данные будут удалены, и вы сможете зарегистрироваться снова
                позже.</p>
            <div class="logout-btns flex ">
                <button class="cencel flex center radius-12" @click="cancel">Отмена</button>
                <button class="logout flex center radius-12" @click="logout">Выйти</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconClose from '@/components/icon/Close.vue'
import { defineProps, defineEmits } from 'vue'
import router from '@/routes'

const $emit = defineEmits(['cancel'])
const $props = defineProps({
    logout: {
        type: Boolean,
        default: false
    }

})

const logout = () => {
    router.push('/auth/sign-in')
}

const cancel = () => {
    $emit('cancel', false)
}
</script>