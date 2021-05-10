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
    name: "md-speedometer-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-speedometer-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"}}),_c('path',{attrs:{"d":"M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-speedometer-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"}}),_c('path',{attrs:{"d":"M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"}})])])};
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
      component.__file = "md-speedometer.vue";

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
    

    
    var mdSpeedometer = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdSpeedometer;

})));
