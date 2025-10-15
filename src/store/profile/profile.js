import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useProfileStore = defineStore('profile', () => {
    const userData = ref({})
    const getUser = async (lang) => {
        const token = ref(localStorage.getItem('token'))
        const bearerToken = `Bearer ${token.value}`
        try {
            const res = await fetch(`http://localhost:8989/api/v1/get/user`, {
                method: "GET",
                headers: {
                    "Authorization": bearerToken,
                    "Accept-Language": lang || localStorage.getItem('lang') || "ru"
                },
            })
            const data = await res.json()
            if (!res.ok) {
                console.error(data)
                throw new Error("error message", data)
            }

            userData.value = data.data
            return data.data
        } catch (e) {
            console.error(e)
        }
    }

    const update = async (formData) => {
        try {
            const token = ref(localStorage.getItem('token'))
            const res = await fetch(`http://localhost:8989/api/v1/update/cabinet`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                },
                body: formData
            })

            const data = await res.json()

            if (!res.ok) {
                console.error(data)
                throw new Error("Error message", data)
            }
            await getUser()
            return data
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getUser,
        userData,
        update
    }
})
