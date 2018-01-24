<template>
  <div
    class="ion"
    :class="rootClass"
    name="flag-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M426.4 182.5c-35.8 5.9-94.2 7.5-133-66.1-41.6-79.1-108.8-81.5-148.1-74.3-19.1 3.5-33.4 19.5-33.4 35v196.6c11.3 4.3 23.4-.2 26.5-.8.8-.2 1.5-.3 2.4-.5 25-5.5 51.4-8.1 116.8 23.3 82 39.3 153.8-33.1 181.6-83.5 2-3.5 8.7-20.2 8.7-36.2-9.7 4-21.5 6.5-21.5 6.5zM88 32H72c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "flag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flag Icon"
      return {
        iconTitle: iconTitle
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
      }
    }
  }
</script>


