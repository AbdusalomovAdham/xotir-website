<template>
  <div class="profile-main">
    <div class="profile-main-title">
      <h3>Персональная информация</h3>
    </div>

    <div class="profile-main-body flex mb-24">
      <div class="profile-main-body-left">
        <div class="profile-main-content">
          <div class="profile-avatar">
            <img
                v-if="form.avatarPreview"
                :src="form.avatarPreview"
                alt="avatar"
            />

            <img
                v-else-if="profileStore.userData?.avatar?.path"
                :src="backendAvatarUrl"
                alt="avatar"
            />

            <IconUserCircle
                v-else
                class="profile-img"
                style="width: 149px; height: 149px;"
            />
          </div>

          <!-- Faqat tahrirlash rejimida fayl tanlash -->
          <div class="select-image" v-if="isEdit">
            <IconEditPen class="edit-pen-icon"/>
            <input type="file" accept="image/*" @change="onFileChange"/>
          </div>
        </div>
      </div>

      <div class="profile-main-body-right">
        <div>
          <span>Имя и фамилия:</span>
          <h5 v-if="!isEdit">{{ fullName }}</h5>
          <Input v-else v-model="form.fullName" type="text" :isFill="errors.fullName"/>
        </div>

        <div>
          <span>Электронная почта:</span>
          <h5 v-if="!isEdit">{{ email }}</h5>
          <Input v-else v-model="form.email" type="email" :isFill="errors.email"/>
        </div>

        <div>
          <span v-if="!isEdit">Регион:</span>
          <h5 v-if="!isEdit">{{ region }}</h5>
          <Select
              v-else
              v-model="form.region_id"
              label="Регион:"
              :options="regions"
              :isFill="errors.region"
          />
        </div>

        <div>
          <span v-if="!isEdit">Район/город:</span>
          <h5 v-if="!isEdit">{{ district }}</h5>
          <Select
              v-else
              v-model="form.district"
              label="Район/город:"
              :options="districts"
              :isFill="errors.city"
              :disabled="!form.region_id"
          />
        </div>
      </div>
    </div>

    <button class="profile-edit-btn" @click="edit">
      <IconEditPen/>
      Редактировать
    </button>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref, watch} from 'vue'
import IconEditPen from '@/components/icon/EditPen.vue'
import Input from '@/components/g/Input.vue'
import IconUserCircle from '@/components/icon/UserCircle.vue'
import {useProfileStore} from '@/store/profile/profile'
import {useSignUp} from '@/store/auth/sign-up'
import Select from '@/components/g/Select.vue'

const signUpStore = useSignUp()
const profileStore = useProfileStore()
const isEdit = ref(false)

const regions = computed(() => signUpStore.regionsList)
const districts = computed(() => signUpStore.districtList)

const form = reactive({
  fullName: '',
  email: '',
  region_id: null,
  district: null,
  avatar: null,
  avatarPreview: null
})

const errors = reactive({
  fullName: false,
  email: false,
  region: false,
  city: false
})

const fullName = computed(() => profileStore.userData?.full_name)
const region = computed(() => profileStore.userData?.region_name)
const district = computed(() => profileStore.userData?.district_name)
const email = computed(() => profileStore.userData?.email)

const backendAvatarUrl = computed(() => {
  const path = profileStore.userData?.avatar?.path
  return path ? `http://localhost:8989/${path}` : null
})

const edit = async () => {
  if (!isEdit.value) {
    form.fullName = fullName.value
    form.email = email.value
    form.region_id = profileStore.userData?.region_id
    form.district = profileStore.userData?.district_id
    isEdit.value = true
    return
  }

  if (!form.fullName) {
    errors.fullName = true
    setTimeout(() => (errors.fullName = false), 3000)
    return
  }

  if (!form.email) {
    errors.email = true
    setTimeout(() => (errors.email = false), 3000)
    return
  }

  try {
    const newForm = new FormData()
    newForm.append('full_name', form.fullName)
    newForm.append('email', form.email)

    if (form.region_id) newForm.append('region_id', form.region_id.id || form.region_id)
    if (form.district) newForm.append('district_id', form.district.id || form.district)
    if (form.avatar instanceof File) newForm.append('avatar', form.avatar)

    await profileStore.update(newForm)
    isEdit.value = false
  } catch (e) {
    console.log('Update error:', e)
  }
}

function onFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    form.avatarPreview = URL.createObjectURL(file)
    form.avatar = file
  }
  event.target.value = null
}

onMounted(async () => {
  await profileStore.getUser()
  await signUpStore.getRegions()
  if (profileStore.userData?.region_id) {
    await signUpStore.getDistricts(profileStore.userData.region_id)
  }
})
</script>
