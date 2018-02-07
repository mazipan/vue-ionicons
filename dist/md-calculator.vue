<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-calculator-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M368 48H144c-26.6 0-48 21.6-48 48v320c0 26.4 21.4 48 48 48h224c26.4 0 48-21.6 48-48V96c0-26.4-21.4-48-48-48zM200 416h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48V280h48v136zm0-176h-48v-48h48v48zm0-96H152V96h208v48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-calculator-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Calculator Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

