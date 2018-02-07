<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropleft-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropleft-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropleft Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

