import {defineStore} from "pinia";
import BannerImg from '@/assets/images/banner.png'
import {reactive, ref} from "vue";

export const useFamilyTreeStore = defineStore('family-tree', () => {
    const member = ref({})
    const memoriyUsers = ref([])

    const token = ref(localStorage.getItem('token'))
    const memoryMembers = async () => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/list/memory`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                }
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error('Error message', data)
            }

            memoriyUsers.value = data.data

            return data
        } catch (e) {
            console.error(e)
        }
    }

    const deleteMember = async (id) => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/delete/memory/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token.value}`
                }
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error('Error message', data)
            }
            await memoryMembers()
            return data
        } catch (e) {
            console.error(e)
        }
    }


    const getUserDetail = async (id) => {
        try {
            const memberId = localStorage.getItem("member_id") || id
            const res = await fetch(`http://localhost:8989/api/v1/get/memory/${memberId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.value}`
                }
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error("Error message", data)
            }

            member.value = data.data

            return data
        } catch (e) {
            console.error(e)
        }
    }

    const causeOfDeath = ref([
        {id: 1, name: "Сердечный приступ"},
        {id: 2, name: "Инсульт"},
        {id: 3, name: "Онкологическое заболевание (рак)"},
        {id: 4, name: "Сахарный диабет (осложнения)"},
        {id: 5, name: "Дыхательная недостаточность"},
        {id: 6, name: "Гипертоническая болезнь (высокое давление)"},
        {id: 7, name: "Болезни сердца (инфаркт, аритмия и др.)"},
        {id: 8, name: "Несчастный случай (ДТП, падение и т.д.)"},
        {id: 9, name: "Старость (естественные причины)"},
        {id: 10, name: "Инфекционные заболевания (например, COVID-19)"},
        {id: 11, name: "Рак лёгких или пневмония"},
        {id: 12, name: "Болезни печени (цирроз, гепатит)"},
        {id: 13, name: "Почечная недостаточность"},
        {id: 14, name: "Осложнения при беременности или родах"},
        {id: 15, name: "Самоубийство"},
        {id: 16, name: "Отравление лекарствами или токсинами"},
        {id: 17, name: "Аллергическая реакция (анафилактический шок)"},
        {id: 18, name: "Кровотечение или травма"},
        {id: 19, name: "Остановка сердца"},
        {id: 20, name: "Неизвестная причина"}
    ])

    const socialNetworks = ref([
        {id: 1, name: "Instagram"},
        {id: 2, name: "Telegram"},
        {id: 3, name: "YouTube"}
    ])

    const memberTypes = ref([])
    const getMemberList = async () => {
        try {
            const res = await fetch(`http://localhost:8989/api/v1/list/member`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token.value}`
                },
            })

            if (!res.ok) {
                throw new Error(`Error message ${res}`)
            }

            const data = await res.json()
            memberTypes.value = data.data

            return data
        } catch (e) {
            console.error(e)
        }
    }
    return {
        memoriyUsers,
        // addMember,
        member,
        memoryMembers,
        deleteMember,
        getUserDetail,
        socialNetworks,
        causeOfDeath,
        getMemberList,
        memberTypes
    }
})
