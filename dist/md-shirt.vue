<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-shirt-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-shirt-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Shirt Icon"
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


