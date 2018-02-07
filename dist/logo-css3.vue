<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-css3-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-css3-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Css3 Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

