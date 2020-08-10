<template>
  <div class="v-button">
    <button
        @click.prevent="btnClick"
        :class="{'disabled': isDisabled}"
    >
      <div class="inner_wrap">
        <span>{{ title }}</span>
        <v-icon :name="icon" scale=".7" />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "v-button",
  props: {
    title: {
      type: String,
      default: 'Название кнопки'
    },
    icon: {
      type: String,
      default: 'plus'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnClick: function () {
      this.$emit('btnclick')
    }
  }
}
</script>

<style lang="sass">
  .v-button
    button
      border: none
      color: white
      background: $green
      padding: 10px 30px
      cursor: pointer
      outline: none
      &:hover
        background: $greenLight
      &:active
        background: $gray
      .inner_wrap
        display: grid
        grid-template-columns: min-content min-content
        grid-gap: 10px
        align-items: center
        justify-content: center
        white-space: nowrap
      &.disabled
        background: $gray
        cursor: default
</style>