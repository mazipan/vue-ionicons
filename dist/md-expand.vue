<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-expand-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M396.795 396.8H320V448h128V320h-51.205zm.005-281.595V192H448V64H320v51.205zm-281.595-.005H192V64H64v128h51.205zm-.005 281.595V320H64v128h128v-51.205z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-expand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Expand Icon"
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

