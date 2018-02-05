<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-power-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-power-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Power Icon"
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


