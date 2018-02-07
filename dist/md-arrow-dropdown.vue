<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropdown-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M128 192l128 128 128-128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropdown-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropdown Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

