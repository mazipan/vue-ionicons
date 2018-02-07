<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-podium-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M64 199.9v208.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V199.9c0-4.4-3.5-7.9-7.9-7.9H71.9c-4.4 0-7.9 3.5-7.9 7.9zM199.9 96c-4.4 0-7.9 3.5-7.9 7.9V416h120.1c4.4 0 7.9-3.5 7.9-7.9V103.9c0-4.4-3.5-7.9-7.9-7.9H199.9zm240.2 160h-96.2c-4.4 0-7.9 3.5-7.9 7.9v144.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V263.9c0-4.4-3.5-7.9-7.9-7.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-podium-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Podium Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

