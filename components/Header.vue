<template>
    <div class="header_nav bottom_line">
        <div class="header_logo">
            <Logo v-on:click.native="logoBtn" />
        </div>
        <ul 
            v-on:click="menuBtn" 
            class="header_menuBtn"
            v-bind:class="{ active:modalMenuState }"
        >
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div 
            class="modalMenu"
            v-bind:class="{ open:modalMenuState }"
            v-on:click="logoBtn"
        >
            <ul class="mainMenu">
                <li><nuxt-link v-on:click.native="menuBtn" to="/about">About</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/works">Works</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/gardener">Gardener</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/contact">Contact</nuxt-link></li>                
            </ul>
            <span class="subTitle topLeft">
                <b>Design studio.</b><br>
                Graphic, Editorial, UX, Develop
            </span>
            <span class="subTitle topRight">
                <b>Before</b><br>
                PINSQUARE, studioBE
            </span>
            <span class="subTitle topCenter">
                <b>Slow Glow,</b><br>
                Do not stop.
            </span>
            <span class="subTitle bottomCenter">
                <b>GARDENER©2021</b><br>
                All rights reserved.
            </span>
            <span class="subTitle bottomLeft">
                <b>Hi there.</b><br>
                <a class="hoverLine" href="https://www.instagram.com/be_tofu_life/" target="_blank">Instagram</a>
                <a class="hoverLine" href="https://github.com/wavvve" target="_blank">Github</a>
                <a class="hoverLine" href="mailto:ppk1324@naver.com" target="_blank">Email</a>
            </span>
            <span class="subTitle bottomRight">
                <b>Since 2014</b><br>
                in KOREA
            </span>
        </div>
        <!-- <div class="contactModal">
            contact
        </div> -->
    </div>
</template>

<script>
export default {
    name : "GardenHeadr",
    data : function(){
        return {
            modalMenuState : false
        }
    },
    methods : {
        menuBtn : function(){
            this.modalMenuState = !this.modalMenuState;
        },
        logoBtn : function(){
            this.modalMenuState = false;
        },
    }
}
</script>