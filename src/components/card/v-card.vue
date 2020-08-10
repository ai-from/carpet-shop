<template>
  <div class="v-card" v-if="this.currentItem[0]">
    <h1 class="indent">{{ this.currentItem[0].name }}</h1>
    <div class="content indent">
      <vCatalogItem
        :currentItem = currentItem[0]
        :isWrapImg = "isWrapImg"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/catalog/v-catalog-item'
export default {
  name: "v-card",
  data () {
    return {
      isWrapImg: true
    }
  },
  components: {
    vCatalogItem
  },
  computed: {
    currentItem: function(){
      return this.$store.getters.GET_CURRENT_PRODUCT
    }
  }
}
</script>

<style lang="sass">
  @media screen and (max-width: 767px)
    .v-card
      .content
        .v-catalog-item
          margin-right: 0

  @media screen and (max-width: 569px)
    .v-card
      .content
        .v-catalog-item
          .inner
            grid-template-columns: 1fr
            .right_part
              grid-gap: 20px
</style>