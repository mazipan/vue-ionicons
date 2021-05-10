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
    name: "ios-american-football-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-american-football-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M378.6 133.4C338.1 92.9 283.9 71 231.4 59.6L59.6 231.4C71 284 92.9 338.1 133.4 378.6c40.5 40.5 94.7 62.4 147.2 73.8l171.8-171.8c-11.4-52.5-33.3-106.7-73.8-147.2zM344.1 288l-19.2 19.2 14.8 14.8c4.9 4.9 4.9 12.7 0 17.6-4.9 4.9-12.7 4.9-17.6 0l-14.8-14.8-19.3 19.4c-2 2-4.5 3.4-7.3 3.9-4.2.7-8.4-.7-11.3-3.6-1.5-1.5-2.6-3.3-3.2-5.3-1.4-4.9-.1-9.7 3.2-13.1l19.5-19.5-15.6-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-14.8-14.8c-4.9-4.9-4.9-12.7 0-17.6 4.9-4.9 12.7-4.9 17.6 0l14.8 14.8 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2l-19.5 19.5 15.6 15.6 19.3-19.3c2-2 4.5-3.4 7.3-3.9 4.2-.7 8.4.7 11.3 3.6 1.5 1.4 2.6 3.2 3.2 5.2 1.5 4.9.2 9.8-3.2 13.2L257 239.4l15.6 15.6 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2L291 273.4l15.6 15.6 19.3-19.3c2.2-2.2 5-3.6 8-4 4.4-.5 8.6 1.2 11.4 4.6 4.1 5 3.5 13.1-1.2 17.7zM395.1 464c27.6 0 48.8-1.8 58.8-2.9 3.7-.4 6.7-3.4 7.1-7.1 2-18.9 6.8-77.6-3.2-143.7L310.3 457.9c31 4.7 60.4 6.1 84.8 6.1zM116.8 48C89.3 48 68 49.8 58 50.9c-3.7.4-6.7 3.4-7.1 7.1-2 18.9-6.8 77.6 3.2 143.6L201.6 54.1c-31-4.7-60.4-6.1-84.8-6.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-american-football-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M378.6 133.4C338.1 92.9 283.9 71 231.4 59.6L59.6 231.4C71 284 92.9 338.1 133.4 378.6c40.5 40.5 94.7 62.4 147.2 73.8l171.8-171.8c-11.4-52.5-33.3-106.7-73.8-147.2zM344.1 288l-19.2 19.2 14.8 14.8c4.9 4.9 4.9 12.7 0 17.6-4.9 4.9-12.7 4.9-17.6 0l-14.8-14.8-19.3 19.4c-2 2-4.5 3.4-7.3 3.9-4.2.7-8.4-.7-11.3-3.6-1.5-1.5-2.6-3.3-3.2-5.3-1.4-4.9-.1-9.7 3.2-13.1l19.5-19.5-15.6-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-15.5-15.6-19.3 19.3c-2.1 2.1-4.7 3.5-7.6 3.9-5.5.7-10.7-1.9-13.4-7-.3-.6-.6-1.2-.8-1.9-1.5-4.9-.2-9.8 3.2-13.2l19.5-19.5-14.8-14.8c-4.9-4.9-4.9-12.7 0-17.6 4.9-4.9 12.7-4.9 17.6 0l14.8 14.8 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2l-19.5 19.5 15.6 15.6 19.3-19.3c2-2 4.5-3.4 7.3-3.9 4.2-.7 8.4.7 11.3 3.6 1.5 1.4 2.6 3.2 3.2 5.2 1.5 4.9.2 9.8-3.2 13.2L257 239.4l15.6 15.6 19.3-19.3c2.1-2.1 4.7-3.5 7.6-3.9 5.5-.7 10.7 1.9 13.4 7 .3.6.6 1.2.8 1.9 1.5 4.9.2 9.8-3.2 13.2L291 273.4l15.6 15.6 19.3-19.3c2.2-2.2 5-3.6 8-4 4.4-.5 8.6 1.2 11.4 4.6 4.1 5 3.5 13.1-1.2 17.7zM395.1 464c27.6 0 48.8-1.8 58.8-2.9 3.7-.4 6.7-3.4 7.1-7.1 2-18.9 6.8-77.6-3.2-143.7L310.3 457.9c31 4.7 60.4 6.1 84.8 6.1zM116.8 48C89.3 48 68 49.8 58 50.9c-3.7.4-6.7 3.4-7.1 7.1-2 18.9-6.8 77.6 3.2 143.6L201.6 54.1c-31-4.7-60.4-6.1-84.8-6.1z"}})])])};
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
      component.__file = "ios-american-football.vue";

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
    

    
    var iosAmericanFootball = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosAmericanFootball;

})));
