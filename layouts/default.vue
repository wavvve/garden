<template>
  <div class="layout" :class="{ mobile:$device.isMobile, loading:loadState }">
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(()=>{
        this.loadState = false;
      },300);
    })
  }
}
</script>