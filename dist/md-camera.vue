<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-camera-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="256" cy="280" r="63"/><path d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-camera-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Camera Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

