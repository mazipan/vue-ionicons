<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-text-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-text-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Text Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

