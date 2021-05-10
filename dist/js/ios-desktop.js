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
    name: "ios-desktop-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-desktop-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M352 442.2c-.3-2.2-2-3.9-4.2-4.3l-22.3-1.9c-11.8-3.1-20.5-16.2-22.3-28.3L302 400h-92l-1.2 7.6c-1.9 12.1-10.5 25.2-22.3 28.3l-22.3 1.9c-2.1.5-3.9 2.2-4.2 4.3-.4 3.1 2 5.8 5.1 5.8h181.8c3 .1 5.5-2.6 5.1-5.7zM472.9 71c-4.5-4.5-10.7-7-17-7H56.2c-6.4 0-12.5 2.5-17 7S32 81.7 32 88v272c0 6.4 2.7 12.5 7.2 17s10.5 7 16.8 7h400c6.4 0 12.3-2.5 16.8-7s7.2-10.7 7.2-17V88c.1-6.3-2.6-12.5-7.1-17zM256 360c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm203.9-40H52.2c-2.2 0-4-1.8-4-4V92c0-6.6 5.4-12 12-12h391.7c6.6 0 12 5.4 12 12v224c0 2.2-1.8 4-4 4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-desktop-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M352 442.2c-.3-2.2-2-3.9-4.2-4.3l-22.3-1.9c-11.8-3.1-20.5-16.2-22.3-28.3L302 400h-92l-1.2 7.6c-1.9 12.1-10.5 25.2-22.3 28.3l-22.3 1.9c-2.1.5-3.9 2.2-4.2 4.3-.4 3.1 2 5.8 5.1 5.8h181.8c3 .1 5.5-2.6 5.1-5.7zM472.9 71c-4.5-4.5-10.7-7-17-7H56.2c-6.4 0-12.5 2.5-17 7S32 81.7 32 88v272c0 6.4 2.7 12.5 7.2 17s10.5 7 16.8 7h400c6.4 0 12.3-2.5 16.8-7s7.2-10.7 7.2-17V88c.1-6.3-2.6-12.5-7.1-17zM256 360c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm203.9-40H52.2c-2.2 0-4-1.8-4-4V92c0-6.6 5.4-12 12-12h391.7c6.6 0 12 5.4 12 12v224c0 2.2-1.8 4-4 4z"}})])])};
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
      component.__file = "ios-desktop.vue";

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
    

    
    var iosDesktop = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosDesktop;

})));
