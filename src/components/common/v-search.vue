<template>
  <div class="v-search">
    <div class="wrap">
      <input
          type="text"
          v-model="inputString"
          :placeholder="placeholder"
          @change="changeInput(inputString)">
      <v-icon
          name="times"
          class="delete"
          v-if="isClearField"
          @click="cleanInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "v-search",
  data(){
    return {
      inputString: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Поиск'
    }
  },
  computed: {
    isClearField: function(){
      return this.inputString.length > 0 ? true: false
    }
  },
  methods: {
    changeInput(str){
      this.$emit('changeinput', str)
    },
    cleanInput(){
      this.inputString = ''
      this.$emit('changeinput', this.inputString)
    }
  }
}
</script>

<style lang="sass">
  .v-search
    display: grid
    .wrap
      height: min-content
      width: min-content
      position: relative
      input
        width: 200px
        height: 34px
        background: none
        padding: 0 27px 0 8px
        border: 1px solid gray
        outline: none
        font-size: 14px
        &:focus
          border: 1px solid $green
      .delete
        color: red
        position: absolute
        top: 50%
        right: 10px
        transform: translateY(-50%)
        cursor: pointer
</style>