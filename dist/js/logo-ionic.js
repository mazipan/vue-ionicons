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
    name: "logo-ionic-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-ionic-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M256 161.2c-52.3 0-94.8 42.5-94.8 94.8s42.5 94.8 94.8 94.8 94.8-42.5 94.8-94.8-42.5-94.8-94.8-94.8z"}}),_c('circle',{attrs:{"cx":"392.1","cy":"126.4","r":"43.2"}}),_c('path',{attrs:{"d":"M445.3 169.8l-1.8-4-2.9 3.3c-7.1 8-16.1 14.2-26.1 17.9l-2.8 1 1.1 2.7c8.6 20.7 13 42.7 13 65.2 0 93.7-76.2 169.9-169.9 169.9S86.1 349.7 86.1 256 162.3 86.1 256 86.1c25.4 0 49.9 5.5 72.8 16.4l2.7 1.3 1.2-2.7c4.2-9.8 10.8-18.5 19.2-25.2l3.4-2.7-3.9-2C321.6 55.8 289.5 48 256 48 141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208c0-30-6.3-59-18.7-86.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-ionic-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M256 161.2c-52.3 0-94.8 42.5-94.8 94.8s42.5 94.8 94.8 94.8 94.8-42.5 94.8-94.8-42.5-94.8-94.8-94.8z"}}),_c('circle',{attrs:{"cx":"392.1","cy":"126.4","r":"43.2"}}),_c('path',{attrs:{"d":"M445.3 169.8l-1.8-4-2.9 3.3c-7.1 8-16.1 14.2-26.1 17.9l-2.8 1 1.1 2.7c8.6 20.7 13 42.7 13 65.2 0 93.7-76.2 169.9-169.9 169.9S86.1 349.7 86.1 256 162.3 86.1 256 86.1c25.4 0 49.9 5.5 72.8 16.4l2.7 1.3 1.2-2.7c4.2-9.8 10.8-18.5 19.2-25.2l3.4-2.7-3.9-2C321.6 55.8 289.5 48 256 48 141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208c0-30-6.3-59-18.7-86.2z"}})])])};
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
      component.__file = "logo-ionic.vue";

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
    

    
    var logoIonic = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoIonic;

})));
