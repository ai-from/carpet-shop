<template>
  <div class="v-footer indent">
    <div class="inner">
      <vNavigation location="footer" />
      <div class="company">Carpet Shop, {{ currentYear }}</div>
    </div>
  </div>
</template>

<script>
import vNavigation from '@/components/common/v-navigation'
export default {
  name: "v-footer",
  components: {
    vNavigation
  },
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass">
  .v-footer
    background: $gray
    padding: 20px 40px
    .inner
      padding: 40px 0
      display: grid
      grid-template-columns: 1fr min-content
      color: rgba(255, 255, 255, .5)
      .company
        white-space: nowrap

  @media screen and (max-width: 599px)
    .v-footer
      .inner
        grid-template-columns: 1fr
        grid-gap: 20px
</style>