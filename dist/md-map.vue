<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-map-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M437.333 64c-2.176 0-4.396 1.369-9.176 3.207L320 108.802 192 64 71.469 104.531C67.197 105.604 64 109.864 64 115.197v322.136C64 443.729 68.271 448 74.666 448c1.828 0 6.505-2.33 9.087-3.319L192 403.197 320 448l120.531-40.531c4.271-1.073 7.469-5.334 7.469-10.667V74.666C448 68.271 443.729 64 437.333 64zM320 405.333l-128-44.802V106.666l128 44.803v253.864z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-map-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Map Icon"
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


