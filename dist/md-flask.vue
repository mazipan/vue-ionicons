<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-flask-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M436.9 354.4L336 192V96h32V48H144v48h32v96L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6zM155.1 304l29.5-48h143.1l29.8 48H155.1z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-flask-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Flask Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

