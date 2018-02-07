<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-business-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M261 149.3V64H48v384h416V149.3H261zm-127.8 256H90.6v-42.7h42.6v42.7zm0-85.3H90.6v-42.7h42.6V320zm0-85.3H90.6V192h42.6v42.7zm0-85.4H90.6v-42.7h42.6v42.7zm85.2 256h-42.6v-42.7h42.6v42.7zm0-85.3h-42.6v-42.7h42.6V320zm0-85.3h-42.6V192h42.6v42.7zm0-85.4h-42.6v-42.7h42.6v42.7zm203 256H261v-42.7h42.6V320H261v-42.7h42.6v-42.7H261V192h160.4v213.3zm-37.6-170.6h-42.6v42.7h42.6v-42.7zm0 85.3h-42.6v42.7h42.6V320z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-business-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Business Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

