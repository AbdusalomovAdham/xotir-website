import {defineStore} from 'pinia'
import {reactive, ref} from 'vue'

export const useAddMemory = defineStore('add-memory', () => {
    const form = reactive({
        avatar: null,
        full_name: null,
        birth_place: null,
        family_member_id: null,
        birth_date: null,
        bio_headline: null,
        bio: null,
        region_id: null,
        district_id: null,
        cemetery_id: null,
        death_place: null,
        death_date: null,
        death_cause: null,
        social_media: [],
        memory_status: null,
        images: [],
        videos: [],
        audio: [],
        useAddMemory,
        member_id: null
    })

    const validateForm = () => {
        for (const key in form) {
            if (["social_media", "images", "videos", "audio", "memory_status"].includes(key)) continue

            if (form[key] === null || form[key] === "") {
                alert(`Пожалуйста, заполните поле ${key}!`)
                return false
            }
        }
        return true
    }




    const createMemory = async () => {

        const formData = new FormData()
        formData.append('avatar', form.avatar)
        formData.append("full_name", form.full_name)
        formData.append('birth_place', form.birth_place)
        formData.append('family_member_id', form.family_member_id)
        formData.append('birth_date', form.birth_date)
        formData.append('bio_headline', form.bio_headline)
        formData.append('bio', form.bio)
        formData.append('region_id', form.region_id)
        formData.append('district_id', form.district_id)
        formData.append('cemetery_id', form.cemetery_id.id)
        formData.append('death_place', form.death_place)
        formData.append('death_date', form.death_date)
        formData.append('death_cause_id', form.death_cause)
        formData.append('memory_status', form.memory_status)
        formData.append("member_id", form.member_id)

        console.log("member_id", form.member_id, formData.get("member_id"))
        form.images.forEach((file) => {
            formData.append("images", file)
        })

        form.videos.forEach((file) => {
            console.log("videos", file)
            formData.append("videos", file)
        })

        form.audio.forEach((file) => {
            formData.append("audio", file)
        })
        for (const [key, value] of formData.entries()) {
            console.log(key, value)
        }
        try {
            const token = ref(localStorage.getItem('token'))
            const res = await fetch(`http://localhost:8989/api/v1/create/memory`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                },
                body: formData
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error("Error message", data.message)
            }

            return data
        } catch (e) {
            console.error(e)
        }
    }


    return {form, createMemory, validateForm}
})


