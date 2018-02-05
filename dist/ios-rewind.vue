<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-rewind-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M35.9 249.3L244 129.1c5.4-3.1 12.3.6 12.3 6.7V251l211.3-121.9c5.4-3.1 12.3.6 12.3 6.7v240.3c0 6.1-6.9 9.8-12.3 6.7L256.4 261v115.2c0 6.1-6.9 9.8-12.3 6.7L35.9 262.7c-5.2-3-5.2-10.4 0-13.4z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-rewind-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Rewind Icon"
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


