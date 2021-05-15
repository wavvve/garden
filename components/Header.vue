<template>
    <div class="header_nav bottom_line">
        <div class="header_logo">
            <Logo />
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
            this.modalMenuState=!this.modalMenuState;
        }
    }
}
</script>