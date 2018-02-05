<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-medical-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-medical-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Medical Icon"
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


