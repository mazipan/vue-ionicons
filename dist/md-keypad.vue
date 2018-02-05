<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-keypad-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 398.5c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.3-18.2-40.7-40.5-40.7zM136.5 32C114.2 32 96 50.3 96 72.7s18.2 40.7 40.5 40.7S177 95.1 177 72.7 158.8 32 136.5 32zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm239-162.9c22.3 0 40.5-18.3 40.5-40.7S397.8 32 375.5 32 335 50.3 335 72.7s18.2 40.8 40.5 40.8zM256 276.4c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm119.5 0c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm0-122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm-119.5 0c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zM256 32c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7S278.3 32 256 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-keypad-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Keypad Icon"
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


