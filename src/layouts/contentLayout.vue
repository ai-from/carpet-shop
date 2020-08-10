<template>
  <div class="content-layout layout">
    <vHeader />
    <router-view/>
    <vFooter />
  </div>
</template>

<script>
  import vHeader from '@/components/header/v-header'
  import vFooter from '@/components/footer/v-footer'
export default {
  name: "contentLayout",
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style scoped>

</style>