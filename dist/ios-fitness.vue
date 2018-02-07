<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-fitness-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M352 280H160c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h192c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8zm26 82V150c0-12.1 9.9-22 22-22s22 9.9 22 22v212c0 12.1-9.9 22-22 22s-22-9.9-22-22zm82-170h-12c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h12c11 0 20-9 20-20v-88c0-11-9-20-20-20zM134 362V150c0-12.1-9.9-22-22-22s-22 9.9-22 22v212c0 12.1 9.9 22 22 22s22-9.9 22-22zM64 192H52c-11 0-20 9-20 20v88c0 11 9 20 20 20h12c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-fitness-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Fitness Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

