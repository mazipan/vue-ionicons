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
    name: "ios-tv-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-tv-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z"}}),_c('path',{attrs:{"d":"M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zM370 406H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-tv-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z"}}),_c('path',{attrs:{"d":"M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zM370 406H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z"}})])])};
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
      component.__file = "ios-tv.vue";

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
    

    
    var iosTv = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosTv;

})));
