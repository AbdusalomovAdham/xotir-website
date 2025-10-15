<template>
  <div class="edit-memory">
    <div class="edit-memory-main">
      <div class="edit-memory-header">
        <IconLeftBack @click="returnBack"/>
        <h3>Редактировать память</h3>
      </div>
      <EditMemoryContent/>
    </div>
  </div>
</template>

<script setup>
import IconLeftBack from '@/components/icon/LeftBack.vue'
import router from '@/routes'
import EditMemoryContent from "@/components/g/EditMemoryContent.vue";

const returnBack = () => {
  router.push('/profile/view-memory')
}
</script>