<template>
  <div class="family-tree">
    <div class="family-tree-main">
      <div class="family-tree-title" @click="addMemory">
        <h3>Генеалогическое древо</h3>
        <div v-if="memoriyUsers?.length > 0">
          <IconPlus/>
          Добавить
        </div>
      </div>
      <div class="family-tree-body" v-if="!(memoriyUsers?.length > 0)">
        <div class="tree-body-content">
          <img src="@/assets/images/family-tree.png" alt="">
          <h3>Данные недоступны.</h3>
          <p>Добавьте данные, нажав кнопку Добавить.</p>
          <button class="tree-body-add-btn" @click="addMemory">
            <IconCreate/>
            Добавить
          </button>
        </div>
      </div>
    </div>


    <div class="family-tree-members">
      <div class="family-tree-sections">

        <div class="family" v-for="(familyMember, idx) in familyMembers" :key="idx">
<!--          <h1>Семья</h1>-->
          <h1>{{ familyMember.title }}</h1>
          <div class="family-members">
            <div class="member-card" v-for="(member, idx) in familyMembers[idx]?.members" :key="member.id"
                 @click="memberInfo(idx, member.id)">
              <div class="member-card-header">
                <div class="member-card-header-avatar">
                  <img v-if="member?.avatar" :src="'http://localhost:8989/' + member.avatar.path" alt="">
                  <IconUserCircle v-else/>
                  <div class="member-card-header-title">
                    <h3>{{ member?.full_name }}</h3>
                    <p>Член семьи: {{ member?.FamilyMember?.name }}</p>
                  </div>
                </div>
                <IconThreeDot @click.stop="upPanelActive(member.id)"/>
                <UpPanel v-if="upPanel === member.id" class="up-panel" @click.stop="upPanelActive(member.id)"
                         :cardId="member.id"/>
              </div>
              <div class="member-card-body">
                <span>Дата смерти: {{ member?.death_date }}</span>
                <p>Причина смерти: {{ getDeathCauseName(member?.death_cause_id) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPlus from '@/components/icon/Plus.vue'
import IconCreate from '@/components/icon/GalleryPlus.vue'
import IconUserCircle from '@/components/icon/UserCircle.vue'
import router from '@/routes'
import IconThreeDot from '@/components/icon/ThreeDot.vue'
import {computed, onMounted, ref} from 'vue'
import UpPanel from '@/components/g/UpPanel.vue'
import {useFamilyTreeStore} from '@/store/profile/familyaTree'

const upPanel = ref(null)
const familyTreeStore = useFamilyTreeStore()

const upPanelActive = (id) => {
  if (upPanel.value === id) {
    upPanel.value = null
    return
  }
  upPanel.value = id
  localStorage.setItem("member_id", id)
}

const memoriyUsers = computed(() => familyTreeStore.memoriyUsers)

const addMemory = () => {
  router.push('/profile/add-memory')
}

const memberInfo = async (idx, id) => {
  router.push('/profile/view-memory')
  localStorage.setItem("member_id", id)
  await familyTreeStore.getUserDetail(id)
}

const getDeathCauseName = (id) => {
  const found = familyTreeStore.causeOfDeath.find(item => item.id === id)
  return found ? found.name : "Неизвестная причина"
}

const familyMembers = computed(() =>
    memoriyUsers.value
)

const relative = computed(() =>
    memoriyUsers.value.filter(member => member.member_id === 2)
)

onMounted(() => {
  familyTreeStore.memoryMembers()
})
</script>