<template>
  <div class="catalog">
    <router-view></router-view>
  </div>
</template>

<script>
import vCatalog from '@/components/catalog/v-catalog'

export default {
  name: "Catalog",
  data () {
    return {
    }
  },
  components: {
    vCatalog
  }
}
</script>

<style lang="sass">

</style>