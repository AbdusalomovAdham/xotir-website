import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const menuBarStore = defineStore('right-bar', () => {
    const isClose = ref(false)

    return {
        isClose
    }
})
