<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-photos-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M464 144H128c-17.6 0-32 14.4-32 32v240c0 17.6 14.4 32 32 32h336c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32z"/><path d="M100 116h332V96c0-17.6-14.4-32-32-32H48c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32h20V148c0-17.6 14.4-32 32-32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-photos-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Photos Icon"
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


