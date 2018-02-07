<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropleft-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M320 128L192 256l128 128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropleft-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropleft Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

