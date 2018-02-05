<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-tablet-landscape-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 120v272c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24zm384 8v256H80V128h336zm46 128c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-tablet-landscape-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Tablet Landscape Icon"
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


