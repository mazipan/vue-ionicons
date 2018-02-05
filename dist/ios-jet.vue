<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-jet-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-jet-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Jet Icon"
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


