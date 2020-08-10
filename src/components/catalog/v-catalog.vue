<template>
  <div class="v-catalog">
    <div class="head indent">
      <h1>{{ title }}</h1>
      <vSearch
        :placeholder="placeholder"
        @changeinput="searchItems"
      />
    </div>
    <div class="items indent" v-if="!isNothingFound">
      <vCatalogItem
          v-for="(item, index) in itemsToShow"
          :key = "index"
          :currentItem = item
      />
    </div> <!-- items -->
    <div class="not_found indent" v-else>Ничего не найдено</div>
    <vPagination
      :itemsOnPage="itemsOnPage"
      :localProducts="catalogItems"
      @pagechange="pageChange"
      :isFirstPage="isFirstPage"
      :isNothingFound = isNothingFound
    />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vPagination from '@/components/common/v-pagination'
import vSearch from '@/components/common/v-search'

export default {
  name: "v-catalog",
  data () {
    return {
      title: 'Каталог',
      itemsOnPage: 8,
      startFrom: 0,
      placeholder: 'Поиск по каталогу',
      matchFlag: false,
      isFirstPage: false,
      isNothingFound: false
    }
  },
  components: {
    vCatalogItem,
    vPagination,
    vSearch
  },
  computed: {
    allProducts: function (){
      return this.$store.getters.GET_PRODUCTS
    },
    matchProducts: function (){
      return this.$store.getters.GET_MATCH_PRODUCTS
    },
    catalogItems: function () {
      if (this.matchFlag){
        return this.matchProducts
      } else {
        return this.allProducts
      }
    },
    orderedQuantity: function () {
      return this.$store.getters.GET_ORDERED_QUANTITY_BASKET
    },
    itemsToShow: function () {
      var arr
      if (this.matchFlag){
        arr = this.matchProducts
      } else {
        arr = this.catalogItems
      }
      return arr.slice(this.startFrom, this.startFrom + this.itemsOnPage)

    }
  },
  methods: {
    pageChange (index){
      this.startFrom = index * this.itemsOnPage
    },
    searchItems(str){
      if(str !== ''){
        this.$store.dispatch('SET_MATCH_PRODUCTS', [])
        var arr = []
        this.matchFlag = false
        for (var i = 0; i < this.catalogItems.length; i++){
          if (
              this.catalogItems[i].id == str ||
              this.catalogItems[i].name == str ||
              this.catalogItems[i].size == str ||
              this.catalogItems[i].country == str ||
              this.catalogItems[i].composition == str ||
              this.catalogItems[i].price == str
          ) {
            arr.push(this.catalogItems[i])
            this.$store.dispatch('SET_MATCH_PRODUCTS', arr)
          }
        }
        if (this.matchProducts.length > 0) {
          this.matchFlag = true
          this.startFrom = 0
          this.isFirstPage = true
          this.isNothingFound = false
        } else {
          this.$store.dispatch('SET_MATCH_PRODUCTS', [])
          this.matchFlag = false
          this.startFrom = 0
          this.isFirstPage = !this.isFirstPage
          this.isNothingFound = true
        }
      } else {
        this.$store.dispatch('SET_MATCH_PRODUCTS', [])
        this.matchFlag = false
        this.startFrom = 0
        this.isFirstPage = !this.isFirstPage
        this.isNothingFound = false
      }
    }
  }
}
</script>

<style lang="sass">
  .v-catalog
    .head
      display: grid
      grid-template-columns: 1fr 1fr
      h1
        padding: 0
      .v-search
        justify-content: right
        align-items: center
    .items
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 20px

  @media screen and (max-width: 1299px)
    .v-catalog
      .items
        .v-catalog-item
          margin-right: 0
          .inner
            grid-template-columns: 1fr
            .right_part
              grid-gap: 20px

    @media screen and (max-width: 499px)
      .v-catalog
        .head
          grid-template-columns: 1fr
          grid-gap: 10px
          margin-bottom: 30px
          h1
            margin-bottom: 0
          .v-search
            justify-content: left

    @media screen and (max-width: 819px)
      .v-catalog
        .items
          grid-template-columns: 1fr
</style>