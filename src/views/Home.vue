<template>
  <div class="home">
    <h1 class="indent">{{ title }}</h1>
    <div class="cnt indent">
      <div class="mini-title">Стартовая страница</div>
      <v-button
        title="Перейти в каталог"
        icon = "sign-in-alt"
        @btnclick="btnClick"
      />
    </div>
  </div>
</template>

<script>
import vButton from '@/components/common/v-button'
export default {
  name: 'home',
  data () {
    return {
      title: "Стартовая"
    }
  },
  components: {
    vButton
  },
  methods: {
    btnClick(){
      this.$router.push('/catalog')
    }
  }
}
</script>

<style lang="sass">
  .home
    .cnt
      padding: 0 32px
      .mini-title
        margin-bottom: 40px
</style>