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
    name: "ios-phone-landscape-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-phone-landscape-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M32 176.3v158.5c0 18.3 14.6 33.1 32.9 33.1h381c18.4 0 34.1-14.8 34.1-33.1V176.3c0-18.3-15.7-32.3-34.1-32.3h-381C46.6 144 32 158 32 176.3zM55 271v-30c0-2.2 1.8-4 4-4s4 1.8 4 4v30c0 2.2-1.8 4-4 4s-4-1.8-4-4zm414-15.5c0 9.6-7.8 17.4-17.4 17.4-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4zM424 160v192H83V160h341z"}}),_c('path',{attrs:{"d":"M441.6 255.5c0 5.5 4.5 10 9.9 10 5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.4.1-9.9 4.5-9.9 10z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-phone-landscape-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M32 176.3v158.5c0 18.3 14.6 33.1 32.9 33.1h381c18.4 0 34.1-14.8 34.1-33.1V176.3c0-18.3-15.7-32.3-34.1-32.3h-381C46.6 144 32 158 32 176.3zM55 271v-30c0-2.2 1.8-4 4-4s4 1.8 4 4v30c0 2.2-1.8 4-4 4s-4-1.8-4-4zm414-15.5c0 9.6-7.8 17.4-17.4 17.4-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4zM424 160v192H83V160h341z"}}),_c('path',{attrs:{"d":"M441.6 255.5c0 5.5 4.5 10 9.9 10 5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.4.1-9.9 4.5-9.9 10z"}})])])};
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
      component.__file = "ios-phone-landscape.vue";

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
    

    
    var iosPhoneLandscape = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosPhoneLandscape;

})));
