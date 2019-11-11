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
    name: "ios-basketball-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-basketball-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M218.6 306.4c14.3-11.8 28.3-24.4 41.4-37.6l6.1-6.1c-2.8-2.9-5.6-5.8-8.3-8.5-49.9-49.9-107.7-89.6-171.8-118.1-18.4 26.1-31 56.6-35.8 89.6 32.2 2.3 63.2 10.5 92.2 24.5 28.8 13.9 54.4 32.8 76.2 56.2zM326.1 185.6c.5.5 1.1 1.1 1.7 1.6 20.9-30.5 38.8-63.2 53.5-97.4-33.8-25.5-75.6-41-121-41.9 2.4 22.3 8 44.1 16.7 64.7 11.5 27.4 28.1 52 49.1 73zM399 234.8c20.7 8.8 42.6 14.4 65 16.7-1.2-56.3-24.8-107.1-62.2-143.9-15 33.8-33.3 66.3-54.4 96.8 15.8 12.4 33.2 22.6 51.6 30.4zM193.9 318.1c-21.1-21.1-45.6-37.6-72.9-49.2-23.2-9.8-47.7-15.6-72.9-17.4 0 1.5-.1 3-.1 4.4 0 48.7 16.7 93.5 44.8 128.9 37.3-17 72.7-37.9 105.4-62.4-1.5-1.4-2.9-2.9-4.3-4.3zM283.8 243.6c10.1-11.3 19.7-23.1 28.8-35.1-44.5-42.3-72.1-98.6-78.2-159.5-51.9 5.4-98.1 29.8-131.5 66.2 33.4 15.3 65.5 33.8 95.6 55.1 30.5 21.7 59.2 46.3 85.3 73.3zM301.4 262.8c38.9 44 70.9 93.2 95.3 146.4 36.4-33.5 60.9-79.8 66.2-131.7-47.7-4.7-92.8-22.6-130.8-52-9.6 12.7-20 25.3-30.7 37.3zM235.3 326.2c29.9 39.5 47.5 86.2 51 135.6 33-4.8 63.5-17.4 89.5-35.8-23.4-52.6-54.3-101-92.2-144.2-15.2 15.6-31.4 30.5-48.3 44.4zM214.9 342.3c-32.4 24.4-67.4 45.5-104 62.8 37.5 36.5 88.6 59 145.1 59 1.5 0 3 0 4.5-.1-1.8-25.2-7.6-49.7-17.4-72.9-7.4-17.5-16.8-33.8-28.2-48.8z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-basketball-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M218.6 306.4c14.3-11.8 28.3-24.4 41.4-37.6l6.1-6.1c-2.8-2.9-5.6-5.8-8.3-8.5-49.9-49.9-107.7-89.6-171.8-118.1-18.4 26.1-31 56.6-35.8 89.6 32.2 2.3 63.2 10.5 92.2 24.5 28.8 13.9 54.4 32.8 76.2 56.2zM326.1 185.6c.5.5 1.1 1.1 1.7 1.6 20.9-30.5 38.8-63.2 53.5-97.4-33.8-25.5-75.6-41-121-41.9 2.4 22.3 8 44.1 16.7 64.7 11.5 27.4 28.1 52 49.1 73zM399 234.8c20.7 8.8 42.6 14.4 65 16.7-1.2-56.3-24.8-107.1-62.2-143.9-15 33.8-33.3 66.3-54.4 96.8 15.8 12.4 33.2 22.6 51.6 30.4zM193.9 318.1c-21.1-21.1-45.6-37.6-72.9-49.2-23.2-9.8-47.7-15.6-72.9-17.4 0 1.5-.1 3-.1 4.4 0 48.7 16.7 93.5 44.8 128.9 37.3-17 72.7-37.9 105.4-62.4-1.5-1.4-2.9-2.9-4.3-4.3zM283.8 243.6c10.1-11.3 19.7-23.1 28.8-35.1-44.5-42.3-72.1-98.6-78.2-159.5-51.9 5.4-98.1 29.8-131.5 66.2 33.4 15.3 65.5 33.8 95.6 55.1 30.5 21.7 59.2 46.3 85.3 73.3zM301.4 262.8c38.9 44 70.9 93.2 95.3 146.4 36.4-33.5 60.9-79.8 66.2-131.7-47.7-4.7-92.8-22.6-130.8-52-9.6 12.7-20 25.3-30.7 37.3zM235.3 326.2c29.9 39.5 47.5 86.2 51 135.6 33-4.8 63.5-17.4 89.5-35.8-23.4-52.6-54.3-101-92.2-144.2-15.2 15.6-31.4 30.5-48.3 44.4zM214.9 342.3c-32.4 24.4-67.4 45.5-104 62.8 37.5 36.5 88.6 59 145.1 59 1.5 0 3 0 4.5-.1-1.8-25.2-7.6-49.7-17.4-72.9-7.4-17.5-16.8-33.8-28.2-48.8z"}})])])};
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
      component.__file = "ios-basketball.vue";

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
    

    
    var iosBasketball = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosBasketball;

})));
