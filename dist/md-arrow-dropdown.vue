<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-arrow-dropdown-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M128 192l128 128 128-128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-arrow-dropdown-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Arrow Dropdown Icon"
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


