<template>
  <div class="contacts">
    <h1 class="indent">{{ title }}</h1>
    <div class="cnt indent">Контакты</div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data () {
    return {
      title: 'Контакты'
    }
  }
}
</script>

<style lang="sass">
  .contacts
   .cnt
    padding: 0 32px
</style>