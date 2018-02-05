<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-share-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M376 176H269v146.6c0 7-5.4 13-12.4 13.4-7.5.4-13.6-5.6-13.6-13V176H136c-22 0-40 18-40 40v208c0 22 18 40 40 40h240c22 0 40-18 40-40V216c0-22-18-40-40-40zM269 92.1l47.9 47.2c5.1 5 13.3 5 18.4-.1 5-5.1 5-13.3-.1-18.4l-70-69c-2.5-2.4-5.8-3.7-9.1-3.7-1.7 0-3.4.3-5 1-1.5.6-2.9 1.6-4.1 2.7l-70 69c-5.1 5-5.2 13.3-.1 18.4 5 5.1 13.3 5.2 18.4.1L243 92.1V176h26V92.1z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-share-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Share Icon"
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


