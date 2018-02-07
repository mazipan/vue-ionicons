<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-female-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M400 176c0-79.5-64.5-144-144-144S112 96.5 112 176c0 71.4 51.9 130.6 120 142v50h-72v48h72v64h48v-64h72v-48h-72v-50c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-female-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Female Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

