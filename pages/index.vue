<template>
  <div class="container indexPage">
    <!-- 인트로 페이지
    <article class="introPage bottom_line">
      <div class="img_box">        
      </div>
    </article>
    -->
    <ul class="postWrap">
      <li class="item" v-for="item in postLists" v-bind:key="item">
        <div class="itemWrap">
          <span class="imageBox" v-if="item.thumbnailImg[0]">
            <img :src="item.thumbnailImg[0].formats.small.url" :alt="item.thumbnailImg[0].name">
          </span>
          <span class="title" v-if="item.title">{{ item.title }}</span>
          <span class="contents" v-if="item.contents">            
            {{ item.contents }}
          </span>
          <span class="publishedDate" v-if="item.publishingDate">
            {{ item.publishingDate }}
          </span>
          <div class="category" v-if="item.categories">
            <span v-for="category in item.categories" v-bind:key="category">{{ category.category }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
    data() {
      return {
        postLists: []
      }
    },
    async fetch() {
      this.postLists = await fetch(
        'https://api.design-garden.shop/posts'
      ).then(res => res.json())
    }
  }
</script>