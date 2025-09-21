import { defineStore } from "pinia";
import BannerImg from '@/assets/images/banner.png'
import { ref } from "vue";

export const useFamilyTreeStore = defineStore('family-tree', () => {
    const member = ref({})
    const memoriyUsers = [
        {
            avatar: BannerImg,
            fullName: "Абдурасул Юсупов",
            familyMember: "Ота",
            birthPlace: "Ташкент",
            birthDate: "15.03.1965",
            title: "Ҳурматли инсон",
            bio: "У киши бутун ҳаётини оиласи ва фарзандларига бағишлаган.",
            region: "Тошкент вилояти",
            district: "Чилонзор тумани",
            cemetery: "Мирзо Улуғбек қабристони",
            deathPlace: "Тошкент шаҳри",
            deathDate: "12.07.2020",
            deathReason: "Юрак хуружи",
            socialLinks: "facebook.com/abdurasul",
            status: true
        },
    ]
    return {
        memoriyUsers,
        member
    }
})