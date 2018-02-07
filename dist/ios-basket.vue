<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-basket-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M387.9 373.7h49.2l17.5-75.4h-66.7zm0 74.3h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zm-122.5-55.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zm122.5 0h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zm57.4-25.8h103.7V448H142.9zm122.5-94.2h103.7v75.4H265.4zm-122.5 0h103.7v75.4H142.9z"/><path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-basket-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Basket Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

