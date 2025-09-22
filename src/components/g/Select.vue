<template>
    <div class="select" ref="selectRef">
        <label v-if="$props.label">{{ $props.label }}</label>
        <div class="custom-select" @click="toggleDropdown">
            <div class="selected"
                :class="{ open: isOpen, 'has-value': selectedOption, 'error': !selectedOption && isFill }">
                {{ selectedOption ? selectedOption.label : placeholder }}
                <IconUp v-if="isOpen" />
                <IconDown v-else />
            </div>
            <ul v-if="isOpen" class="options">
                <li v-for="option in $props.options || options" :key="option.value" @click.stop="selectOption(option)"
                    :class="{ active: option.value === selectedOption?.value }">
                    <img :src="option.flag" alt="" v-if="option.flag">
                    {{ option.label }}
                </li>
            </ul>
        </div>
        <span class="select-error" v-if="isFill && !selectedOption">должен выбрать</span>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue"
import IconDown from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: "Выбрать",
    },
    label: {
        type: String,
        default: ""
    },
    isFill: {
        type: Boolean,
        default: () => { }
    }
})

const selectRef = ref(null)

const options = ref([
    { label: "Toshkent" },
    { label: "Buxoro" },
    { label: "Andijon" }
])

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const selectedOption = ref(null)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    selectedOption.value = option
    emit("update:modelValue", option.value)
    isOpen.value = false
}

// tashqariga bosganda yopish
const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside)
})
</script>
