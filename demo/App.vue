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
          <a href="https://github.com/mazipan/vue-ionicons" target="_blank" rel="noopener">
            <img src="https://img.shields.io/github/stars/mazipan/vue-ionicons.svg?style=social&label=Stars"/>
          </a>
          <a href="https://www.npmjs.com/package/vue-ionicons" target="_blank" rel="noopener">
            <img src="https://img.shields.io/npm/v/vue-ionicons.svg?maxAge=60"/>
          </a>
        </h1>
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
        <input type="text" class="search__input"
                placeholder="Search icons..."
                v-model="searchText"/>
      </div>

      <div class="grid__row icons__list">
        
        <section class="grid__row">
          <div class="section__head">
            <h2 class="icon__title-section">App Icon</h2>
            <ul class="toggle">
              <li @click="switchAppIcon('md')" :class="{'active': isMaterial}">Material</li>
              <li @click="switchAppIcon('ios')" :class="{'active': isIos}">iOS</li>
            </ul>
          </div>
          <div class="appicon__wrapper" v-if="isMaterial">
            <div class="box" 
              v-for="icon in filteredMdIcons" 
              :key="icon.name"
              @click="activateIcon(icon)">
              <component :is="icon.name"
                        :w="w"
                        :h="h">
              </component>
              <div class="box-content">
                {{ icon.libraryName }}
              </div>
            </div>
          </div>
          <div class="appicon__wrapper" v-if="isIos">
            <div class="box" 
              v-for="icon in filteredIosIcons" 
              :key="icon.name"
              @click="activateIcon(icon)">
              <component :is="icon.name"
                        :w="w"
                        :h="h">
              </component>
              <div class="box-content">
                {{ icon.libraryName }}
              </div>
            </div>
          </div>
        </section>
        
        <section class="grid__row">
          <div class="section__head">
            <h2 class="icon__title-section">Logo Icon</h2>
          </div>
          <div class="appicon__wrapper">
            <div class="box" 
              v-for="icon in filteredLogoIcons" 
              :key="icon.name"
              @click="activateIcon(icon)">
              <component :is="icon.name"
                        :w="w"
                        :h="h">
              </component>
              <div class="box-content">
                {{ icon.libraryName }}
              </div>
            </div>
          </div>
        </section>

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

    <section
      :class="{ 'show' : visibleToast }"
      class="toast">
      <span>import {{ activeIcon.libraryName }} from 'vue-ionicons/dist/{{ activeIcon.name.replace('-icon', '') }}.vue'</span>
    </section>

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
      logoIcons: [],
      filteredLogoIcons: [],
      iosIcons: [],
      filteredIosIcons: [],
      mdIcons: [],
      filteredMdIcons: [],
      activeAppIcon: 'md',
      activeIcon: {
        libraryName: '',
        name: '',
        readableName: ''
      },
      visibleToast: false
    }
  },
  computed: {
    isMaterial () {
      return this.activeAppIcon === 'md'
    },
    isIos () {
      return this.activeAppIcon === 'ios'
    }
  },
  watch: {
    searchText(val) {
      if (val) {
        this.doFilterByKeyValue(val)
      }
    }
  },
  methods: {
    switchAppIcon (val) {
      this.activeAppIcon = val
    },
    doFilterByKeyValue(val) {
      if (val) {
        const normalizeText = (text) => {
          return text.toLowerCase().replace(/[\W_]+/g, '')
        }

        const predicate = (icon) => {
          return (normalizeText(icon.readableName).indexOf(normalizeText(val)) >= 0)
        }

        this.filteredLogoIcons = this.logoIcons.filter(predicate)
        this.filteredIosIcons = this.iosIcons.filter(predicate)
        this.filteredMdIcons = this.mdIcons.filter(predicate)
      } else {
        this.filteredLogoIcons = this.logoIcons
        this.filteredIosIcons = this.iosIcons
        this.filteredMdIcons = this.mdIcons
      }
    },
    activateIcon (icon) {
      this.activeIcon = icon
      this.visibleToast = true
      setTimeout(() => {
        this.visibleToast = false
      }, 5000)
    }
  },
  mounted() {
    const logo = this.icons.filter(item => item.name.indexOf('logo-') >= 0)
    const ios = this.icons.filter(item => item.name.indexOf('ios-') >= 0)
    const md = this.icons.filter(item => item.name.indexOf('md-') >= 0)

    this.logoIcons = logo
    this.filteredLogoIcons = logo
    this.iosIcons = ios
    this.filteredIosIcons = ios
    this.mdIcons = md
    this.filteredMdIcons = md
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
  color: #989494;
  font-size: 16px;
  font-weight: 200;
}

.grid__row {
  margin: 0 auto;
  max-width: 90%;
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

.appicon__wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.box {
  position: relative;
  width: 14%;
  cursor: pointer;
  padding: 7px 0 3px 0;
  text-align: center;
  margin: .5rem;
  color: #373737;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 0.25em;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  @media screen and (max-width: 480px) {
    width: 20%;
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

    @media screen and (max-width: 480px) {
      padding: 1em;
    }
  }
  &__input {
    -webkit-transition: -webkit-box-shadow .3s;
    transition: -webkit-box-shadow .3s;
    transition: box-shadow .3s;
    transition: box-shadow .3s,-webkit-box-shadow .3s;
    font-size: 16px;
    line-height: 22px;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08);

    width: 90%;
    font-weight: 400;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-appearance: none;
  }
}

pre {
  padding: 16px;
  background-color: #f6f8fa;
  overflow: auto;
  border-radius: 0.25em;


  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
}

.sample {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
}

.icons__list {
  @media screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
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
    width: 45%;
    font-size: 12px;

    h3 {
      margin-top: 0;
    }
  }
}

.section__head{

  h2{
    color: #a1aab8;
  }

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  margin-left: 1em;
}
.toggle{
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-right: 1em;
  align-items: flex-end;

  li{
    padding-bottom: 2px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    color: #3880ff;
    opacity: .5;
    padding: 1.5em .5em;
    margin: .5em;
    width: 100px;
    text-align: center;
    cursor: pointer;

    &.active{
      border-bottom: 2px solid #3880ff;
      opacity: 1;
    }
  }
}

.toast {
  visibility: hidden;
  min-width: 250px;
  background-color: #333;
  color: #fff;
  text-align: left;
  border-radius: .25em;
  padding: 1em;
  position: fixed;
  z-index: 99;
  left: 10px;
  bottom: 1em;
  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 5s;
    animation: fadein 0.5s, fadeout 0.5s 5s;
  }
}
@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 1em; opacity: 1;}
}
@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 1em; opacity: 1;}
}
@-webkit-keyframes fadeout {
    from {bottom: 1em; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
@keyframes fadeout {
    from {bottom: 1em; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
</style>

