<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-crop-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M142 64c-7.7 0-14 6.3-14 14v20c0 7.7 6.3 14 14 14s14-6.3 14-14V78c0-7.7-6.3-14-14-14zm14 278V190c0-7.7-6.3-14-14-14s-14 6.3-14 14v166c0 15.5 12.5 28 28 28h166c7.7 0 14-6.3 14-14s-6.3-14-14-14H170c-7.7 0-14-6.3-14-14zm278 14h-20c-7.7 0-14 6.3-14 14s6.3 14 14 14h20c7.7 0 14-6.3 14-14s-6.3-14-14-14z"/><path d="M64 142c0 7.7 6.3 14 14 14h264c7.7 0 14 6.3 14 14v264c0 7.7 6.3 14 14 14s14-6.3 14-14V156c0-15.5-12.5-28-28-28H78c-7.7 0-14 6.3-14 14z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-crop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Icon"
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


