<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-square-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-square-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Square Outline Icon"
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


