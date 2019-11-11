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
    name: "ios-link-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Link Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-link-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"}}),_c('path',{attrs:{"d":"M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"}})])])};
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
      component.__file = "ios-link.vue";

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
    

    
    var iosLink = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosLink;

})));
