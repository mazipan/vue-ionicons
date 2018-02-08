<template>
  <div id="app" class="app">

    <header role="header" class="site__header header">
      <div class="header__wrapper">
        <div class="header__brand">
          <a href="https://mazipan.github.io/vue-ionicons/">
            <LogoIonicIcon w="60px" h="60px" animate="rotate" style="color:#fff;"/>
          </a>
          <div class="header__title">Vue Ionicons</div>
        </div>

        <a href="https://github.com/mazipan/vue-ionicons"
            target="_blank" style="margin-right: 2em;">
          <LogoGithubIcon w="30px" h="30px" style="color:#fff;"/>
        </a>

      </div>
    </header>

    <main class="main-app">

      <div class="grid__row centered hero">
        <h1 class="centered">
          {{ title }}
          <small> {{ subtitle }} </small>
          <br>
          <a href="https://github.com/mazipan/vue-ionicons" target="_blank">
            <img src="https://img.shields.io/github/stars/mazipan/vue-ionicons.svg?style=social&label=Stars"/>
          </a>
        </h1>
        <br>
        <img src="http://ionicons.com/img/ionicons-logo.png"/>
      </div>

      <div class="grid__row centered sample">
        <div class="card">
          <h3>Default Icon</h3>
          <LogoIonicIcon w="60px" h="60px" style="color:#FFF;"/>
          <pre>{{ defaultSampleCode }}</pre>
        </div>

        <div class="card">
          <h3>Rotate Icon</h3>
          <IosRefreshIcon w="60px" h="60px" animate="rotate" style="color:#4F8EF7;"/>
          <pre>{{ rotateSampleCode }}</pre>
        </div>

        <div class="card">
          <h3>Beat Icon</h3>
          <IosHeartIcon w="60px" h="60px" animate="beat" style="color:red;"/>
          <pre>{{ beatSampleCode }}</pre>
        </div>

        <div class="card">
          <h3>Shake Icon</h3>
          <IosBicycleIcon w="60px" h="60px" animate="shake" style="color:#00e679;"/>
          <pre>{{ shakeSampleCode }}</pre>
        </div>
      </div>

      <div class="grid__row centered search__box">

        <select v-model="selectedFilter" class="search__select">
          <option v-for="f in filterGroup"
                  v-bind:value="f"
                  v-bind:key="f">
            {{ f }}
          </option>
        </select>

        <input type="text" class="search__input"
                placeholder="Search Icon"
                v-model="searchText"/>
        <button class="search__btn">
          <IosSearchIcon/> Search
        </button>
      </div>

      <div class="grid__row">

        <div class="box" v-for="icon in filteredIcon" :key="icon.name">

          <component :is="icon.name"
                    :w="w"
                    :h="h">
          </component>

          <div class="box-content">
            {{ icon.libraryName }}
          </div>

        </div>

      </div>

    </main>

    <footer class="grid__row content centered">
      <h2>Contribute</h2>
      <p>Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-ionicons" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p>

      <h2>Contact Developer</h2>
      <p>
        <a href="https://github.com/mazipan">
          <LogoGithubIcon w="30px" h="30px" />
        </a>
        <a href="mailto:mazipanneh@gmail.com">
          <IosMailIcon w="30px" h="30px" />
        </a>
        <a href="https://facebook.com/mazipanneh">
          <LogoFacebookIcon w="30px" h="30px" />
        </a>
        <a href="https://twitter.com/Maz_Ipan">
          <LogoTwitterIcon w="30px" h="30px" />
        </a>
        <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
          <LogoLinkedinIcon w="30px" h="30px" />
        </a>
      </p>

      <p>Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p>
    </footer>

  </div>
</template>

<script>
import iconMixin from './component-mixin'

export default {
  name: 'app',
  mixins: [iconMixin],
  data() {
    return {
      title: 'Vue-Ionicons',
      subtitle: 'Vue Icon Set Components from Ionic Team',
      w: '3em',
      h: '3em',
      searchText: '',
      defaultSampleCode: '<LogoIonicIcon w="60px" h="60px"/>',
      rotateSampleCode: '<IosRefreshIcon w="60px" h="60px" animate="rotate"/>',
      beatSampleCode: '<IosHeartIcon w="60px" h="60px" animate="beat"/>',
      shakeSampleCode: '<IosBicycleIcon w="60px" h="60px" animate="shake"/>',
      filteredIcon: [],
      selectedFilter: 'all',
      filterGroup: [ 'all', 'ios', 'md', 'logo']
    }
  },
  watch: {
    searchText(val) {
      if (val) {
        this.doFilterByKeyValue('readableName', val)
      }
    },
    selectedFilter(val) {
      if (val !== 'all') {
        this.doFilterByKeyValue('name', val)
      } else {
        this.filteredIcon = this.icons
      }
    }
  },
  methods: {
    doFilterByKeyValue(key, val) {
      if (val) {
        this.filteredIcon = this.icons.filter(
          icon => icon[key].toLowerCase().indexOf(val.toLowerCase()) >= 0
        )
      } else {
        this.filteredIcon = this.icons
      }
    }
  },
  mounted() {
    this.filteredIcon = this.icons
  }
}
</script>

<style lang="scss">
@import "./normalize.scss";

// import ionicons global scss
@import "../ionicons.scss";

@mixin bg-gradient() {
  background: #4776e6;
  background: -webkit-linear-gradient(left, #8e54e9, #4776e6);
  background: -moz-linear-gradient(left, #8e54e9, #4776e6);
  background: -o-linear-gradient(left, #8e54e9, #4776e6);
  background: linear-gradient(90deg, #8e54e9, #4776e6);
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}

*, *:before, *:after {
    box-sizing: inherit;
}

.header {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 65px;

  @include bg-gradient();
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2em;
}

.header__brand img {
  width: 50px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.header__title {
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 0.5em;
  color: #fff;
}

.app {
  margin-top: 70px;
}

a {
  color: #51a7e8;
  text-decoration: none;
}

a:focus {
  text-decoration: none;
}

small {
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row {
  *zoom: 1;
  margin: 0 auto;
  max-width: 92.308em;
}
.grid__row:before,
.grid__row:after {
  display: table;
  content: ' ';
}
.grid__row:after {
  clear: both;
}
.centered {
  text-align: center;
}

.hero {
  margin-bottom: 1em !important;
}

.box {
  position: relative;
  float: left;
  width: 14%;
  cursor: pointer;
  margin: 1px;
  padding: 7px 0 3px 0;
  text-align: center;
  border: 1px solid #ddd;
  color: #fff;

  @include bg-gradient();
  border-radius: 0.25em;

  @media screen and (max-width: 480px) {
    width: 24%;
  }

  &-content {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background-color: #1a1a1a;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 1em 2em;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -75px;
  }

  &:hover {
    .box-content {
      visibility: visible;
      opacity: 1;
    }
  }
}

.search {
  &__box {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
  }
  &__select {
    padding: 1em 5em;
    margin-right: 0.5em;
    outline: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100px;
  }
  &__input {
    padding: 1em 5em;
    margin-right: 0.5em;
    outline: 0;
    border: 1px solid #ddd;
  }
  &__btn {
    @include bg-gradient();
    border-radius: 0.25em;
    color: #fff;
    padding: 1em 3em;
    outline: 0;
    border: 1px solid #4776e6;
    cursor: pointer;
    display: flex;
  }
}

pre {
  padding: 16px;
  background-color: #f6f8fa;
  overflow: auto;
  border-radius: 0.25em;
}

.sample {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
}
.card {
  padding: 1em;
  width: 47%;
  text-align: center;
  margin: auto;
  margin-bottom: 1em;
  border-radius: 0.25em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;

  @include bg-gradient();

  @media screen and (max-width: 480px) {
    width: 75%;
  }
}
</style>

