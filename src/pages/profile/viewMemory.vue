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

const returnBack = () => {
    router.push('/profile/family-tree')
}


</script>