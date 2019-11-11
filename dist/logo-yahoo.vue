<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-yahoo-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M384.6 68.4c-11.3 0-22.5-.8-32.6-4.4l-96 160-96-160c-10.1 3.6-20.7 4.4-32 4.4-11.1 0-22.1-.9-32-4.4l128 212.7V448c10-3.5 20.8-4.4 32-4.4s22 .9 32 4.4V277L416 64c-9.9 3.4-20.3 4.4-31.4 4.4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-yahoo-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Yahoo Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

