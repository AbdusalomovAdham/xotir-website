import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSignUp = defineStore('sign-up', () => {
    const selectOption = ref(null)
    const regionsList = ref([])

    const signUp = async (fullName, email, password, district, region) => {
        try {
            regionsList.value = []
            const res = await fetch('http://localhost:8989/api/v1/sign-up', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: fullName,
                    password: password,
                    region_id: region,
                    district_id: district,
                    email: email
                })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Sign up error')
            }

            const token = data.token
            localStorage.setItem('token', token || "")
            return token
        } catch (e) {
            console.error("SignIn Error:", e)
            throw e
        }
    }


    const getRegions = async (lang) => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/region/list`, {
                method: 'GET',
                headers: {
                    "Accept-Language": lang || localStorage.getItem("lang")
                }
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error("error message", data)
            }
            regionsList.value = data.data.results
            return data.data.results
        } catch (e) {
            console.error(e)
        }
    }

    const districtList = ref([])
    const getDistricts = async (id) => {
        try {
            districtList.value = []
            const res = await fetch(`http://localhost:8989/api/v1/district/${id}`, {
                method: 'POST',
                headers: {
                    "Accept-Language": localStorage.getItem('lang') || "ru"
                }
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error("error message", data)
            }
            districtList.value = data.data.results
            return data.data.results
        } catch (e) {
            console.error(e)
        }
    }

    return { signUp, getRegions, regionsList, getDistricts, districtList, selectOption }
})


