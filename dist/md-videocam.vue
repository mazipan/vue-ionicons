<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-videocam-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-videocam-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Videocam Icon"
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


