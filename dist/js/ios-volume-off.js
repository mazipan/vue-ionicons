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
    name: "ios-volume-off-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-volume-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M390.1 464c-4.9 0-9.7-2.5-12.3-7L149.7 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l228.1 387.7c4 6.7 1.7 15.4-5.1 19.3-2.2 1.3-4.7 1.9-7.2 1.9zM133 200H80c-8.9 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h53l65.4 52.5c2.9 2.3 6.5 3.5 10.1 3.5 2.4 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V227.9L184 159.1 133 200zM448 256c0-59.3-23.3-114.9-65.5-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17C403.3 153.7 424 203.2 424 256c0 44.4-14.7 86.4-41.7 120.8l13 22C429.4 359.1 448 309 448 256z"}}),_c('path',{attrs:{"d":"M385.2 256c0-43.5-16.7-84.3-46.9-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.8 26.1 40 60.9 40 98.1 0 21.6-4.8 42.5-13.9 61.2l14.2 24.1c15.4-25.4 23.7-54.7 23.7-85.4zM317.6 256c0-27.8-10.7-53.9-30-73.4-4.7-4.7-12.3-4.8-17-.1-.6.6-1.1 1.2-1.6 1.9l48.1 81.8c.3-3.4.5-6.8.5-10.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-volume-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M390.1 464c-4.9 0-9.7-2.5-12.3-7L149.7 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l228.1 387.7c4 6.7 1.7 15.4-5.1 19.3-2.2 1.3-4.7 1.9-7.2 1.9zM133 200H80c-8.9 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h53l65.4 52.5c2.9 2.3 6.5 3.5 10.1 3.5 2.4 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V227.9L184 159.1 133 200zM448 256c0-59.3-23.3-114.9-65.5-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17C403.3 153.7 424 203.2 424 256c0 44.4-14.7 86.4-41.7 120.8l13 22C429.4 359.1 448 309 448 256z"}}),_c('path',{attrs:{"d":"M385.2 256c0-43.5-16.7-84.3-46.9-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.8 26.1 40 60.9 40 98.1 0 21.6-4.8 42.5-13.9 61.2l14.2 24.1c15.4-25.4 23.7-54.7 23.7-85.4zM317.6 256c0-27.8-10.7-53.9-30-73.4-4.7-4.7-12.3-4.8-17-.1-.6.6-1.1 1.2-1.6 1.9l48.1 81.8c.3-3.4.5-6.8.5-10.2z"}})])])};
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
      component.__file = "ios-volume-off.vue";

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
    

    
    var iosVolumeOff = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosVolumeOff;

})));
