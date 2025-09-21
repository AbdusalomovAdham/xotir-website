<template>
    <div class="family-tree">
        <div class="family-tree-main">
            <div class="family-tree-title" @click="addMemory">
                <h3>Генеалогическое древо</h3>
                <div v-if="memoriyUsers.length">
                    <IconPlus />
                    Добавить
                </div>
            </div>
            <div class="family-tree-body" v-if="!memoriyUsers.length">
                <div class="tree-body-content">
                    <img src="@/assets/images/family-tree.png" alt="">
                    <h3>Данные недоступны.</h3>
                    <p>Добавьте данные, нажав кнопку Добавить.</p>
                    <button class="tree-body-add-btn" @click="addMemory">
                        <IconCreate />
                        Добавить
                    </button>
                </div>
            </div>
        </div>

        <div class="family-tree-members">
            <div class="member-card" v-for="(member, idx) in memoriyUsers" :key="idx" @click="memberInfo(idx)">
                <div class="member-card-header">
                    <div class="member-card-header-avatar">
                        <img :src="member.avatar" alt="">
                        <div class="member-card-header-title">
                            <h3>{{ member.fullName }}</h3>
                            <p>Член семьи: {{ member.familyMember }}</p>
                        </div>
                    </div>
                    <IconThreeDot @click="upPanelActive(idx)" />
                    <UpPanel v-if="upPanel === idx" class="up-panel" />
                </div>
                <div class="member-card-body">
                    <span>Дата смерти: {{ member.deathDate }}</span>
                    <p>Причина смерти: {{ member.deathReason }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconPlus from '@/components/icon/Plus.vue'
import IconCreate from '@/components/icon/GalleryPlus.vue'
import router from '@/routes'
import IconThreeDot from '@/components/icon/ThreeDot.vue'
import { computed, ref } from 'vue'
import UpPanel from '@/components/g/UpPanel.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'

const upPanel = ref(null)
const familyTreeStore = useFamilyTreeStore()

const upPanelActive = (idx) => {
    if (upPanel.value === idx) {
        upPanel.value = null
        return
    }
    upPanel.value = idx
}

const memoriyUsers = computed(() => familyTreeStore.memoriyUsers)
const imgUrls = ref([])

const addMemory = () => {
    router.push('/profile/add-memory')
}

const memberInfo = (idx) => {
    router.push('/profile/add-memory')

    familyTreeStore.member = familyTreeStore.memoriyUsers[idx]
    console.log('familyTreeStore.member', familyTreeStore.member)

}
</script>