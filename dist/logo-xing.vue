<template>
  <div
    class="ion"
    :class="ionClass"
    name="logo-xing-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M313.8 303.9L469 32H365L209.4 303.8c-.4.7-.4 1.1 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7c-.2-.3-.1-1 .1-1.4zm-91.9-87.7L163 113c-.5-.8-1-1-2-1H65l58.9 104.4c.1.2.2.6.1.8L43 352h96.8c.8 0 1.2-.2 1.6-.9l80.5-133.7c.1-.3.1-.9 0-1.2z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "logo-xing-icon",
    data () {
      let iconTitle = this.title ? this.title : "Logo Xing Icon"
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


