<template>
  <div class="add-memory">
    <div class="add-memory-main">
      <div class="add-memory-header">
        <IconLeftBack @click="returnBack" />
        <h3>Добавить память</h3>
      </div>
      <AddMemoryContent />
    </div>
  </div>
</template>

<script setup>
import IconLeftBack from '@/components/icon/LeftBack.vue'
import router from '@/routes'
import AddMemoryContent from "@/components/g/AddMemoryContent..vue";

const returnBack = () => {
  router.push('/profile/family-tree')
}


</script>