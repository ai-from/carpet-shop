<template>
  <div class="about">
    <h1 class="indent">{{ title }}</h1>
    <div class="cnt indent">Ковры</div>
  </div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
      title: 'О нас'
    }
  }
}
</script>

<style lang="sass">
  .about
    .cnt
      padding: 0 32px
</style>