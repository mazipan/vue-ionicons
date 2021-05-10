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
    name: "ios-nutrition-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-nutrition-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M359.1 231.9h-.1c-.1-.1-.3-.4-.4-.6l-78.9-79.6c-5.8-6-14.2-10.2-23.6-10.2-11.8 0-22.2 6.2-27.7 16.3 0 0-3.4 5.1-12.6 19.8-1.6 2.6-1.6 6 .1 8.6l26.8 41.2c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-32.3-20.5c-3.8-2.4-8.7-1.2-11.1 2.5-21.9 35.1-46.8 74.7-71.2 114-1.6 2.5-1.6 5.7-.1 8.3l14.1 24.1c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-16.6-8.4c-3.7-1.9-8.2-.6-10.4 2.9-17.7 28.3-28 44.7-29.1 46.5-3 5.1-5 11.2-5 17.8 0 17.8 14.2 32.2 31.9 32.2 7.8 0 14.4-3.4 20.6-7.6L221 378.8c3.4-2.5 4.2-7.2 2-10.7L202.5 336c-2.9-3.8-3.3-8-1.4-9.9l.1-.1c2.3-2.3 5.9-1.5 9.8 1.4l37.4 25.6c2.8 1.9 6.5 1.9 9.3-.2 53-39.1 97.5-72.2 97.5-72.2 7.9-6 13-15.4 13-26 0-8.7-3.1-16.8-9.1-22.7zM446.9 131.2l-11.2-17.9c-2.2-3.8-7.1-5.1-10.9-2.9L365.4 147l47.3-78.9c2.2-3.8.9-8.8-2.9-11l-17.7-8c-3.9-2.3-8.8-.9-11 3l-57.6 108.3 28.6 28.8 91.8-46.8c3.9-2.2 5.3-7.2 3-11.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-nutrition-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M359.1 231.9h-.1c-.1-.1-.3-.4-.4-.6l-78.9-79.6c-5.8-6-14.2-10.2-23.6-10.2-11.8 0-22.2 6.2-27.7 16.3 0 0-3.4 5.1-12.6 19.8-1.6 2.6-1.6 6 .1 8.6l26.8 41.2c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-32.3-20.5c-3.8-2.4-8.7-1.2-11.1 2.5-21.9 35.1-46.8 74.7-71.2 114-1.6 2.5-1.6 5.7-.1 8.3l14.1 24.1c2.9 3.8 3.3 8 1.4 9.9l-.1.1c-2.3 2.3-5.9 1.5-9.8-1.4l-16.6-8.4c-3.7-1.9-8.2-.6-10.4 2.9-17.7 28.3-28 44.7-29.1 46.5-3 5.1-5 11.2-5 17.8 0 17.8 14.2 32.2 31.9 32.2 7.8 0 14.4-3.4 20.6-7.6L221 378.8c3.4-2.5 4.2-7.2 2-10.7L202.5 336c-2.9-3.8-3.3-8-1.4-9.9l.1-.1c2.3-2.3 5.9-1.5 9.8 1.4l37.4 25.6c2.8 1.9 6.5 1.9 9.3-.2 53-39.1 97.5-72.2 97.5-72.2 7.9-6 13-15.4 13-26 0-8.7-3.1-16.8-9.1-22.7zM446.9 131.2l-11.2-17.9c-2.2-3.8-7.1-5.1-10.9-2.9L365.4 147l47.3-78.9c2.2-3.8.9-8.8-2.9-11l-17.7-8c-3.9-2.3-8.8-.9-11 3l-57.6 108.3 28.6 28.8 91.8-46.8c3.9-2.2 5.3-7.2 3-11.2z"}})])])};
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
      component.__file = "ios-nutrition.vue";

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
    

    
    var iosNutrition = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosNutrition;

})));
