<template>
  <section class="trusted-by-section flex center">
    <div class="container">
      <div class="trusted-by-section_inner">
        <div class="trusted-by-section-main">

          <div class="trusted-by-title">
            Нам доверяют
          </div>

          <div class="trusted-by-contents" ref="scrollContainer">

            <div class="trusted-by-content">
              <div class="content-about">
                <IconQuote />
                <p>Я подарила это своим братьям и сёстрам на Рождество, чтобы почтить память наших родителей.
                  Это
                  настоящий
                  подарок – иметь это, чтобы вспоминать о них каждый раз, когда мы посещаем их могилу. Этот
                  продукт
                  идеален, и мы очень благодарны за него. Спасибо.</p>
              </div>

              <div class="trusted-user-name">
                <IconDash />
                Зиёдуллаев Тулкин
              </div>
            </div>

            <div class="trusted-by-content">
              <div class="content-about">
                <IconQuote />
                <p>Мой прекрасный 21-летний сын скончался после продолжительной болезни в 2010 году. Мне
                  посчастливилось
                  сохранить несколько видеороликов о его взрослении, а также несколько значимых фотографий,
                  сделанных
                  под нашу любимую песню, которые звучали на его похоронах.</p>
              </div>

              <div class="trusted-user-name">
                <IconDash />
                Алимова Алиса
              </div>
            </div>

            <div class="trusted-by-content">
              <div class="content-about">
                <IconQuote />
                <p>Это просто чудесно! Возможность поделиться историей нашей дочери на её надгробии, просто
                  используя
                  камеру телефона, просто потрясает! Это тронуло многих.</p>
              </div>

              <div class="trusted-user-name">
                <IconDash />
                Нуриддинов Мухаммад
              </div>
            </div>

            <div class="trusted-by-content">
              <div class="content-about">
                <IconQuote />
                <p>Это просто чудесно! Возможность поделиться историей нашей дочери на её надгробии, просто
                  используя
                  камеру телефона, просто потрясает! Это тронуло многих.</p>
              </div>

              <div class="trusted-user-name">
                <IconDash />
                Нуриддинов Мухаммад
              </div>
            </div>
          </div>

          <div class="trusted-by-action">
            <IconLeft @click="scrollLeft" />
            <IconRightRounded @click="scrollRight" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import IconQuote from '@/components/icon/Quote.vue'
import IconDash from '@/components/icon/Dash.vue'
import IconRightRounded from '@/components/icon/RightRounded.vue'
import IconLeft from '@/components/icon/Left.vue'


const scrollContainer = ref(null)

const scrollLeft = () => {
  scrollContainer.value.scrollLeft -= 480
}

const scrollRight = () => {
  scrollContainer.value.scrollLeft += 480
}
</script>