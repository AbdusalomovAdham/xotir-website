import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const addGalleryStore = defineStore('gallery-store', () => {
    const token = ref(localStorage.getItem("token") || '')

    const addGallery = async (formData) => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/create/gallery`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                },
                body: formData
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error("error message", data)
            }

            return data
        } catch (e) {
            console.error(e)
        }
    }

    const images = ref([])
    const getGallery = async () => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/list/gallery`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                }
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error("error message", data)
            }
            images.value = data.data.image
            return images.value
        } catch (e) {
            console.error(e)
        }
    }

    const deleteImg = async (formData) => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/delete/gallery`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token.value}`,
                },
                body: formData
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Server error")
            }

            return data?.message
        } catch (e) {
            console.error("Delete error:", e.message)
        }
    }


    return {
        getGallery,
        addGallery,
        images,
        deleteImg,
    }
})
