import { defineStore } from 'pinia'

export const useSignIn = defineStore('sign-in', () => {
    const signIn = async (email, password) => {
        try {
            const res = await fetch('http://localhost:8989/api/v1/sign-in', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Sign in error')
            }

            const token = data.token
            localStorage.setItem('token', token || "")
            return token
        } catch (e) {
            console.error("SignIn Error:", e)
            throw e
        }
    }

    return { signIn, }
})
