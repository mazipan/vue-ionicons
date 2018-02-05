<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-business-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M146 80h220c9.9 0 18-8.1 18-18s-8.1-18-18-18H146c-9.9 0-18 8.1-18 18s8.1 18 18 18zm252 20H114c-9.9 0-18 8.1-18 18 0 9.3 6.9 17.1 16 18v300c0 13.2 10.8 24 24 24h88c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h88c13.2 0 24-10.8 24-24V136c9.1-.9 16-8.7 16-18 0-9.9-8.1-18-18-18zM192 364c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm80 192c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-business-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Business Icon"
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


