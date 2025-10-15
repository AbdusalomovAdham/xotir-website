<template>
    <div class="view-memory">
        <div class="view-memory-main">
            <div class="view-memory-header">
                <IconLeftBack @click="returnBack" />
                <h3>Генеалогическое древо</h3>
            </div>
            <ViewMemoryContent />
        </div>
    </div>
</template>

<script setup>
import IconLeftBack from '@/components/icon/LeftBack.vue'
import router from '@/routes'
import ViewMemoryContent from "@/components/g/ViewMemory.vue";
import { useFamilyTreeStore } from '@/store/profile/familyaTree'

const familyTreeStore = useFamilyTreeStore()
const returnBack = () => {
    router.push('/profile/family-tree')
    familyTreeStore.member = {}
}


</script>