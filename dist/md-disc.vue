<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-disc-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-disc-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Disc Icon"
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


