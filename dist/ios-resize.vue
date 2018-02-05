<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-resize-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M418.3 80H307.8c-7.5 0-13.7 6.1-13.7 13.7v.2c0 7.5 6.1 13.7 13.7 13.7h76.5L107.6 384.3v-76.5c0-7.5-6.1-13.7-13.7-13.7h-.2c-7.5 0-13.7 6.1-13.7 13.7v110.5c0 7.5 6.1 13.7 13.7 13.7h110.5c7.5 0 13.7-6.1 13.7-13.7v-.2c0-7.5-6.1-13.7-13.7-13.7h-76.5l276.7-276.7v76.5c0 7.5 6.1 13.7 13.7 13.7h.2c7.5 0 13.7-6.1 13.7-13.7V93.7c0-7.6-6.1-13.7-13.7-13.7z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-resize-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Resize Icon"
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


