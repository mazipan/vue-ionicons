<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-pause-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-pause-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Pause Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

