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
    name: "ios-paw-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Paw Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-paw-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M324.3 80.3c-1.2-.2-2.4-.3-3.6-.3v.4-.3h-.4c-22 0-42.9 25.9-47.8 60.3-5.3 36.6 9.4 69 32.7 72.4 1.3.2 2.7.3 4 .3 22 0 42.9-25.9 47.8-60.3 5.3-36.7-9.4-69.1-32.7-72.5zM320.6 80zM442.3 169.4c-3.5-1.4-7.1-2.1-10.9-2.1h-.4c-19.7.3-41.8 19.2-53.4 47.8-13.9 34.2-7.5 69.2 14.4 78.2 3.5 1.4 7.1 2.1 10.9 2.1 19.8 0 42.2-19 53.9-47.8 13.8-34.2 7.3-69.2-14.5-78.2zM327.6 295.4c-27.8-43.6-39.8-60-71.6-60s-43.9 16.5-71.7 60c-23.8 37.2-71.9 40.3-83.9 71.9-2.4 5.6-3.6 11.7-3.6 18.2 0 25.7 20.8 46.5 46.4 46.5 31.8 0 75.1-24 112.9-24s80.9 24 112.7 24c25.6 0 46.3-20.8 46.3-46.5 0-6.5-1.3-12.6-3.7-18.2-12-31.7-60-34.7-83.8-71.9zM202.8 213c1.3 0 2.7-.1 4-.3 23.4-3.4 38-35.8 32.7-72.4-5-34.5-25.9-60.3-47.8-60.3-1.3 0-2.7.1-4 .3-23.4 3.4-38 35.8-32.7 72.4 5 34.4 25.9 60.3 47.8 60.3zM120.1 293.3c21.9-9 28.3-44 14.4-78.2-11.7-28.8-34.1-47.8-53.9-47.8-3.8 0-7.4.7-10.9 2.1-21.9 9-28.3 44-14.4 78.2 11.7 28.8 34.1 47.8 53.9 47.8 3.8 0 7.4-.7 10.9-2.1z"}})])])};
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
      component.__file = "ios-paw.vue";

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
    

    
    var iosPaw = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosPaw;

})));
