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
    name: "ios-planet-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-planet-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M462.5 352.3c-1.9-5.5-5.6-11.5-11.4-18.3-10.2-12-30.8-29.3-54.8-47.2-2.6-2-6.4-.8-7.5 2.3l-4.7 13.4c-.7 2 0 4.3 1.7 5.5 15.9 11.6 35.9 27.9 41.8 35.9 2 2.8-.5 6.6-3.9 5.8-10-2.3-29-7.3-44.2-12.8-8.6-3.1-17.7-6.7-27.2-10.6 16-20.8 24.7-46.3 24.7-72.6 0-32.8-13.2-63.6-37.1-86.4-22.9-21.9-53.8-34.1-85.7-33.7-25.7.3-50.1 8.4-70.7 23.5-18.3 13.4-32.2 31.3-40.6 52-8.3-6-16.1-11.9-23.2-17.6-13.7-10.9-28.4-22-38.7-34.7-2.2-2.8.9-6.7 4.4-5.9 11.3 2.6 35.4 10.9 56.4 18.9 1.5.6 3.2.3 4.5-.8l11.1-10.1c2.4-2.1 1.7-6-1.3-7.2C121 137.4 89.2 128 73.2 128c-11.5 0-19.3 3.5-23.3 10.4-7.6 13.3 7.1 35.2 45.1 66.8 34.1 28.5 82.6 61.8 136.5 92 87.5 49.1 171.1 81 208 81 11.2 0 18.7-3.1 22.1-9.1 2.8-4.7 3.1-10.4.9-16.8zM312 354c-29.1-12.8-59.3-26-92.6-44.8-30.1-16.9-59.4-36.5-84.4-53.6-1-.7-2.2-1.1-3.4-1.1-.9 0-1.9.2-2.8.7-2 1-3.3 3-3.3 5.2 0 1.2-.1 2.4-.1 3.5 0 32.1 12.6 62.3 35.5 84.9 22.9 22.7 53.4 35.2 85.8 35.2 23.6 0 46.5-6.7 66.2-19.5 1.9-1.2 2.9-3.3 2.7-5.5-.1-2.2-1.5-4.1-3.6-5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-planet-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M462.5 352.3c-1.9-5.5-5.6-11.5-11.4-18.3-10.2-12-30.8-29.3-54.8-47.2-2.6-2-6.4-.8-7.5 2.3l-4.7 13.4c-.7 2 0 4.3 1.7 5.5 15.9 11.6 35.9 27.9 41.8 35.9 2 2.8-.5 6.6-3.9 5.8-10-2.3-29-7.3-44.2-12.8-8.6-3.1-17.7-6.7-27.2-10.6 16-20.8 24.7-46.3 24.7-72.6 0-32.8-13.2-63.6-37.1-86.4-22.9-21.9-53.8-34.1-85.7-33.7-25.7.3-50.1 8.4-70.7 23.5-18.3 13.4-32.2 31.3-40.6 52-8.3-6-16.1-11.9-23.2-17.6-13.7-10.9-28.4-22-38.7-34.7-2.2-2.8.9-6.7 4.4-5.9 11.3 2.6 35.4 10.9 56.4 18.9 1.5.6 3.2.3 4.5-.8l11.1-10.1c2.4-2.1 1.7-6-1.3-7.2C121 137.4 89.2 128 73.2 128c-11.5 0-19.3 3.5-23.3 10.4-7.6 13.3 7.1 35.2 45.1 66.8 34.1 28.5 82.6 61.8 136.5 92 87.5 49.1 171.1 81 208 81 11.2 0 18.7-3.1 22.1-9.1 2.8-4.7 3.1-10.4.9-16.8zM312 354c-29.1-12.8-59.3-26-92.6-44.8-30.1-16.9-59.4-36.5-84.4-53.6-1-.7-2.2-1.1-3.4-1.1-.9 0-1.9.2-2.8.7-2 1-3.3 3-3.3 5.2 0 1.2-.1 2.4-.1 3.5 0 32.1 12.6 62.3 35.5 84.9 22.9 22.7 53.4 35.2 85.8 35.2 23.6 0 46.5-6.7 66.2-19.5 1.9-1.2 2.9-3.3 2.7-5.5-.1-2.2-1.5-4.1-3.6-5z"}})])])};
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
      component.__file = "ios-planet.vue";

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
    

    
    var iosPlanet = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosPlanet;

})));
