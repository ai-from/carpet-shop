<template>
  <div class="v-header indent">
    <div class="logo_wrap">
      <router-link exact to="/">
        <img src="@/assets/header/logo.png" alt="" title="">
      </router-link>
    </div>
    <vNavigation />
    <vHeaderRight />
  </div>
</template>

<script>
import vNavigation from '@/components/common/v-navigation'
import vHeaderRight from './v-header-right'
export default {
  name: "v-header",
  components: {
    vNavigation,
    vHeaderRight
  }
}
</script>

<style lang="sass">
  .v-header
    display: grid
    grid-template-columns: min-content 1fr min-content
    grid-gap: 100px
    border-bottom: 1px solid rgba(0, 0, 0, .1)
    .logo_wrap
      width: 150px
      height: 70px
      position: relative
      overflow: hidden
      cursor: pointer
      img
        width: 150px
        height: auto
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

  @media screen and (max-width: 767px)
    .v-header
      grid-template-columns: min-content 1fr
      grid-template-rows: repeat(2, min-content)
      grid-gap: 10px
      .v-navigation
        grid-column: 1/3
        grid-row: 2/3
        justify-content: center
        margin: 10px 0 20px
</style>