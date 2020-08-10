<template>
  <div class="v-basket-item">
    <div class="inner_wrap">
      <div class="image">
        <img :src="'http://carpet-shop.just.ru.net/img/' + currentItem.image" alt="" title="">
      </div>
      <div class="name">{{ currentItem.name }}</div>
      <div class="size">{{ currentItem.size }}</div>
      <div class="ordered">
        <div class="ordered_wrap">
          <v-icon name="minus" scale=".7" @click="minusOrdered" />
          <span>{{ currentItem.ordered | formatQuantity }}</span>
          <v-icon name="plus" scale=".7" @click="plusOrdered" />
        </div> <!-- ordered_wrap -->
      </div><!-- ordered -->
      <div class="price">{{ currentItem.price | filterPrice | formatPrice }}</div>
      <div class="delete">
        <div class="delete_wrap" @click="REMOVE_ITEM_FROM_BASKET">
          <span>Удалить</span>
          <v-icon name="trash"/>
        </div>
      </div>
    </div> <!-- inner_wrap -->
  </div>
</template>

<script>
import filterPrice from '@/filters/filterPrice'
import formatPrice from '@/filters/formatPrice'
import formatQuantity from '@/filters/formatQuantity'

export default {
  name: "v-basket-item",
  data () {
    return {
    }
  },
  props: {
    currentItem: {
      type: Object,
      default: {}
    }
  },
  filters: {
    filterPrice,
    formatPrice,
    formatQuantity
  },
  methods: {
    plusOrdered: function (el) {
      el = this.currentItem
      if (this.currentItem.stock >= 1){
        this.$store.dispatch('ADD_TO_BASKET', el)
      }
    },
    minusOrdered: function (el) {
      el = this.currentItem
      this.$store.dispatch('REMOVE_FROM_BASKET', el)
    },
    REMOVE_ITEM_FROM_BASKET: function (el) {
      el = this.currentItem
      this.$store.dispatch('REMOVE_ITEM_FROM_BASKET', el)
    }
  }
}
</script>

<style lang="sass">
  .v-basket-item
    margin-bottom: 50px
    .inner_wrap
      display: grid
      grid-template-columns: repeat(6, 1fr)
      grid-gap: 30px
      .image
        width: 100px
        height: 130px
        overflow: hidden
        position: relative
        img
          width: 130px
          height: auto
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
      .ordered
        .ordered_wrap
          display: grid
          height: min-content
          grid-template-columns: repeat(3, min-content)
          align-items: center
          white-space: nowrap
          span
            margin: 0 8px
          svg
            cursor: pointer
      .delete
        .delete_wrap
          display: grid
          grid-template-columns: repeat(2, min-content)
          grid-gap: 4px
          align-items: start
          span
            display: none
        svg
          color: red
          cursor: pointer
  @media screen and (max-width: 900px)
    .v-basket-item
      .inner_wrap
        display: block
        text-align: left
        .image
          width: 200px
          height: 300px
          img
            width: 100%
            height: 100%
        > div
          margin-bottom: 4px
          white-space: nowrap
        .delete
          .delete_wrap
            span
              display: block
</style>