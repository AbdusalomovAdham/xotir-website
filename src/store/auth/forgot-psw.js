import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useForgotPsw = defineStore('forgot-psw', () => {
    const userEmail = ref("")
    const forgotPsw = async (email) => {
        try {
            userEmail.value = email
            const res = await fetch('http://localhost:8989/api/v1/forgot-psw', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'forgot-psw error')
            }

            const token = data.token
            localStorage.setItem('token', token || "")
            return token
        } catch (e) {
            console.error("forgot psw Error:", e)
            throw e
        }
    }

    return { forgotPsw, userEmail }
})
