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
    name: "ios-cloudy-night-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-cloudy-night-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M277.8 294.8c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3-9.3-40.8-45.9-71.5-89.7-71.5-50.8 0-91.9 40.9-91.9 91.4 0 3.1.2 6.1.5 9.1-31 2.7-55.3 30.1-55.3 61.6C32 419 58.8 448 92.3 448h185.5c41.9 0 75.8-34.7 75.8-76.3 0-41.6-33.9-76.9-75.8-76.9z"}}),_c('path',{attrs:{"d":"M452.1 305.4c-2.5.1-5 .2-7.6.2-41.7 0-80.8-15.7-110.3-44.3-29.5-28.5-45.7-66.5-45.7-106.8 0-23 5.3-45.2 15.2-65.3L315.4 70c1.7-2.9-.8-6.5-4.1-6-7.6 1.2-15.7 4-23.2 6.3-59.5 18.2-104.4 68.1-113.7 129.3 1.4-.1 2.9-.1 4.3-.1 26.5 0 52.4 9.2 73 25.9 15.1 12.2 26.9 28 34.2 45.7 23.7 2 45.7 12.4 62.7 29.8 18.7 19.1 29 44.2 29 70.7 0 2.3-.1 4.6-.2 6.8 34.2-8.1 64.3-26.6 86.4-51.8 4.8-5.5 11.3-12.8 15.3-18.5 2-2.8-.3-6.7-3.8-6.3-6.8 1-15.9 3.2-23.2 3.6z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-cloudy-night-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M277.8 294.8c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3-9.3-40.8-45.9-71.5-89.7-71.5-50.8 0-91.9 40.9-91.9 91.4 0 3.1.2 6.1.5 9.1-31 2.7-55.3 30.1-55.3 61.6C32 419 58.8 448 92.3 448h185.5c41.9 0 75.8-34.7 75.8-76.3 0-41.6-33.9-76.9-75.8-76.9z"}}),_c('path',{attrs:{"d":"M452.1 305.4c-2.5.1-5 .2-7.6.2-41.7 0-80.8-15.7-110.3-44.3-29.5-28.5-45.7-66.5-45.7-106.8 0-23 5.3-45.2 15.2-65.3L315.4 70c1.7-2.9-.8-6.5-4.1-6-7.6 1.2-15.7 4-23.2 6.3-59.5 18.2-104.4 68.1-113.7 129.3 1.4-.1 2.9-.1 4.3-.1 26.5 0 52.4 9.2 73 25.9 15.1 12.2 26.9 28 34.2 45.7 23.7 2 45.7 12.4 62.7 29.8 18.7 19.1 29 44.2 29 70.7 0 2.3-.1 4.6-.2 6.8 34.2-8.1 64.3-26.6 86.4-51.8 4.8-5.5 11.3-12.8 15.3-18.5 2-2.8-.3-6.7-3.8-6.3-6.8 1-15.9 3.2-23.2 3.6z"}})])])};
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
      component.__file = "ios-cloudy-night.vue";

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
    

    
    var iosCloudyNight = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosCloudyNight;

})));
