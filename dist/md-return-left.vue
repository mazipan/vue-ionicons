<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-return-left-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-return-left-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Return Left Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

