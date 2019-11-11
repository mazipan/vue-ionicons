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
    name: "md-cloudy-night-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Cloudy Night Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-cloudy-night-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2zM341.5 303.4C330.7 247.7 282.2 206 224 206c-34 0-65.1 12-86.5 39.1 29.4 2.2 56.7 13.1 77.7 34.2 15.6 15.7 26.6 34.9 32.1 55.8h-28.7c-13.1-37.6-48-64.5-90.6-64.5-5.1 0-12.3.6-17.7 1.7-45.7 9.4-78.3 47.6-78.3 95 0 53.4 43 96.8 96 96.8h208c44.1 0 80-36.1 80-80.6-.1-42.7-32.9-77.2-74.5-80.1z"}}),_c('path',{attrs:{"d":"M112.5 225.4c13.6-17.3 30.7-30.5 50.8-39.2 18.4-8 38.8-12 60.7-12 6.1 0 12.2.4 18.2 1.1-6.1-18.1-9.4-37.6-9.4-57.8 0-24.6 4.9-48.1 13.8-69.4C161.9 68.7 99 145.7 99 237.3c0 1.6 0 3.2.1 4.8.1 0 .2-.1.3-.1l13.1-16.6zM417.6 306.8c13.3 14.2 22.6 31.5 27.1 50.1 16.5-21.4 28.7-46.4 35.3-73.5-21.2 9-44.5 13.9-68.9 13.9h-3.6c3.5 2.9 6.9 6.1 10.1 9.5z"}})])])};
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
      component.__file = "md-cloudy-night.vue";

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
    

    
    var mdCloudyNight = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdCloudyNight;

})));
