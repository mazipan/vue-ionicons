<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-return-right-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-return-right-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-return-right-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

