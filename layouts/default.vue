<template>
  <div class="layout" :class="{ mobile:deviceState, loading:loadState }">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadState : true,
      deviceState : false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(()=>{
        this.loadState = false;
      },1000);
      this.deviceState = this.$device.isMobile;
      window.addEventListener('resize', this.handleResize);
    })
  },
  watch: { 
    $route(to, from) { 
      if (to.path != from.path) {
        this.$nextTick(() => {
          this.loadState = true;
          setTimeout(()=>{
            this.loadState = false;
          },1000);
        })
      }
    }
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(e){
      this.deviceState = this.$device.isMobile;
    }
  }
}
</script>