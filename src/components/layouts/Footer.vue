<template>
    <footer class="footer">
        <div class="footer-main">

            <div class="footer-left">
                <div class="footer-logo">
                    <Logo />
                    <span class="footer-logo-text">ЦИФРОВАЯ ПАМЯТЬ</span>
                </div>

                <div class="footer-menu">
                    <ul class="footer-menu-rigth">
                        <li><a href="#">Как это работает?</a></li>
                        <li><a href="#">Преимущества</a></li>
                        <li><a href="#">Тарифы</a></li>
                    </ul>
                    <ul class="footer-menu-left">
                        <li><a href="#">Партнеры</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>

            </div>

            <div class="footer-right">
                <ul class="footer-contacts">
                    <li>
                        <CallingPhone />
                        +998 (90) 123-45-67
                    </li>
                    <li>
                        <CallingPhone />
                        +998 (90) 123-45-67
                    </li>
                    <li>
                        <Message />
                        xotira@gmail.com
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© Цифровая Память 2025, Все права защищены</p>
            <p>Разработчик: Online Service Group</p>
        </div>
    </footer>
</template>

<script setup>
import Logo from '@/components/icon/Logo.vue'
import CallingPhone from '@/components/icon/CallingPhone.vue'
import Message from '@/components/icon/Message.vue'
</script>