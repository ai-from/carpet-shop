<template>
  <div class="v-header-right">

    <router-link exact to="/basket">
      <div class="basket">
        <v-icon
            name="shopping-basket"
            scale="1.2"
            color="gray"
        />
        <span
            v-if="addedItems > 0"
            :class="{more: addedItems >= 1000}"
        ><i>{{ addedItems }}</i></span>
      </div>
    </router-link>

    <router-link exact to="/profile">
      <div class="logo">
        <img src="@/assets/header/avatar.jpg" alt="" title="">
      </div>
    </router-link>

  </div> <!-- v-header-right -->
</template>

<script>
export default {
  name: "v-header-right",
  data () {
    return {
    }
  },
  computed: {
    addedItems: function () {
      var total = 0
      for(var i = 0; i < this.$store.state.mBasket.basket.length; i++){
        var tmp = this.$store.state.mBasket.basket[i].ordered
        total += tmp
      }
      return total
    }
  }
}
</script>

<style lang="sass">
  .v-header-right
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-gap: 30px
    align-items: center
    .basket
      position: relative
      span
        color: white
        width: 22px
        height: 22px
        background: red
        border-radius: 100%
        display: grid
        position: absolute
        top: -10px
        right: -20px
        &.more
          overflow: hidden
          display: block
          text-overflow: ellipsis
        i
          font-style: normal
          margin: auto
          font-size: 12px
    .logo
      width: 50px
      height: 50px
      border-radius: 100%
      position: relative
      overflow: hidden
      cursor: pointer
      img
        width: auto
        height: 50px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

  @media screen and (max-width: 767px)
    .v-header-right
      justify-content: end
      grid-gap: 20px
</style>