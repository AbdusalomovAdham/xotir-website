<template>
  <div class="edit-memory-location">
    <Select :label="'Регион:'" :options="regions" v-model="editMemoryStore.originalData.region_id"/>
    <Select :label="'Район/город:'" :options="districts" v-model="editMemoryStore.originalData.district"/>
    <Select :label="'Кладбище:'" :options="cemeterySelect" v-model="editMemoryStore.originalData.cemetery"/>
  </div>

  <div class="edit-memory-location-about">
    <Input :label="'Место смерти:'" :rightIcon="IconLocation" v-model="editMemoryStore.originalData.death_place"/>
  </div>
</template>

<script setup>
import {computed, onMounted, watch, ref} from "vue"
import Select from "@/components/g/Select.vue"
import Input from "@/components/g/Input.vue"
import IconLocation from "@/components/icon/Location.vue"
import {useSignUp} from "@/store/auth/sign-up"
import {useEditMemory} from "@/store/profile/edit-memory"

const signUpStore = useSignUp()
const editMemoryStore = useEditMemory()

const regions = computed(() => signUpStore.regionsList)
const districts = computed(() => signUpStore.districtList)
const cemeterySelect = ref([])

const cemeteries = ref([
  {id: 1, name: "Chig‘atoy qabristoni", district_id: 1},
  {id: 2, name: "Qo‘yliq qabristoni", district_id: 2},
  {id: 3, name: "Yunusobod qabristoni", district_id: 3}
])

// watch region
watch(() => editMemoryStore.originalData.region_id, async (newRegion) => {
  editMemoryStore.originalData.district = null
  editMemoryStore.originalData.cemetery = null
  cemeterySelect.value = []

  if (newRegion) await signUpStore.getDistricts(newRegion)
  else signUpStore.districtList = []
})

let isInitialLoad = true

watch(() => editMemoryStore.originalData.district, (newDistrict) => {
  if (isInitialLoad) return

  editMemoryStore.originalData.cemetery = null

  if (newDistrict?.id) {
    cemeterySelect.value = cemeteries.value.filter(c => c.district_id === newDistrict.id)
  } else {
    cemeterySelect.value = []
  }
})

onMounted(async () => {
  await editMemoryStore.getUserDetail()
  await signUpStore.getRegions()
  await signUpStore.getDistricts(editMemoryStore.originalData.region_id)

  if (editMemoryStore.originalData.district?.id) {
    cemeterySelect.value = cemeteries.value.filter(
        c => c.district_id === editMemoryStore.originalData.district.id
    )
  }

  if (!editMemoryStore.originalData.cemetery && editMemoryStore.originalData.cemetery_name) {
    const found = cemeteries.value.find(c => c.name === editMemoryStore.originalData.cemetery_name)
    if (found) editMemoryStore.originalData.cemetery = {id: found.id, name: found.name}
  }

  isInitialLoad = false
})
</script>
