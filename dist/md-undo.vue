<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-undo-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M262.3 179.6c-57.9 0-110.3 21.6-150.7 56.8L32 160v192h197.5l-79.1-76.8c30.4-25.3 69-41.1 111.8-41.1 77.3 0 143.1 48.2 166 117.8l51.8-14.8c-30.4-91.4-116.2-157.5-217.7-157.5z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-undo-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Undo Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

