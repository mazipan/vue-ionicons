<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-html5-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 32l34.936 403.213L255.769 480l157.245-44.854L448 32H64zm307.997 132h-184l3.991 51h176.008l-13.505 151.386-98.5 28.094-98.682-27.976L150.545 289h48.254l3.423 39.287 53.769 14.781 53.422-14.915L314.987 264H147.986l-12.571-149.589 240.789.016L371.997 164z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-html5-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Html5 Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

