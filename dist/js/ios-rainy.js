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
    name: "ios-rainy-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Rainy Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-rainy-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M433.9 175.6c-19-17.6-44.6-27.3-72.1-27.3h-5.6c-6.5-23.5-19.4-43.5-37.6-58.2C297.3 73 269.5 64 238.1 64c-32.7 0-63.2 11.7-86 32.9-22.8 21.2-35.5 50-36.1 81.4-17.5 4-33.6 13.7-46 27.9-14.2 16.2-22 36.6-22 57.4 0 44.6 34.9 82.6 77.4 86L101.2 382c-2.4 3.2-3.3 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37.1-50h35.1l-55.3 75.1c-2.3 3.2-3.4 6.9-2.9 10.6.5 3.9 2.6 7.4 5.9 9.8 3.5 2.5 7.5 2.8 9 2.8 7.2 0 11.2-3.5 13.4-6.4l67.4-91.8H270L246 382c-2.4 3.3-3.4 7.2-2.7 11.1.6 3.9 2.8 7.3 6 9.6 2.5 1.8 5.5 2.7 8.6 2.7 5.2 0 9.8-2.1 12.5-5.8l37-50h35.1l-55.3 75.1c-2.3 3.2-3.4 7-2.9 10.6.5 3.8 2.6 7.2 5.9 9.6 2.6 1.9 5.9 3 8.9 3 5.1 0 9.7-2.2 12.5-6l69.7-95.1c22.4-4.5 43-16.6 58.1-34.5 15.9-18.8 24.7-42.6 24.7-67.1-.1-26.8-10.8-51.6-30.2-69.6z"}})])])};
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
      component.__file = "ios-rainy.vue";

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
    

    
    var iosRainy = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosRainy;

})));
