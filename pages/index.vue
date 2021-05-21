<template>
  <div class="container indexPage">
    <!-- 인트로 페이지
    <article class="introPage bottom_line">
      <div class="img_box">        
      </div>
    </article>
    -->
    <Worklist apiUrl="https://api.design-garden.shop/posts" orderKey="publishingDate" :postLimit="4" />
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
}
</script>