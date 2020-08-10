<template>
  <div class="card">
    <vCard />
  </div>
</template>

<script>
import vCard from '@/components/card/v-card'

export default {
  name: "Card",
  data () {
    return {
    }
  },
  components: {
    vCard
  },
  beforeCreate: function (){
    var currentId = this.$route.params.id
    var currentItem = null

    for (var i = 0; i < this.$store.state.mCatalog.products.length; i++){
      if (this.$store.state.mCatalog.products[i].id == currentId){
        currentItem = this.$store.state.mCatalog.products[i]
        this.$store.dispatch('SET_CURRENT_PRODUCT', currentItem)
        break
      }
    }
  }
}
</script>

<style lang="sass">

</style>