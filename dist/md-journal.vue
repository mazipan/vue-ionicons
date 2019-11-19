<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-journal-icon">
    <svg :width="w" :height="h" class="ion__svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><path class="st0" d="M117.3 42.7c-17.6 0-32 14.4-32 32v362.7c0 17.6 14.4 32 32 32H320V42.7H117.3zM384.7 42.7H368v426.7h16.7c23.1 0 42-18.9 42-42V84.7c0-23.1-18.9-42-42-42z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-journal-icon">
    <svg :width="w" :height="h" class="ion__svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><path class="st0" d="M117.3 42.7c-17.6 0-32 14.4-32 32v362.7c0 17.6 14.4 32 32 32H320V42.7H117.3zM384.7 42.7H368v426.7h16.7c23.1 0 42-18.9 42-42V84.7c0-23.1-18.9-42-42-42z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-journal-icon",
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

