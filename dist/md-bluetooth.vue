<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-bluetooth-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M399 159.9L270.5 32H248v170L144.7 99.2 113 130.8 238.8 256 113 381.2l31.7 31.6L248 310v170h22.5L399 352.1 302.2 256l96.8-96.1zm-106-42.1l42.3 42.1L293 202v-84.2zm42.3 234.3L293 394.2V310l42.3 42.1z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-bluetooth-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Bluetooth Icon"
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


