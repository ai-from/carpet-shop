<template>
  <div class="v-basket indent">

    <div class="content" v-if="localBasket.length">

      <div class="table_header">

        <div
            class="item"
            :class="item.class"
            v-for="(item, index) in tableHeader"
            :key="index"
        >
          <div
              v-if="item.sort"
              class="wrap"
              @click="sortItems(item.class)"
          >
            {{ item.name }}
            <v-icon v-if="item.sort" name="sort" />
          </div>
          <template v-else>
            {{ item.name }}
          </template>
        </div>

      </div> <!-- table_header -->

      <div class="items" >
        <vBasketItem
            v-for="(item, index) in itemsToShow"
            :key="index"
            :currentItem = item
        />
      </div> <!-- items -->

      <div class="total">
        <div class="title">Всего</div>
        <div>{{ orderedQuantity | formatQuantity}}</div>
        <div>{{ orderedPrice | filterPrice | formatPrice}}</div>
        <div class="delete"><v-icon name="trash" @click="CLEAR_BASKET" /></div>
      </div>

      <vPagination
        :itemsOnPage="itemsOnPage"
        :localProducts="localBasket"
        @pagechange="pageChange"
      />

    </div> <!-- content -->

    <div class="nothing" v-else>
      Корзина пуста
    </div> <!-- nothing -->

  </div>
</template>

<script>
import vBasketItem from '@/components/basket/v-basket-item'
import vPagination from '@/components/common/v-pagination'

import filterPrice from '@/filters/filterPrice'
import formatPrice from '@/filters/formatPrice'
import formatQuantity from '@/filters/formatQuantity'

export default {
  name: "v-basket",
  data(){
    return {
      itemsOnPage: 4,
      startFrom: 0,
      tableHeader: [
        {name: 'Изображение', class: 'picture', sort: false},
        {name: 'Название', class: 'name', sort: true},
        {name: 'Размер', class: 'size', sort: true},
        {name: 'Количество', class: 'ordered', sort: true},
        {name: 'Цена', class: 'price', sort: true},
        {name: 'Удалить', class: 'delete', sort: false}
      ],
      reverseName: false,
      reverseSize: false,
      reverseOrdered: false,
      reversePrice: false
    }
  },
  components: {
    vBasketItem,
    vPagination
  },
  computed: {
    localBasket: function(){
      return this.$store.getters.GET_BASKET
    },
    orderedQuantity: function () {
      return this.$store.getters.GET_ORDERED_QUANTITY_BASKET
    },
    orderedPrice: function () {
      return this.$store.getters.GET_ORDERED_PRICE_BASKET
    },
    itemsToShow: function () {
      var arr = this.localBasket
      return arr.slice(this.startFrom, this.startFrom + this.itemsOnPage)
    }
  },
  filters: {
    filterPrice,
    formatPrice,
    formatQuantity
  },
  methods: {
    CLEAR_BASKET: function() {
      this.$store.dispatch('CLEAR_BASKET')
    },
    pageChange (index){
      this.startFrom = index * this.itemsOnPage
    },
    sortItems (val) {

      if (val === 'name'){
        if(!this.reverseName){
          this.localBasket.sort(function(a,b){
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            return 0
          })
          this.reverseName = true
        } else {
          this.localBasket.sort(function(a,b){
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            return 0
          }).reverse()
          this.reverseName = false
        }
      }

      if (val === 'size'){
        if(!this.reverseSize){
          this.localBasket.sort(function(a,b){
            if(a.size > b.size) return 1
            if(a.size < b.size) return -1
            return 0
          })
          this.reverseSize = true
        } else {
          this.localBasket.sort(function(a,b){
            if(a.size > b.size) return 1
            if(a.size < b.size) return -1
            return 0
          }).reverse()
          this.reverseSize = false
        }
      }

      if (val === 'ordered'){
        if(!this.reverseOrdered){
          this.localBasket.sort(function(a,b){
            return a.ordered - b.ordered
          })
          this.reverseOrdered = true
        } else {
          this.localBasket.sort(function(a,b){
            return a.ordered - b.ordered
          }).reverse()
          this.reverseOrdered = false
        }
      }

      if (val === 'price'){
        if(!this.reversePrice){
          this.localBasket.sort(function(a,b){
            return a.price - b.price
          })
          this.reversePrice = true
        } else {
          this.localBasket.sort(function(a,b){
            return a.price - b.price
          }).reverse()
          this.reversePrice = false
        }
      }

    }
  }
}
</script>

<style lang="sass">
  .v-basket
    width: 100%
    min-width: max-content
    display: block
    .content
      .table_header
        display: grid
        grid-template-columns: repeat(6, 1fr)
        grid-gap: 30px
        height: 40px
        border-bottom: 1px solid rgba(0, 0, 0, .1)
        margin-bottom: 20px
        > div
          min-width: 114px
        .item
          .wrap
            display: grid
            grid-template-columns: repeat(2, min-content)
            width: min-content
            height: min-content
            align-items: center
            white-space: nowrap
            grid-gap: 8px
            cursor: pointer
            svg
              color: gray
      .total
        display: grid
        grid-template-columns: 1fr 1fr repeat(4, 1fr)
        grid-gap: 30px
        height: 60px
        align-items: center
        border-top: 1px solid rgba(0, 0, 0, .1)
        margin-bottom: 50px
        > div
          min-width: 114px
        .title
          grid-column: 3/4
        .delete
          svg
            color: red
            cursor: pointer
      .items
        .v-basket-item
          .inner_wrap
            > div
              min-width: 114px
    .nothing
      margin-bottom: 50px
  @media screen and (max-width: 900px)
    .v-basket
      .content
        .table_header
          display: none
        > .items
          display: grid
          grid-template-columns: repeat(3, min-content)
          justify-content: space-around
          grid-gap: 30px
        .total
          grid-template-columns: repeat(4, min-content)
          grid-gap: 10px
          > div
            white-space: nowrap
            min-width: unset
          .title
            grid-column: 1/2
    @media screen and (max-width: 749px)
      .v-basket
        .content
          > .items
            grid-template-columns: repeat(2, min-content)
    @media screen and (max-width: 499px)
      .v-basket
        .content
          > .items
            grid-template-columns: min-content
            justify-content: left
</style>