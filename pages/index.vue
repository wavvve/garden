<template>
  <div class="container indexPage">
    <article class="introPage bottom_line">
      <div class="img_box">
        <img :src="'https://api.design-garden.shop' + mainImgs[0].img[0].url">
      </div>
    </article>
    <Worklist apiUrl="https://api.design-garden.shop/posts" :postLimit="4" />
    <div class="moreBtn bottom_line">
      <nuxt-link to="/works" class="hoverLine">more Works +</nuxt-link>
    </div>
    <Slogan :sloganText="sloganMessage" />
  </div>
</template>

<script>
import Slogan from '../components/Slogan.vue'
import Worklist from '../components/Worklist.vue'

export default {
  components: { Slogan, Worklist },
  data() {
    return {
      sloganMessage: "Slow walk, Glow work.",
    }
  },
  async asyncData({ $http }){
    const mainImgs = await $http.$get('https://api.design-garden.shop/main-imgs')
    return { mainImgs }
  },
}
</script>