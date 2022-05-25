<template>
  <div class="container worksWrap">
    <Worklist apiUrl="https://api.pinsquare.synology.me/posts" orderKey="publishingDate" />
    <Slogan :sloganText="sloganMessage" />
  </div>
</template>

<script>
import Slogan from '../components/Slogan.vue'
import Worklist from '../components/Worklist.vue'

export default {
  components: { Slogan, Worklist },
  data() {
    return{
      sloganMessage: "Slow walk, Glow work.",
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
          {
          hid: 'description',
          name: 'description',
          content: 'Garden grass'
          }
      ]
    }
  },
}
</script>