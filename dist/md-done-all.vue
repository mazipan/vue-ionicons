<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-done-all-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M387.581 139.712L356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109L247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.321 403l30.829-30.713L31.934 249.418 0 280.133z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-done-all-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Done All Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

