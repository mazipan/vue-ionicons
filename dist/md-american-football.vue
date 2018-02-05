<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-american-football-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 256c14.1 35 36.2 66 64 90.6V165.4C68.2 190 46.1 221 32 256zm448 0c-14.1-35-36.2-66-64-90.6v181.2c27.8-24.6 49.9-55.6 64-90.6zM256 105c-47.1 0-91 13.4-128 36.5v228.9c37 23.1 80.9 36.5 128 36.5s91-13.4 128-36.5V141.5c-37-23.1-80.9-36.5-128-36.5zm96 135v64h-32v-32h-48v32h-32v-32h-48v32h-32v-96h32v32h48v-32h32v32h48v-32h32v32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-american-football-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md American Football Icon"
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


