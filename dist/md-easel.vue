<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-easel-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M128 176h256v128H128z"/><path d="M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192zM80 464h57l22.5-64h-56.4zM279.4 48h-46.8l-11.5 32h69.8zM375 464h57l-23-64h-56.5zm-143-64h48v32h-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-easel-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Easel Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

