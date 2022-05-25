<template>
    <div class="container aboutWrap">
        <div class="aboutColm vertical_line">
            <div class="aboutGraphic" v-for="item in aboutGraphic" v-bind:key="item.key">
                <img class="aboutImg" :src="'https://api.pinsquare.synology.me'+item.svg[0].url">
                <span class="aboutCopy">{{ item.text }}</span>
            </div>
        </div>
        <div class="historyColm">
            <ul class="itemWrap bottom_line" v-for="item in orderedhistory" v-bind:key="item.id">
                <li class="date" >{{  item.date }}</li>
                <li class="contents" v-html="handleNewLine(item.content)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        title: 'Garden ::: About'
        }
    },
    head() {
        return {
        title: this.title,
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'about Design GARDEN'
            }
        ]
        }
    },
    async asyncData({ $http }) {
      const gardenHistory = await $http.$get(`https://api.pinsquare.synology.me/histories`)
      const aboutGraphic = await $http.$get(`https://api.pinsquare.synology.me/about-grapgics?_sort=id:ASC`)
      return { gardenHistory, aboutGraphic }
    },
    methods: {
        handleNewLine(str) {    
        return String(str).replace(/(?:\r\n|\r|\n)/g, "<hr>");
        },
    },
    computed: {
        orderedhistory: function () {
            return _.orderBy(this.gardenHistory, 'id').reverse()
        }
    },
}
</script>

