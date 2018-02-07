<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-list-box-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-list-box-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md List Box Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

