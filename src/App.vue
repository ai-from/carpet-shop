<template>
  <div id="app">

    <component :is="layout"></component>

  </div>
</template>

<script>
import axios from 'axios'
import vHeader from './components/header/v-header'
import vFooter from './components/footer/v-footer'
import Login from './views/Login'
import {mapActions, mapState} from 'vuex'

import loginLayout from '@/layouts/loginLayout'
import contentLayout from '@/layouts/contentLayout'

export default {
  data() {
    return {
      apiProductsURL: 'https://carpet-shop.just.ru.net/api/products.php'
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.mLogin.isLogin
    }),
    layout() {
      return this.$route && this.$route.meta && this.$route.meta.layout ?  this.$route.meta.layout + 'Layout' : 'loginLayout'
    }
  },
  components: {
    vHeader,
    vFooter,
    Login,
    loginLayout,
    contentLayout
  },
  methods: {
      ...mapActions([
          'SET_CURRENT_PRODUCT',
          'SET_PRODUCTS'
      ]),
    checkCurrentProduct() {
      var id = this.$route.params.id ? this.$route.params.id : 0
      var pattern = /^\d+$/
      if (pattern.test(id)){
        id = Math.floor(parseInt(id))
        if (id > 0 && id <= this.$store.state.mCatalog.products.length){
          this.SET_CURRENT_PRODUCT(this.$store.state.mCatalog.products[id-1])
        } else if (id !== 0){
          this.$router.push({name: 'notfound'})
        }
      } else {
        this.$router.push({name: 'notfound'})
      }
    }
  },
  mounted() {
    this.$route.meta.layout === 'login' ? void(0) : this.$router.push('/login')

    if(this.$route && this.$route.params){
      axios.get(this.apiProductsURL)
        .then(response => (this.SET_PRODUCTS(response.data))
          .then(this.checkCurrentProduct))
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="sass">

</style>
