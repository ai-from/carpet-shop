<template>
  <div class="profile">
    <h1 class="indent">{{ title }}</h1>
    <div class="ctx indent">
      <v-button
          title = "Выйти"
          icon = "sign-out-alt"
          @btnclick = 'btnClick'
      />
    </div>
  </div>
</template>

<script>
import vButton from '@/components/common/v-button'
import {mapActions} from 'vuex'
export default {
  name: "Profile",
  data () {
    return {
      title: 'Профиль'
    }
  },
  components: {
    vButton
  },
  methods: {
    ...mapActions([
        'CHANGE_LOGIN'
    ]),
    btnClick(){
      this.CHANGE_LOGIN()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="sass">
  .profile
    padding: 0 0 50px
</style>