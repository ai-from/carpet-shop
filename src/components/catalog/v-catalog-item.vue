<template>
  <div class="v-catalog-item">
    <div class="inner">

      <div class="left_part">
        <div class="img_wrap">
          <router-link :to="'/catalog/' + this.currentItem.id" v-if="!isWrapImg">
          <img
              :src="'http://carpet-shop.just.ru.net/api/img/' + currentItem.image" alt="" title=""
          >
          </router-link>
          <template v-else>
            <img class="no_link"
                :src="'http://carpet-shop.just.ru.net/api/img/' + currentItem.image" alt="" title=""
            >
          </template>
        </div> <!-- img_wrap -->
      </div> <!-- left_part -->

      <div class="right_part" :class="{total: currentItem.ordered * 1}">
        <div class="info">
          <div class="item name">Наименование: <span>{{ currentItem.name }}</span></div>
          <div class="item size">Размер: <span>{{ currentItem.size }}</span></div>
          <div class="item country">Страна: <span>{{ currentItem.country }}</span></div>
          <div class="item composition">Состав: <span>{{ currentItem.composition }}</span></div>
          <div class="item quantity">Количество: <span>{{(currentItem.quantity - currentItem.ordered) | formatQuantity }}</span></div>
          <div class="item price">Цена: <span>{{ currentItem.price | filterPrice | formatPrice }}</span></div>
        </div> <!-- info -->

        <div class="total" v-if="currentItem.ordered * 1">
          <div class="added">Добавлено:<span>{{ currentItem.ordered }} шт.</span></div>
          <span class="remove" @click="removeFromBasket">Удалить из корзины</span>
        </div> <!-- total -->

        <vButton
          title="Добавить в корзину"
          icon="plus"
          @btnclick = 'addToBasket'
          :isDisabled="!(currentItem.stock * 1)"
        />

      </div> <!-- right_part -->

    </div> <!-- inner -->
  </div>
</template>

<script>
import vButton from '../common/v-button'
import filterPrice from '@/filters/filterPrice'
import formatPrice from '@/filters/formatPrice'
import formatQuantity from '@/filters/formatQuantity'
export default {
  name: "v-catalog-item",
  data () {
    return {
    }
  },
  props: {
    currentItem: null,
    isWrapImg: false
  },
  components: {
    vButton
  },
  filters: {
    filterPrice,
    formatPrice,
    formatQuantity
  },
  methods: {
    addToBasket: function (el) {
      if (this.currentItem.stock >= 1){
        el = this.currentItem
        this.$store.dispatch('ADD_TO_BASKET', el)
      }
    },
    removeFromBasket: function (el) {
      el = this.currentItem
      this.$store.dispatch('REMOVE_FROM_BASKET', el)
    }
  }
}
</script>

<style lang="sass">
  .v-catalog-item
    margin: 0 100px 100px 0
    .inner
      display: grid
      grid-template-columns: min-content 250px
      grid-gap: 20px
      .left_part
        .img_wrap
          width: 230px
          height: 320px
          overflow: hidden
          position: relative
          img
            position: absolute
            width: 300px
            height: auto
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            cursor: pointer
            &.no_link
              cursor: default
      .right_part
        display: grid
        grid-template-rows: 1fr min-content
        &.total
          grid-template-rows: min-content 1fr min-content
        .info
          .item
            color: gray
            display: grid
            grid-template-columns: 1fr 1fr
            span
              color: black
        .total
          margin: 20px 0 0
          padding: 20px 0 20px
          border-top: 1px solid rgba(0, 0, 0, .1)
          .added
            display: grid
            grid-template-columns: 1fr 1fr
            margin-bottom: 10px
            color: gray
            span
              color: black
          .remove
            color: red
            cursor: pointer
</style>