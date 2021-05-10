<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-arrow-forward-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-arrow-forward-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-forward-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

