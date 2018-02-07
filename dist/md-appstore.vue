<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-appstore-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M464 152H360c0-57-46.562-103.859-104-103.859S152 95 152 152H48c18.688 216 13 312 13 312h389.999c-.001 0-5.688-98 13.001-312zM256 74.105c43.008 0 77.999 34.895 77.999 77.895H178c0-43 34.991-77.895 78-77.895zM204 397.64V228.867l142.999 84.387L204 397.64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-appstore-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Appstore Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

