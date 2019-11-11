<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-flickr-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M352 64H160c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h192c52.8 0 96-43.2 96-96V160c0-52.8-43.2-96-96-96zM184 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-flickr-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Flickr Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

