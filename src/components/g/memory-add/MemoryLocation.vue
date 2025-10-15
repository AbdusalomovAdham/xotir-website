<template>
  <div class="memory-location">
    <Select :label="'Регион:'" :options="regions" v-model="addMemoryStore.form.region_id"/>
    <Select :label="'Район/город:'" :options="districts" v-model="district"/>
    <Select :label="'Кладбище:'" :options="filtered" v-model="addMemoryStore.form.cemetery_id"/>
  </div>

  <div class="memory-location-about">
    <Input :label="'Место смерти:'" :rightIcon="IconLocation" v-model="addMemoryStore.form.death_place"/>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref, watch} from 'vue'
import Select from '@/components/g/Select.vue'
import IconLocation from '@/components/icon/Location.vue'
import Input from '@/components/g/Input.vue'
import {useSignUp} from '@/store/auth/sign-up'
import {useFamilyTreeStore} from '@/store/profile/familyaTree'
import {useAddMemory} from '@/store/addMemory/add-memory'

const signUpStore = useSignUp()
const familyTreeStore = useFamilyTreeStore()
const addMemoryStore = useAddMemory()

const regions = computed(() => signUpStore.regionsList)
const districts = computed(() => signUpStore.districtList)
const district = ref([])
const cemeterySelect = ref([])

const cemeteries = ref([
  {id: 1, name: "Chig‘atoy qabristoni", district_id: 1},
  {id: 2, name: "Qo‘yliq qabristoni", district_id: 2},
  {id: 3, name: "Yunusobod qabristoni", district_id: 1}
])

watch(() => addMemoryStore.form.region_id, async (newRegion) => {
  addMemoryStore.form.district_id = null
  addMemoryStore.form.cemetery_id = null
  if (newRegion) await signUpStore.getDistricts(newRegion)
  else signUpStore.districtList = []
})

const filtered = computed(() => cemeterySelect.value)

watch(() => district.value, async (newDistrict) => {
  addMemoryStore.form.cemetery_id = null
  if (newDistrict?.id) {
    cemeterySelect.value = cemeteries.value.filter(c => c.district_id === newDistrict?.id)
    addMemoryStore.form.district_id = newDistrict?.id || null
  }
})

onMounted(() => {
  signUpStore.getRegions()
})
</script>
