<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-print-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M128 248v200c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V248c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM384 48H128c-8.8 0-16 7.2-16 16v20c0 2.2 1.8 4 4 4h280c2.2 0 4-1.8 4-4V64c0-8.8-7.2-16-16-16z"/><path d="M432.5 112h-352C62.9 112 48 125.8 48 143.3v174.4c0 17.5 14.9 32.3 32.5 32.3H96c4.4 0 8-3.6 8-8V236c0-15.5 12.5-28 28-28h248c15.5 0 28 12.5 28 28v106c0 4.4 3.6 8 8 8h16.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-print-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Print Icon"
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


