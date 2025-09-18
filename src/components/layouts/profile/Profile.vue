<template>
    <div class="profile-main">
        <div class="profile-main-title">
            <h3>Персональная информация</h3>
        </div>
        <div class="profile-main-body flex">
            <div class="profile-main-body-left">
                <div class="profile-main-content">
                    <div class="profile-avatar">
                        <img :src="avatarUrl" alt="" v-if="avatarUrl">
                        <IconUserCircle style="width: 149px; height: 149px;" class="profile-img" v-else />
                    </div>

                    <div class="select-image">
                        <IconEditPen class="edit-pen-icon" />
                        <input type="file" accept="image/*" @change="onFileChange" />
                    </div>
                </div>
            </div>
            <div class="profile-main-body-right">
                <div>
                    <span>Имя и фамилия:</span>
                    <h5 v-if="!isEdit">{{ fullName }}</h5>
                    <Input v-else v-model="fullName" :type="'text'" />
                </div>
                <div>
                    <span>Номер телефона:</span>
                    <h5 v-if="!isEdit">{{ phoneNumber }}</h5>
                    <Input v-else v-model="phoneNumber" :type="'text'" />
                </div>
                <div>
                    <span>Регион:</span>
                    <h5 v-if="!isEdit">{{ region }}</h5>
                    <Input v-else v-model="region" :type="'text'" />
                    <!-- <Select /> -->
                </div>
                <div>
                    <span>Район/город:</span>
                    <h5 v-if="!isEdit">{{ city }}</h5>
                    <Input v-else v-model="city" :type="'text'" />
                </div>
                <div class="profile-main-body-right-password">
                    <span>Пароль:</span>
                    <div v-if="!isEdit">
                        <h5 v-if="!isShowPassword">*******</h5>
                        <h5 v-else>{{ password }}</h5>
                        <IconEye @click="showPassword" />
                    </div>
                    <Input v-else v-model="password" :type="'password'" :rightIcon="IconLock"
                        :showPassword="isShowPassword" @showPassword="showPassword" />
                </div>
            </div>
        </div>

        <button class="profile-edit-btn" @click="edit">
            <IconEditPen />
            Редактировать
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import IconEye from '@/components/icon/Eye.vue'
import IconEditPen from '@/components/icon/EditPen.vue'
import Input from '@/components/g/Input.vue'
import IconLock from '@/components/icon/Lock.vue'
import IconUserCircle from '@/components/icon/UserCircle.vue'


const isShowPassword = ref(false)
const isEdit = ref(false)

const fullName = ref('Абдурасул Юсупов')
const region = ref('Республика Каракалпакстан')
const password = ref('qwert')
const phoneNumber = ref('+998 90 453 78 65')
const city = ref('город Нукус')
const avatarUrl = ref(null)

const edit = () => {
    isEdit.value = !isEdit.value
}

const showPassword = () => {
    isShowPassword.value = !isShowPassword.value
}

function onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        avatarUrl.value = URL.createObjectURL(file)
    }
}
</script>