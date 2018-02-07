<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-wine-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-wine-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Wine Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

