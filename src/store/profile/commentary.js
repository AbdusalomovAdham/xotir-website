import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const addCommentaryStore = defineStore('commentary', () => {
    const token = ref(localStorage.getItem("token") || '')
    const commentaryList = ref([])
    const getCommentaryList = async () => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/list/commentary`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token.value}`
                }
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error(data)
            }
            commentaryList.value = data.data
            return data.message
        } catch (e) {
            console.error(e)
        }
    }
    return {
        getCommentaryList,
        commentaryList

    }
})
