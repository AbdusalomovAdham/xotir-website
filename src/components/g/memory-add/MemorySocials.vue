<template>
  <div class="member-socials flex">
    <h3 class="mb-4">Социальные сети:</h3>
    <div class="member-socials-link flex">
      <a href="#" class="pa-8 flex center">
        <IconTelegram/>
        Telegram
      </a>
      <a href="#" class="pa-8 flex center">
        <IconInstagram/>
        Instagram
      </a>
      <a href="#" class="pa-8 flex center">
        <IconFacebook/>
        Facebook
      </a>
    </div>
  </div>
</template>


<script setup>
import {computed} from 'vue';
import IconInstagram from '@/components/icon/Instagram.vue'
import IconFacebook from '@/components/icon/Facebook.vue'
import IconTelegram from '@/components/icon/Telegram.vue'

import {useFamilyTreeStore} from '@/store/profile/familyaTree'

</script>