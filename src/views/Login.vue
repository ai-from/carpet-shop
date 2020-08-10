<template>
  <div class="login">

    <form>
      <div class="title">Войти</div>
      <input type="text" placeholder="Почта (необязательно)">
      <input type="password" placeholder="Пароль (необязательно)">
      <v-button
          title = "Войти"
          icon = "sign-in-alt"
          @btnclick = 'btnClick'
      />
    </form>

  </div> <!-- login -->
</template>

<script>
import vButton from '@/components/common/v-button'
import {mapActions} from 'vuex'
export default {
  name: "Login",
  components: {
    vButton
  },
  methods: {
    ...mapActions([
        'CHANGE_LOGIN'
    ]),
    btnClick(){
      this.CHANGE_LOGIN()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="sass">
  .login
    display: grid
    height: 100%
    min-height: 100vh
    form
      margin: auto
      border: 1px solid $gray
      border-radius: 5px
      padding: 20px
      display: grid
      grid-template-rows: repeat(4, min-content)
      grid-gap: 20px
      .title
        text-align: center
      input
        height: 40px
        border: 1px solid $gray
        border-radius: 5px
        padding: 0 16px
      ::v-deep .v-button
        button
          width: 100%
</style>