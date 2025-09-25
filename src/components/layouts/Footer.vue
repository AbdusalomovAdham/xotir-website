<template>
    <footer class="footer" id="footer">
        <div class="container">
            <div class="footer-item">
                <div class="footer-main">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <Logo />
                            <span class="footer-logo-text">ЦИФРОВАЯ ПАМЯТЬ</span>
                        </div>

                        <div class="footer-menu">
                            <ul class="footer-menu-rigth">
                                <li><a href="#how-it-work" @click.prevent="scrollToSection('how-it-work')">Как это
                                        работает?</a></li>
                                <li><a href="#advantages"
                                        @click.prevent="scrollToSection('advantages')">Преимущества</a></li>
                                <li><a href="#pricing" @click.prevent="scrollToSection('pricing')">Тарифы</a></li>
                            </ul>
                            <ul class="footer-menu-left">
                                <li><a href="#user-videos" @click.prevent="scrollToSection('user-videos')">Пользовательские видео</a></li>
                                <li><a href="#frequently-questions"
                                        @click.prevent="scrollToSection('frequently-questions')">FAQ</a></li>
                                <li><a href="#footer" @click.prevent="scrollToSection('footer')">Контакты</a></li>
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
            </div>
        </div>
    </footer>
</template>

<script setup>
import Logo from '@/components/icon/Logo.vue'
import CallingPhone from '@/components/icon/CallingPhone.vue'
import Message from '@/components/icon/Message.vue'

const scrollToSection = (url) => {
    const section = document.getElementById(url)
    if (section) {
        const top = section.offsetTop
        window.scrollTo({
            top,
            behavior: 'smooth' // browser smooth
        })
    }
}
</script>