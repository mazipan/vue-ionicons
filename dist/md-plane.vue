<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-plane-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 336v-40L288 192V79.2c0-17.683-14.82-31.2-32-31.2-17.179 0-32 13.518-32 31.2V192L64 296v40l160-48v113.602l-48 31.199V464l80-16 80 16v-31.199l-48-31.199V288l160 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-plane-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Plane Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

