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
    name: "ios-color-fill-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-color-fill-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M231.5 118.3c.1 0 .1-.1 0 0L175.3 62c-9.3-9.3-21.6-14-33.9-14-12.3 0-24.6 4.7-33.9 14-18.7 18.7-18.7 49.2 0 67.9l49.3 49.3-84.5 84c-11.1 11.1-11 29.2.3 40l131.2 126c10.9 10.4 28 10.4 38.9-.1 37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3c5.9 0 8.8-7.1 4.6-11.2L231.5 118.3zm-103.9-7.9c-7.2-7.2-8.3-18.8-2-26.8 3.8-4.9 9.6-7.6 15.8-7.6 5.4 0 10.4 2.1 14.1 5.8l49.3 49.3-28.3 28.3-48.9-49zM403 339.5c-1.6-1.9-4.5-1.9-6.1 0-10.5 12.2-45 53.9-45 76.4 0 26.6 21.5 48.1 48 48.1s48-21.6 48-48.1c.1-22.6-34.3-64.2-44.9-76.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-color-fill-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M231.5 118.3c.1 0 .1-.1 0 0L175.3 62c-9.3-9.3-21.6-14-33.9-14-12.3 0-24.6 4.7-33.9 14-18.7 18.7-18.7 49.2 0 67.9l49.3 49.3-84.5 84c-11.1 11.1-11 29.2.3 40l131.2 126c10.9 10.4 28 10.4 38.9-.1 37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3c5.9 0 8.8-7.1 4.6-11.2L231.5 118.3zm-103.9-7.9c-7.2-7.2-8.3-18.8-2-26.8 3.8-4.9 9.6-7.6 15.8-7.6 5.4 0 10.4 2.1 14.1 5.8l49.3 49.3-28.3 28.3-48.9-49zM403 339.5c-1.6-1.9-4.5-1.9-6.1 0-10.5 12.2-45 53.9-45 76.4 0 26.6 21.5 48.1 48 48.1s48-21.6 48-48.1c.1-22.6-34.3-64.2-44.9-76.4z"}})])])};
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
      component.__file = "ios-color-fill.vue";

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
    

    
    var iosColorFill = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosColorFill;

})));
