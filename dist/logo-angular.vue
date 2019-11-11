<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-angular-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M213.573 256h84.846l-42.427-89.356z"/><path d="M255.981 32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32zM344 352l-26.589-56H194.584L168 352h-40L256 72l128 280h-40z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-angular-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Angular Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

