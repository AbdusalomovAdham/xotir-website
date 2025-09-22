<template>
    <div class="language-select" ref="selectRef">
        <div class="selected" @click="toggleDropdown">
            <img :src="selectedOption.flag" alt="flag" class="flag" />
            <span>{{ selectedOption.label }}</span>
            <IconDown v-if="!isOpen" @click.stop="toggleDropdown" />
            <IconUp v-else @click.stop="toggleDropdown" />
        </div>

        <ul v-if="isOpen" class="options">
            <li v-for="option in options" :key="option.value" @click.stop="selectOption(option)">
                <img :src="option.flag" alt="flag" class="flag" />
                <span>{{ option.label }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import IconDown from "@/components/icon/Down.vue"
import IconUp from "@/components/icon/Up.vue"

const selectRef = ref(null)
const options = ref([
    { value: "ru", label: "Русский", flag: "https://flagcdn.com/w20/ru.png" },
    { value: "uz", label: "Oʻzbekcha", flag: "https://flagcdn.com/w20/uz.png" },
    { value: "en", label: "English", flag: "https://flagcdn.com/w20/gb.png" }
])

const selectedOption = ref(options.value[0])
const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    selectedOption.value = option
    isOpen.value = false
}

const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-select {
    position: relative;
    width: 180px;
    cursor: pointer;
    user-select: none;
}

.selected {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 6px;
    background: #fff;
    font-weight: 400;
    font-size: 20px;
}

.flag {
    width: 20px;
    height: 14px;
    border-radius: 2px;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 4px;
    list-style: none;
    padding: 0;
    font-weight: 400;
    font-size: 20px;
}

.options li {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
}

.options li:hover {
    background: #f5f5f5;
}
</style>