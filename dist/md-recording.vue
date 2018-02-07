<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-recording-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-recording-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Recording Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

