<template>
    <div class="container aboutWrap">
        <div class="aboutColm vertical_line">
            어바웃 그래픽을 어떻게 할까요.
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
      const gardenHistory = await $http.$get(`https://api.design-garden.shop/histories`)
      console.log(gardenHistory)
      return { gardenHistory }
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

