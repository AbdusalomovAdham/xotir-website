import { defineStore } from 'pinia'

export const useUpdatePsw = defineStore('update-psw', () => {
    const updatePsw = async (password) => {
        try {
            const token = localStorage.getItem('token')
            const res = await fetch('http://localhost:8989/api/v1/update-psw', {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password: password.value ?? password })

            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Update password error')
            }
            return data
        } catch (e) {
            console.error("UpdatePsw Error:", e)
            throw e
        }
    }

    return { updatePsw }
})
