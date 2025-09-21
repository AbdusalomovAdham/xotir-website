<template>
    <div class="profile-pricing">
        <div class="profile-pricing-main">
            <div class="profile-pricing-title mb-16">
                <h3>Тарифы и подписки</h3>
            </div>

            <div class="payment-section pa-16 radius-12 flex space-between items-center">
                <div class="payment-section-main flex">
                    <div class="pricing-type mb-12">
                        <p>Ваш тарифный план:</p>
                        <h5>
                            Стандарт
                            <span>(15 0000/месяц)</span>
                        </h5>
                    </div>
                    <div class="pricing-type-edit flex">
                        <div class="pricing-type-info flex items-center">
                            <IconInfo />
                            <router-link to="#">Тарифные условия</router-link>
                        </div>
                        <div class="pricing-type-change flex items-center">
                            <IconEdit />
                            <router-link to="#">Изменение тарифа</router-link>
                        </div>
                    </div>
                </div>
                <button class="bg-btn flex center radius-12">
                    <IconTicketPayment />
                    Оплатить
                </button>
            </div>

            <div class="pricing-payments-history ">
                <div class="pricing-payments-history-title flex space-between items-center">
                    <h3>История платежей</h3>
                    <div class="flex items-center">
                        <span>Все платежи</span>
                        <IconRight />
                    </div>
                </div>
                <PaymentHistory :payments="payments" />
            </div>
        </div>
    </div>
</template>

<script setup>
import IconInfo from '@/components/icon/Info.vue'
import IconEdit from '@/components/icon/Edit.vue'
import PaymentHistory from '@/components/g/PaymentHistory.vue'
import IconTicketPayment from '@/components/icon/TicketPayment.vue'
import IconRight from '@/components/icon/Right.vue'
import { ref } from 'vue'


const payments = ref([
    {
        amount: "15 000 so'm",
        card: "9860 1234 1234 1232",
        date: "09.08.2025 / 10:24",
        receipt: "#", // fayl linki
    },
    {
        amount: "15 000 so'm",
        card: "9860 4321 4232 1232",
        date: "01.07.2025 / 14:45",
        receipt: "#",
    },
    {
        amount: "15 000 so'm",
        card: "9860 4321 1234 1232",
        date: "24.06.2025 / 00:15",
        receipt: "#",
    },
]);


</script>