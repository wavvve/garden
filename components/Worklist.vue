<template>
    <ul class="postWrap">
        <li class="item" v-for="item in orderedPostLists" v-bind:key="item.id">
        <div class="itemWrap">
            <span class="imageBox" v-if="item.thumbnailImg[0]">
            <img :src="apiSeverUrl + item.thumbnailImg[0].formats.medium.url" :alt="item.thumbnailImg[0].name">
            </span>
            <span class="title" v-if="item.title">{{ item.title }}</span>
            <span class="contents" v-if="item.contents" v-html="handleNewLine(item.contents)"></span>
            <span class="publishedDate" v-if="item.publishingDate">
            {{ item.publishingDate }}
            </span>
            <span class="category" v-if="item.categories">
              <span v-for="category in item.categories" v-bind:key="category.id">{{ category.category }}</span>
            </span>
            <span class="link" v-if="item.link">
              <a :href="item.link" target="_blank">Go+</a>
            </span>
        </div>
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      postLists: [],
      apiSeverUrl: "https://api.pinsquare.synology.me",
      sloganMessage: "Slow walk, Glow work.",
    }
  },
  props:{
      apiUrl: {
          type: String,
          default: 'https://api.pinsquare.synology.me/posts',
      },
      orderKey: {
          type: String,
          default: 'publishingDate'
      },
      postLimit:{
          type: Number,
          default: -1,
      },
      listType:{
        type: String,
        default: "works"
      }
  },
  async fetch() {
    this.postLists = await fetch(
      this.apiUrl + "?_limit=" + this.postLimit
    ).then(res => res.json())
  },
  methods: {
    handleNewLine(str) {    
       return String(str).replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
  computed: {
      orderedPostLists: function () {
          return _.orderBy(this.postLists, this.orderKey).reverse()
      }
  },
}
</script>