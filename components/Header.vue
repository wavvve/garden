<template>
    <div class="header_nav bottom_line">
        <div class="header_logo">
            <Logo v-on:click.native="menuClose" />
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
            v-on:click="menuBgClick"
        >
            <ul class="mainMenu">
                <li><nuxt-link v-on:click.native="menuBtn" to="/about">About</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/works">Works</nuxt-link></li>                
                <li><nuxt-link v-on:click.native="menuBtn" to="/gardener">Gardener</nuxt-link></li>                
                <li><a v-on:click="contactBtn" href="#">Contact</a></li>                
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
        <div 
            class="contactModal"
            :class="{ open:modalContactState }"
        >
            <div class="contactWrap">
                <form 
                    name="contactForm" 
                    @submit="contactSubmit"
                >
                    <input v-model="contactName" type="text" placeholder="Name" name="content" required>
                    <input v-model="contactEmail" type="email" placeholder="Email" name="email" required>
                    <input 
                        v-model="contactTel"
                        type="tel" 
                        placeholder="Phone number"
                        name="tel"
                    >
                    <textarea v-model="contactContent" placeholder="Order details." required></textarea>
                    <input type="submit" value="Send">
                </form>
                <div class="closeBtn" v-on:click="contactBtn"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "GardenHeadr",
    data : function(){
        return {
            modalMenuState : false,
            modalContactState : false,
            contactName : '',
            contactEmail : '',
            contactTel : '',
            contactContent : '',
        }
    },
    methods : {
        menuBtn : function(){
            this.modalMenuState = !this.modalMenuState
            this.modalContactState = false
        },
        menuBgClick : function(){
            this.modalMenuState = false
        },
        contactBtn : function(){
            this.modalContactState = !this.modalContactState
        },
        menuClose : function(){
            this.modalMenuState = false
            this.modalContactState = false
        },
        contactSubmit : function(e){
            const token = '1628800822:AAEzg2iDsqZHnQaewVZivGKLJUnfH9QznuQ';
            const adminId = '1599437972';
            let api = 'https://api.telegram.org/bot'+token+'/sendMessage';
            let newMessage = 'Name : ' + this.contactName + '\nEmail : ' + this.contactEmail + '\nTel : ' + this.contactTel + '\n-\n' + this.contactContent;
            e.preventDefault();
            fetch(api, {
                method : 'POST',
                body : JSON.stringify({
                    chat_id : adminId,
                    text : newMessage,
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                if(res.error){
                    alert(res.error);
                }
            })
        }
    }
}
</script>