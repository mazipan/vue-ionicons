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
    name: "ios-color-wand-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Color Wand Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-color-wand-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M445.7 405.6L201.3 160.4c-3.1-3.1-8.2-3.1-11.3 0l-28.7 28.8c-3.1 3.1-3.1 8.2 0 11.3l244.4 245.2c3.1 3.1 8.2 3.1 11.3 0l28.6-28.8c3.2-3.1 3.2-8.2.1-11.3zm-25.5 14.3l-.1.1c-3.1 3.1-8.2 3.1-11.3 0L218.9 229.5c-3.1-3.1-3.1-8.2 0-11.3l.1-.1c3.1-3.1 8.2-3.1 11.3 0l189.9 190.5c3.1 3.1 3.1 8.2 0 11.3zM192.8 120.1c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12s-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12zM192.8 263.3c-6.6 0-12 5.4-12 12v32.1c0 6.6 5.4 12 12 12s12-5.4 12-12v-32.1c0-6.6-5.4-12-12-12zM270.7 190.2c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12s-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12zM119.9 190.2c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12s5.4 12 12 12h32c6.5 0 11.9-5.4 11.9-12zM124.8 141c2.3 2.3 5.3 3.5 8.5 3.5s6.2-1.3 8.5-3.5c4.7-4.7 4.7-12.3 0-17l-20.9-21c-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5c-4.7 4.7-4.7 12.3 0 17l20.9 21zM133.3 239.9c-3.2 0-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5 5.3 3.5 8.5 3.5 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.2-5.3-3.5-8.5-3.5zM252.4 144.5c3.2 0 6.2-1.3 8.5-3.5l20.9-21c4.7-4.7 4.7-12.3 0-17-2.3-2.3-5.3-3.5-8.5-3.5s-6.2 1.3-8.5 3.5l-20.9 21c-2.3 2.3-3.5 5.3-3.5 8.5s1.2 6.2 3.5 8.5c2.3 2.2 5.3 3.5 8.5 3.5z"}})])])};
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
      component.__file = "ios-color-wand.vue";

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
    

    
    var iosColorWand = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosColorWand;

})));
