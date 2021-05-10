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
    name: "md-flame-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-flame-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M393.3 222.1l-.2 10.4c-.8 11.7-7.9 43.4-22.1 54.7 7-15.2 17.3-47.2 10.2-82.7C361.6 107 287.5 65.6 193 50l-17.2-2.2c39.5 47.2 56.1 81.7 49.7 116.8-2.3 12.6-10 23.4-14 31.6 0 0 2.4-12.9 2-28.7-.3-14.2-6.6-31-18-39.6 3.5 18.4-.8 33.5-9.1 47.7-24.7 42.2-85.4 57.8-90.4 135.8v3.8c0 53.7 25.6 99 68.7 125-6.8-12.3-12-35.2-5.7-60.2 4 23.7 14 36 24.9 51.8 8.2 11.7 19.1 19.3 33.1 24.9s31 7.2 47.9 7.2c55.8 0 91.4-18.1 119.1-50.5s32.1-68 32.1-106.4-8.5-60.9-22.8-84.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-flame-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M393.3 222.1l-.2 10.4c-.8 11.7-7.9 43.4-22.1 54.7 7-15.2 17.3-47.2 10.2-82.7C361.6 107 287.5 65.6 193 50l-17.2-2.2c39.5 47.2 56.1 81.7 49.7 116.8-2.3 12.6-10 23.4-14 31.6 0 0 2.4-12.9 2-28.7-.3-14.2-6.6-31-18-39.6 3.5 18.4-.8 33.5-9.1 47.7-24.7 42.2-85.4 57.8-90.4 135.8v3.8c0 53.7 25.6 99 68.7 125-6.8-12.3-12-35.2-5.7-60.2 4 23.7 14 36 24.9 51.8 8.2 11.7 19.1 19.3 33.1 24.9s31 7.2 47.9 7.2c55.8 0 91.4-18.1 119.1-50.5s32.1-68 32.1-106.4-8.5-60.9-22.8-84.9z"}})])])};
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
      component.__file = "md-flame.vue";

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
    

    
    var mdFlame = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdFlame;

})));
