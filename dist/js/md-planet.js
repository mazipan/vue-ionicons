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
    name: "md-planet-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-planet-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"}}),_c('path',{attrs:{"d":"M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-planet-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z"}}),_c('path',{attrs:{"d":"M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z"}})])])};
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
      component.__file = "md-planet.vue";

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
    

    
    var mdPlanet = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdPlanet;

})));
