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
        >
            <ul class="mainMenu">
                <li><nuxt-link v-on:click.native="menuBtn" to="/about">About</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/works">Works</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/gardener">Gardener</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/contact">Contact</nuxt-link></li>                
            </ul>
        </div>
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