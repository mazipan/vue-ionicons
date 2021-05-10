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
    name: "ios-locate-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-locate-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M395.3 259c-.3-1.2-.4-2.4-.3-3.6 0-.8.2-1.6.3-2.4-.4.9-.6 2-.6 3 .1 1.1.3 2.1.6 3z"}}),_c('path',{attrs:{"d":"M459.4 270H409c-6.7 0-12.3-4.7-13.7-11-.3-.9-.5-1.9-.5-3s.2-2.1.6-3c1.4-6.4 7.3-11 14.1-11h49.9c2.4 0 4.2-2 4-4.4-8.8-100.3-88.7-180.2-189-189-2.3-.2-4.4 1.6-4.4 4V103c0 7.9-6.6 14.3-14.6 14-7.6-.3-13.4-6.9-13.4-14.4v-50c0-2.4-2-4.2-4.4-4-100.3 8.8-180.2 88.7-189 189-.2 2.3 1.6 4.4 4 4.4H103c7.9 0 14.3 6.6 14 14.6-.3 7.6-6.9 13.4-14.4 13.4h-50c-2.4 0-4.2 2-4 4.4 8.8 100.3 88.7 180.2 189 189 2.3.2 4.4-1.6 4.4-4V409c0-7.9 6.6-14.3 14.6-14 7.6.3 13.4 6.9 13.4 14.4v49.9c0 2.4 2 4.2 4.4 4 100.3-8.8 180.2-88.7 189-189 .2-2.3-1.7-4.3-4-4.3zM256 326c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-locate-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M395.3 259c-.3-1.2-.4-2.4-.3-3.6 0-.8.2-1.6.3-2.4-.4.9-.6 2-.6 3 .1 1.1.3 2.1.6 3z"}}),_c('path',{attrs:{"d":"M459.4 270H409c-6.7 0-12.3-4.7-13.7-11-.3-.9-.5-1.9-.5-3s.2-2.1.6-3c1.4-6.4 7.3-11 14.1-11h49.9c2.4 0 4.2-2 4-4.4-8.8-100.3-88.7-180.2-189-189-2.3-.2-4.4 1.6-4.4 4V103c0 7.9-6.6 14.3-14.6 14-7.6-.3-13.4-6.9-13.4-14.4v-50c0-2.4-2-4.2-4.4-4-100.3 8.8-180.2 88.7-189 189-.2 2.3 1.6 4.4 4 4.4H103c7.9 0 14.3 6.6 14 14.6-.3 7.6-6.9 13.4-14.4 13.4h-50c-2.4 0-4.2 2-4 4.4 8.8 100.3 88.7 180.2 189 189 2.3.2 4.4-1.6 4.4-4V409c0-7.9 6.6-14.3 14.6-14 7.6.3 13.4 6.9 13.4 14.4v49.9c0 2.4 2 4.2 4.4 4 100.3-8.8 180.2-88.7 189-189 .2-2.3-1.7-4.3-4-4.3zM256 326c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70z"}})])])};
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
      component.__file = "ios-locate.vue";

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
    

    
    var iosLocate = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosLocate;

})));
