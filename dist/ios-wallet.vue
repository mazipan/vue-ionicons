<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-wallet-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M404 160H108c-33.1 0-60 26.9-60 60v168c0 33.1 26.9 60 60 60h296c33.1 0 60-26.9 60-60V220c0-33.1-26.9-60-60-60zm-61.1-95L108 110.9c-18 4-44 22.1-44 44.1 0 0 15-19 49-19h287v-20.5c0-12.6-5-28.7-13.9-37.6-11.3-11.3-27.5-16.2-43.2-12.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-wallet-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Wallet Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

