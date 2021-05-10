(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueIonicons = factory());
}(this, (function () { 'use strict';

  var A_ROTATE = 'rotate';
  var A_BEAT = 'beat';
  var A_SHAKE = 'shake';
  var IoniconsMixin = {
    computed: {
      ionClass: function ionClass() {
        var addClass = '';

        if (this.animate === A_ROTATE) {
          addClass = 'ion-rotate ';
        } else if (this.animate === A_BEAT) {
          addClass = 'ion-beat ';
        } else if (this.animate === A_SHAKE) {
          addClass = 'ion-shake ';
        }

        return "".concat(this.rootClass, " ").concat(addClass);
      }
    },
    props: {
      title: {
        type: String,
        "default": ''
      },
      rootClass: {
        type: String,
        "default": ''
      },
      w: {
        type: String,
        "default": '1em'
      },
      h: {
        type: String,
        "default": '1em'
      },
      animate: {
        type: String,
        "default": ''
      }
    }
  };

  //
  var script = {
    name: "ios-git-network-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : null;
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-git-network-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M377.4 32c-38.9 0-70.6 31.7-70.6 70.7 0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v43.1L256 270.3l-106.4-55.4v-43.1c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7S64 63.7 64 102.7c0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v57.4c0 2.7 1.5 5.1 3.9 6.3l117.5 60.8v43.9c-32.2 6.9-55.7 35.6-55.7 69.1 0 39 31.7 70.7 70.6 70.7s70.6-31.7 70.6-70.7c0-17.1-6.2-33.7-17.5-46.6-10-11.5-23.5-19.4-38.2-22.5v-43.9l117.5-60.8c2.4-1.2 3.9-3.6 3.9-6.3v-57.4c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7zM93.8 102.7c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8zm203 306.6c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8zm80.6-265.7c-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8 22.5 0 40.8 18.3 40.8 40.8 0 22.4-18.3 40.8-40.8 40.8z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-git-network-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M377.4 32c-38.9 0-70.6 31.7-70.6 70.7 0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v43.1L256 270.3l-106.4-55.4v-43.1c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7S64 63.7 64 102.7c0 17.1 6.2 33.7 17.5 46.6 10 11.5 23.5 19.4 38.2 22.5v57.4c0 2.7 1.5 5.1 3.9 6.3l117.5 60.8v43.9c-32.2 6.9-55.7 35.6-55.7 69.1 0 39 31.7 70.7 70.6 70.7s70.6-31.7 70.6-70.7c0-17.1-6.2-33.7-17.5-46.6-10-11.5-23.5-19.4-38.2-22.5v-43.9l117.5-60.8c2.4-1.2 3.9-3.6 3.9-6.3v-57.4c32.2-6.9 55.7-35.6 55.7-69.1 0-39-31.7-70.7-70.6-70.7zM93.8 102.7c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8zm203 306.6c0 22.5-18.3 40.8-40.8 40.8s-40.8-18.3-40.8-40.8c0-22.5 18.3-40.8 40.8-40.8s40.8 18.3 40.8 40.8zm80.6-265.7c-22.5 0-40.8-18.3-40.8-40.8 0-22.5 18.3-40.8 40.8-40.8 22.5 0 40.8 18.3 40.8 40.8 0 22.4-18.3 40.8-40.8 40.8z"}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "ios-git-network.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var iosGitNetwork = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosGitNetwork;

})));
