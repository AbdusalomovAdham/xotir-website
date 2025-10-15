import {defineStore} from "pinia"
import {reactive, ref} from "vue"

export const useEditMemory = defineStore("edit-memory", () => {
        const member = ref({})
        const originalData = reactive({})
        const form = reactive({})
        const token = ref(localStorage.getItem("token"))

        const getUserDetail = async (id) => {
            try {
                const memberId = ref(localStorage.getItem("member_id") || id)
                const res = await fetch(`http://localhost:8989/api/v1/get/memory/${memberId.value}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                })

                const data = await res.json()
                if (!res.ok) throw new Error(JSON.stringify(data))

                member.value = data.data

                Object.assign(originalData, data.data)
                Object.assign(form, data.data)

                originalData.district = {id: data.data.district_id, name: data.data.district_name}
                form.district = {id: data.data.district_id, name: data.data.district_name}
                form.cemetery = {id: data.data.cemetery_id, name: data.data.cemetery_name}
                originalData.cemetery_id = data.data.cemetery_id
                form.cemetery_id = data.data.cemetery_id
                return data
            } catch (e) {
                console.error("getUserDetail error:", e)
            }
        }


        const getChangedData = () => {
            const diff = {}

            for (const key in form) {
                const newVal = form[key]
                const oldVal = originalData[key]
                if (newVal !== oldVal) {
                    diff[key] = oldVal
                }
                if (key === 'memory_status') {
                    diff['memory_status'] = newVal
                }
                if (key === "district") {
                    diff["district_id"] = oldVal.id
                }
                if (key === "cemetery" && newVal?.id !== oldVal?.id) {
                    diff["cemetery_id"] = newVal?.id
                }
            }

            return diff
        }

        const editMemory = async (id) => {
            const changedData = getChangedData()

            if (Object.keys(changedData).length === 0) return

            const memberId = localStorage.getItem("member_id") || id
            const formData = new FormData()

            // AVATAR
            if (originalData.avatarObject) {
                formData.append("avatar", originalData.avatarObject)
            }


            // FORM DATA
            Object.entries(changedData).forEach(([key, val]) => {
                if (typeof val !== "object") formData.append(key, val)
            })


            try {
                const res = await fetch(`http://localhost:8989/api/v1/update/memory/${memberId}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                    body: formData,
                })

                if (!res.ok) {
                    const errorText = await res.text()
                    throw new Error(`Server error: ${errorText}`)
                }

                const data = await res.json()
                return data?.message
            } catch (e) {
                console.error("editMemory error:", e)
            }

        }


        // image
        const AddImage = async (formData) => {
            try {
                const id = ref(localStorage.getItem("member_id"))
                const res = await fetch(`http://localhost:8989/api/v1/create/image/${id.value}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })
                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()
            } catch (e) {
                console.error(e)
            }
        }

        const RemoveImage = async (formData) => {
            try {
                const res = await fetch(`http://localhost:8989/api/v1/delete/image`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })
                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()
                return data
            } catch (e) {
                console.error(e)
            }
        }


        // video
        const AddVideo = async (formData) => {
            try {
                const id = ref(localStorage.getItem("member_id"))
                const res = await fetch(`http://localhost:8989/api/v1/upload/video/${id.value}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })
                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()
            } catch (e) {
                console.error(e)
            }
        }

        const RemoveVideo = async (formData) => {
            try {
                const res = await fetch(`http://localhost:8989/api/v1/delete/video`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })
                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()
                return data
            } catch (e) {
                console.error(e)
            }
        }


        // audio
        const AddAudio = async (formData) => {
            try {
                const id = ref(localStorage.getItem("member_id"))
                const res = await fetch(`http://localhost:8989/api/v1/create/audio/${id.value}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })
                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()

            } catch (e) {
                console.error(e)
            }
        }

        const RemoveAudio = async (formData) => {
            try {
                const res = await fetch(`http://localhost:8989/api/v1/delete/audio`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token.value}`
                    },
                    body: formData,
                })

                const data = await res.json()

                if (!res.ok) throw new Error(`Error message: ${data}`)
                await getUserDetail()
                return data
            } catch (e) {
                console.error(e)
            }
        }


        return {
            getUserDetail,
            editMemory,
            getChangedData,
            originalData,
            form,
            AddImage,
            RemoveImage,
            AddVideo,
            AddAudio,
            RemoveAudio,
            RemoveVideo,
        }
    }
)
