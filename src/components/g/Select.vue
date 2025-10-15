<template>
  <div class="select" ref="selectRef">
    <label v-if="label">{{ label }}</label>
    <div class="custom-select" :class="{ disabled }" @click="toggleDropdown">

      <div class="selected"
           :class="{ open: isOpen, 'has-value': selectedOption, error: !selectedOption && isFill }">
        {{ selectedOption || placeholder }}
        <IconUp v-if="isOpen"/>
        <IconDown v-else/>
      </div>

      <ul v-if="isOpen" class="options">
        <li v-for="option in options" :key="option.id" @click.stop="selectOption(option)"
            :class="{ active: isActive(option) }">
          <img v-if="option.flag" :src="option.flag" alt=""/>
          {{ option.name ? option.name : option.label }}
        </li>
      </ul>

    </div>
    <span class="select-error" v-if="isFill && !selectedOption">должен выбрать</span>
  </div>
</template>

<script setup>
import {ref, defineProps, defineEmits, onMounted, onBeforeUnmount, watch} from 'vue'
import IconDown from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'

const props = defineProps({
  modelValue: [String, Number, Object, null],
  options: {type: Array, default: () => []},
  placeholder: {type: String, default: 'Выбрать'},
  label: String,
  isFill: Boolean,
  disabled: Boolean
})

const emit = defineEmits(['update:modelValue'])
const selectRef = ref(null)
const isOpen = ref(false)
const selectedOption = ref(null)

const toggleDropdown = () => {
  if (!props.disabled) isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  let value

  if (props.label === 'Район/город:' || props.label === 'Кладбище:') {
    value = {id: option.id, name: option.name}
    selectedOption.value = option.name
  } else {
    value = option.id
    selectedOption.value = option.name ? option.name : option.label
  }

  emit('update:modelValue', value)
  isOpen.value = false
}

const isActive = (option) => {
  if (!props.modelValue) return false
  if (props.label === 'Район/город:' || props.label === 'Кладбище:')
    return props.modelValue?.id === option.id

}


watch(
    () => props.modelValue,
    (newVal) => {
      if (!newVal) {
        selectedOption.value = null
        return
      }

      if (props.label === 'Район/город:' || props.label === 'Кладбище:') {
        selectedOption.value = newVal?.name
        return
      }

      const opt = props.options.find(o => String(o.id) === String(newVal))
      selectedOption.value = opt ? (opt.name || opt.label) : null
    },
    {immediate: true}
)


const handleClickOutside = (event) => {
  if (selectRef.value && !selectRef.value.contains(event.target)) isOpen.value = false
}

onMounted(() => document.addEventListener("click", handleClickOutside))
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside))
</script>