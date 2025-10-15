<template>
  <div class="sign-up">
    <div class="sign-up-wrapper">
      <div class="sign-up-title">
        <h1>Зарегистрироваться</h1>
        <span>Введите вашу личную информацию</span>
      </div>
      <form @submit.prevent>
        <Input v-model="form.fullName" :label="'Имя и фамилия:'" :rightIcon="IconUser" :isFill="errors.fullName"/>
        <Input v-model="form.email" :label="'Электронная почта:'" :rightIcon="IconEmail" :isFill="errors.email"/>
        <Select v-model="form.region_id" :label="'Регион:'" :options="regions" :isFill="errors.region"/>
        <Select v-model="form.district" :label="'Район/город:'" :options="districts" :isFill="errors.city"
                :disabled="!form.region_id"/>
        <Input v-model="form.password" type="password" :label="'Пароль:'" :rightIcon="IconLock"
               :isFill="errors.password" :errMsg="errMsg"/>
        <Input v-model="form.confirmPassword" type="password" :label="'Повторно введите пароль:'"
               :rightIcon="IconLock" :isFill="errors.confirmPassword" :errMsg="errMsg"/>
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
import IconEmail from '@/components/icon/Email.vue'
import router from '@/routes'
import {computed, onMounted, reactive, ref, watch} from 'vue'
import {useSignUp} from '@/store/auth/sign-up'

import {useProfileStore} from '@/store/profile/profile'

const profileStore = useProfileStore()


const errMsg = ref('')
const form = reactive({
  fullName: "",
  email: "",
  region_id: null,
  district: null,
  password: "",
  confirmPassword: ""
})

const signUpStore = useSignUp()
const regions = computed(() => signUpStore.regionsList)
const districts = computed(() => signUpStore.districtList)

const errors = reactive({
  fullName: false,
  email: false,
  region: false,
  city: false,
  password: false,
  confirmPassword: false
})

const signUp = async () => {
  Object.keys(errors).forEach(key => errors[key] = false)
  if (!form.fullName) errors.fullName = true
  if (!form.email) errors.email = true
  if (!form.region) errors.region = true
  if (!form.city) errors.city = true
  if (!form.password) errors.password = true
  if (!form.confirmPassword) errors.confirmPassword = true

  const hasError = Object.keys(form).some(key => {
    if (form[key] === '') {
      errors[key] = true
      return true
    }
    return false
  })


  if (hasError) return

  if (form.password !== form.confirmPassword) {
    errMsg.value = 'Повторно введите пароль'
    errors.password = true
    errors.confirmPassword = true
    form.password = ''
    form.confirmPassword = ''
    return
  }

  try {
    localStorage.removeItem('token')
    await signUpStore.signUp(form.fullName, form.email, form.password, form.district.id, form.region_id)
    await profileStore.getUser()
    router.push('/profile')
  } catch (e) {
    console.log(e)
    return
  }

}

const signIn = () => {
  router.push('/auth/sign-in')
}

onMounted(async () => {
  await signUpStore.getRegions()
  await profileStore.getUser()
})

watch(() => form.region_id, async (newRegion) => {
  form.district = null
  if (newRegion) await signUpStore.getDistricts(newRegion)
  else signUpStore.districtList = []
})


</script>