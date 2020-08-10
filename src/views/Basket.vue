<template>
  <div class="p-basket">
    <h1 class="indent">{{ title }}</h1>
    <vBasket />
  </div>
</template>

<script>
import vBasket from '@/components/basket/v-basket'
export default {
  name: 'Basket',
  data () {
    return {
      title: 'Корзина'
    }
  },
  components: {
    vBasket
  }
}
</script>

<style lang="sass">
  .p-basket
    width: 100%
    max-width: 100%
    display: block
    overflow-x: auto
    -webkit-overflow-scrolling-x: touch
</style>
