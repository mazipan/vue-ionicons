<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-cafe-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M48 400h368v48H48zM424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-cafe-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Cafe Icon"
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


