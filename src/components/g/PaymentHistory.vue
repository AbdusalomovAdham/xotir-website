<template>
    <div class="payement-history mt-12">
        <table>
            <thead class="flex">
                <th>Сумма платежа</th>
                <th>Номер карты</th>
                <th>Время оплаты</th>
                <th>Квитанция об оплате</th>
            </thead>
            <tbody class="flex">
                <tr v-for="(payment, index) in $props.payments" :key="index" class="flex items-center">
                    <td>{{ payment.amount }}</td>
                    <td>{{ maskCardNumber(payment.card) }}</td>
                    <td>{{ payment.date }}</td>
                    <td><a :href="payment.receipt">Скачать</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const $props = defineProps({
    payments: {
        type: Array,
        default: () => { [] }
    }
})


const maskCardNumber = (input) => {
    if (!input) return ""

    const digits = input.toString().replace(/\D/g, "")
    if (digits.length <= 8) return digits.replace(/(\d{4})(\d+)/, (_, a, b) => a + " " + "*".repeat(b.length));
    const first = digits.slice(0, 4);
    const last = digits.slice(-4);
    return `${first} **** **** ${last}`;

}

</script>