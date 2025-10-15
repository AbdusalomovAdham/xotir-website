<template>
  <div class="wrapper">
        <span class="label" :class="{ active: !isPublic }" @click="isPublicFunc">
            Скрытый
        </span>

    <div class="toggle" :class="{ active: isPublic }" @click="isPublicFunc">
      <div class="circle" :class="{ right: isPublic }"></div>
    </div>

    <span class="label" :class="{ active: isPublic }" @click="isPublicFunc">
            Публичный
        </span>
  </div>
</template>

<script setup>
import {onMounted, ref, defineProps, watch, defineEmits} from "vue";
import {useAddMemory} from "@/store/addMemory/add-memory";

const addMemoryStore = useAddMemory()
const emit = defineEmits(['update:memberStatus'])

const isPublic = ref(false)

const isPublicFunc = () => {
  isPublic.value = !isPublic.value
  addMemoryStore.form.memory_status = isPublic.value
  emit('update:memberStatus', isPublic.value)
}
const $props = defineProps({
  memberStatus: {
    type: Boolean,
    default: false
  }
})


watch(
    () => $props.memberStatus,
    (newVal) => {
      isPublic.value = !!newVal
    },
    {immediate: true}
)

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  background: #f2f5fa;
  border-radius: 12px;
  padding: 6px 12px;
  width: 277px;
  height: 52px;
}

.label {
  cursor: pointer;
  font-weight: 500;
  color: #777;
  margin: 0 6px;
  transition: color 0.3s;
  font-size: 18px;
}

.label.active {
  color: #020A16;
}

.toggle {
  position: relative;
  width: 40px;
  height: 24px;
  background: #d1d5db;
  border-radius: 999px;
  cursor: pointer;
  margin: 0 6px;
  transition: background 0.3s;
}

.toggle.active {
  background: #21A968;
}

.circle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}

.circle.right {
  transform: translateX(13px);
}
</style>