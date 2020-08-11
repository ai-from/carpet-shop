<template>
  <div class="not-found">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data () {
    return {
      title: 'Страница не найдена'
    }
  }
}
</script>

<style lang="sass">
  .not-found
    h1
      font-size: 20px
</style>