<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-plane-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M224 72h-48l59 155.7-126.8 4.3L64 176H32l32 80-32 80h32l44.9-57.7 126.1 5.2L176 440h48l98.2-154.5L390 287c3.3.2 6.6.1 10 .1 44.2 0 80-14.4 80-32.1s-35.8-32-80-32c-3.4 0-6.7.1-10 .2l-67.8 2.2L224 72z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-plane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plane Icon"
      return {
        iconTitle: iconTitle
      }
    },
    computed: {
      ionClass() {
        let addClass = ''

        if (this.rotate) {
          addClass = addClass + 'ion-rotate '
        } else if (this.beat) {
          addClass = addClass + 'ion-beat '
        } else if (this.shake) {
          addClass = addClass + 'ion-shake '
        }

        return `${this.rootClass} ${addClass}`
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      },
      rotate: {
        type: Boolean,
        default: false
      },
      beat: {
        type: Boolean,
        default: false
      },
      shake: {
        type: Boolean,
        default: false
      }
    }
  }
</script>


