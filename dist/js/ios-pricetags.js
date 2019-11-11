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
    name: "ios-pricetags-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-pricetags-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z"}}),_c('path',{attrs:{"d":"M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-pricetags-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z"}}),_c('path',{attrs:{"d":"M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z"}})])])};
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
      component.__file = "ios-pricetags.vue";

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
    

    
    var iosPricetags = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosPricetags;

})));
