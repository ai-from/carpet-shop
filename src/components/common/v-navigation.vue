<template>
  <div class="v-navigation" :class="location">
    <div class="item">
      <router-link exact to="/"><v-icon name="home" scale="1.2" /></router-link>
    </div>
    <div
        class="item"
        v-for="(item, index) in navigationLinks"
        :key="index"
    >
      <router-link exact :to="item.url">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header-navigation",
  data () {
    return {
      navigationLinks: [
        {name: 'Каталог', url: '/catalog'},
        {name: 'О нас', url: '/about'},
        {name: 'Контакты', url: '/contacts'},
      ]
    }
  },
  props: {
    location: {
      type: String,
      default: 'header'
    }
  }
}
</script>

<style lang="sass">
  .v-navigation
    display: grid
    grid-template-columns: repeat(4, min-content)
    grid-gap: 30px
    align-items: center
    .item
      position: relative
      a
        text-decoration: none
        position: relative
        white-space: nowrap
        &.router-link-active
          font-weight: 600
      &:after
        content: ''
        height: 100%
        width: 1px
        background: $gray
        position: absolute
        top: 0
        right: -15px
      &:last-child
        &:after
          display: none
    &.footer
      .item
        &:after
          background: rgba(255, 255, 255, .5)
        a
          color: rgba(255, 255, 255, .5)
          svg
            color: rgba(255, 255, 255, .5)
          &:hover
            color: rgba(255, 255, 255, .7)
            svg
              color: rgba(255, 255, 255, .7)
          &.router-link-active
            color: white
            svg
              color: white
</style>