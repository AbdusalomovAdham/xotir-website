<template>
    <div class="up-panel pa-12 radius-12 flex">
        <div class="up-panel-edit flex pb-12 mb-12">
            <IconEditPen />
            <span>Редактировать</span>
        </div>
        <div class="up-panel-delete flex">
            <IconDelete />
            <span>Удалить</span>
        </div>
    </div>
</template>

<script setup>
import IconEditPen from '@/components/icon/Edit.vue'
import IconDelete from '@/components/icon/Delete.vue'
</script>