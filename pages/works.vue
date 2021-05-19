<template>
  <div class="container worksWrap">
    <ul class="postWrap">
      <li class="item" v-for="item in postLists" v-bind:key="item.id">
        <div class="itemWrap">
          <span class="imageBox" v-if="item.thumbnailImg[0]">
            <img :src="apiSeverUrl + item.thumbnailImg[0].formats.medium.url" :alt="item.thumbnailImg[0].name">
          </span>
          <span class="title" v-if="item.title">{{ item.title }}</span>
          <span class="contents" v-if="item.contents" v-html="handleNewLine(item.contents)">            
          </span>
          <span class="publishedDate" v-if="item.publishingDate">
            {{ item.publishingDate }}
          </span>
          <span class="category" v-if="item.categories">
            <span v-for="category in item.categories" v-bind:key="category.id">{{ category.category }}</span>
          </span>
        </div>
      </li>
    </ul>
    <Slogan :sloganText="sloganMessage" />
  </div>
</template>

<script>
import Slogan from '../components/Slogan.vue'

export default {
  components: { Slogan },
  data() {
    return {
      postLists: [],
      apiSeverUrl: "https://api.design-garden.shop",
      sloganMessage: "Slow walk, Glow work.",
    }
  },
  async fetch() {
    this.postLists = await fetch(
      'https://api.design-garden.shop/posts'
    ).then(res => res.json())
  },
  methods: {
    handleNewLine(str) {    
       return String(str).replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
}
</script>