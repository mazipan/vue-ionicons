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
    name: "logo-javascript-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-javascript-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-javascript-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"}})])])};
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
      component.__file = "logo-javascript.vue";

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
    

    
    var logoJavascript = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoJavascript;

})));
