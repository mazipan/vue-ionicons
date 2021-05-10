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
    name: "logo-googleplus-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-googleplus-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M318.2 230.9l-1.6-7H160V288h90.7c-9.4 45-48.4 63.6-84.1 63.6-26 0-50.2-7.8-68.3-25.3-18.6-18.1-28.9-43.1-28.9-70.4 0-27.1 9.8-51.8 27.6-69.6 17.7-17.7 42-25.4 68.7-25.4 30.5 0 49.9 13.8 58.1 21.1l48-47.7C258.3 122.6 221.5 93 164.1 93c-44.3 0-86.7 16.8-117.7 47.8C15.9 171.3 0 215.2 0 256s15 82.6 44.6 113.3C76.3 402 121.2 419 167.5 419c42.1 0 81.9-16.5 110.3-46.3 28-29.4 42.4-70.1 42.4-112.7-.1-18-1.9-28.7-2-29.1zM512 224h-57v-57h-41v57h-57v41h57v57h41v-57h57z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-googleplus-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M318.2 230.9l-1.6-7H160V288h90.7c-9.4 45-48.4 63.6-84.1 63.6-26 0-50.2-7.8-68.3-25.3-18.6-18.1-28.9-43.1-28.9-70.4 0-27.1 9.8-51.8 27.6-69.6 17.7-17.7 42-25.4 68.7-25.4 30.5 0 49.9 13.8 58.1 21.1l48-47.7C258.3 122.6 221.5 93 164.1 93c-44.3 0-86.7 16.8-117.7 47.8C15.9 171.3 0 215.2 0 256s15 82.6 44.6 113.3C76.3 402 121.2 419 167.5 419c42.1 0 81.9-16.5 110.3-46.3 28-29.4 42.4-70.1 42.4-112.7-.1-18-1.9-28.7-2-29.1zM512 224h-57v-57h-41v57h-57v41h57v57h41v-57h57z"}})])])};
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
      component.__file = "logo-googleplus.vue";

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
    

    
    var logoGoogleplus = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoGoogleplus;

})));
