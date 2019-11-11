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
    name: "logo-chrome-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-chrome-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M188.8 255.925c0 36.946 30.243 67.178 67.2 67.178s67.199-30.231 67.199-67.178c0-36.945-30.242-67.179-67.199-67.179s-67.2 30.234-67.2 67.179z"}}),_c('path',{attrs:{"d":"M476.752 217.795c-.009.005-.016.038-.024.042-1.701-9.877-4.04-19.838-6.989-28.838h-.107c2.983 9 5.352 19 7.072 29h-.002c-1.719-10-4.088-20-7.07-29h-155.39c19.044 17 31.358 40.175 31.358 67.052 0 16.796-4.484 31.284-12.314 44.724L231.044 478.452s-.009.264-.014.264l-.01.284h.015l-.005-.262c8.203.92 16.531 1.262 24.97 1.262 6.842 0 13.609-.393 20.299-1.002a223.86 223.86 0 0 0 29.777-4.733C405.68 451.525 480 362.404 480 255.941c0-12.999-1.121-25.753-3.248-38.146z"}}),_c('path',{attrs:{"d":"M256 345.496c-33.601 0-61.601-17.91-77.285-44.785L76.006 123.047l-.137-.236a223.516 223.516 0 0 0-25.903 45.123C38.407 194.945 32 224.686 32 255.925c0 62.695 25.784 119.36 67.316 160.009 29.342 28.719 66.545 49.433 108.088 58.619l.029-.051 77.683-134.604c-8.959 3.358-19.031 5.598-29.116 5.598z"}}),_c('path',{attrs:{"d":"M91.292 104.575l77.35 133.25C176.483 197.513 212.315 166 256 166h205.172c-6.921-15-15.594-30.324-25.779-43.938.039.021.078.053.117.074C445.644 135.712 454.278 151 461.172 166h.172c-6.884-15-15.514-30.38-25.668-43.99-.115-.06-.229-.168-.342-.257C394.475 67.267 329.359 32 256 32c-26.372 0-51.673 4.569-75.172 12.936-34.615 12.327-65.303 32.917-89.687 59.406l.142.243.009-.01z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-chrome-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M188.8 255.925c0 36.946 30.243 67.178 67.2 67.178s67.199-30.231 67.199-67.178c0-36.945-30.242-67.179-67.199-67.179s-67.2 30.234-67.2 67.179z"}}),_c('path',{attrs:{"d":"M476.752 217.795c-.009.005-.016.038-.024.042-1.701-9.877-4.04-19.838-6.989-28.838h-.107c2.983 9 5.352 19 7.072 29h-.002c-1.719-10-4.088-20-7.07-29h-155.39c19.044 17 31.358 40.175 31.358 67.052 0 16.796-4.484 31.284-12.314 44.724L231.044 478.452s-.009.264-.014.264l-.01.284h.015l-.005-.262c8.203.92 16.531 1.262 24.97 1.262 6.842 0 13.609-.393 20.299-1.002a223.86 223.86 0 0 0 29.777-4.733C405.68 451.525 480 362.404 480 255.941c0-12.999-1.121-25.753-3.248-38.146z"}}),_c('path',{attrs:{"d":"M256 345.496c-33.601 0-61.601-17.91-77.285-44.785L76.006 123.047l-.137-.236a223.516 223.516 0 0 0-25.903 45.123C38.407 194.945 32 224.686 32 255.925c0 62.695 25.784 119.36 67.316 160.009 29.342 28.719 66.545 49.433 108.088 58.619l.029-.051 77.683-134.604c-8.959 3.358-19.031 5.598-29.116 5.598z"}}),_c('path',{attrs:{"d":"M91.292 104.575l77.35 133.25C176.483 197.513 212.315 166 256 166h205.172c-6.921-15-15.594-30.324-25.779-43.938.039.021.078.053.117.074C445.644 135.712 454.278 151 461.172 166h.172c-6.884-15-15.514-30.38-25.668-43.99-.115-.06-.229-.168-.342-.257C394.475 67.267 329.359 32 256 32c-26.372 0-51.673 4.569-75.172 12.936-34.615 12.327-65.303 32.917-89.687 59.406l.142.243.009-.01z"}})])])};
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
      component.__file = "logo-chrome.vue";

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
    

    
    var logoChrome = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoChrome;

})));
