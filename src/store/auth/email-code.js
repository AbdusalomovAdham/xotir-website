import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCheckCode = defineStore('email-code', () => {
    const token = ref(null)
    const checkCode = async (code) => {
        try {
            const token = ref(localStorage.getItem('token'))
            const codeCheck = { token: token.value, code }
            const res = await fetch('http://localhost:8989/api/v1/check-code', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(codeCheck)
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'email code error')
            }
            return token
        } catch (e) {
            console.error("forgot psw Error:", e)
            throw e
        }
    }

    return { checkCode, token }
})


