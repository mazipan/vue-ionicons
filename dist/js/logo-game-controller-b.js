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
    name: "logo-game-controller-b-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-game-controller-b-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M135.1 204.6c-10.7 0-19.3 8.7-19.3 19.4s8.7 19.4 19.3 19.4c10.6 0 19.3-8.7 19.3-19.4s-8.6-19.4-19.3-19.4z"}}),_c('path',{attrs:{"d":"M466.3 248.9c-21.2-88.5-43.6-135.5-88.5-148.8-9.8-2.9-18.1-4-25.7-4-27.6 0-46.9 14.7-96.1 14.7-49.2 0-68.5-14.7-96.1-14.7-7.7 0-16 1.1-25.7 4-44.9 13.3-67.3 60.4-88.5 148.8-21.2 88.5-17.3 152.4 7.7 164.3 4.1 1.9 8.2 2.8 12.5 2.8 21.7 0 45.1-23.8 67.7-52 25.7-32.1 32.1-33 110.3-33h24.3c78.1 0 84.6.8 110.3 33 22.5 28.2 46 52 67.7 52 4.2 0 8.4-.9 12.5-2.8 24.9-12 28.7-75.9 7.6-164.3zm-331.1 14.7c-21.6 0-39.2-17.8-39.2-39.6s17.6-39.6 39.2-39.6c21.7 0 39.2 17.8 39.2 39.6.1 21.9-17.5 39.6-39.2 39.6zm172.9-19.5c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zM352 288c-11.1 0-20.1-9-20.1-20 0-11.2 9-20.1 20.1-20.1 11.1 0 20.1 8.9 20.1 20.1 0 11-9 20-20.1 20zm0-87.8c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zm43.9 43.9c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-game-controller-b-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M135.1 204.6c-10.7 0-19.3 8.7-19.3 19.4s8.7 19.4 19.3 19.4c10.6 0 19.3-8.7 19.3-19.4s-8.6-19.4-19.3-19.4z"}}),_c('path',{attrs:{"d":"M466.3 248.9c-21.2-88.5-43.6-135.5-88.5-148.8-9.8-2.9-18.1-4-25.7-4-27.6 0-46.9 14.7-96.1 14.7-49.2 0-68.5-14.7-96.1-14.7-7.7 0-16 1.1-25.7 4-44.9 13.3-67.3 60.4-88.5 148.8-21.2 88.5-17.3 152.4 7.7 164.3 4.1 1.9 8.2 2.8 12.5 2.8 21.7 0 45.1-23.8 67.7-52 25.7-32.1 32.1-33 110.3-33h24.3c78.1 0 84.6.8 110.3 33 22.5 28.2 46 52 67.7 52 4.2 0 8.4-.9 12.5-2.8 24.9-12 28.7-75.9 7.6-164.3zm-331.1 14.7c-21.6 0-39.2-17.8-39.2-39.6s17.6-39.6 39.2-39.6c21.7 0 39.2 17.8 39.2 39.6.1 21.9-17.5 39.6-39.2 39.6zm172.9-19.5c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zM352 288c-11.1 0-20.1-9-20.1-20 0-11.2 9-20.1 20.1-20.1 11.1 0 20.1 8.9 20.1 20.1 0 11-9 20-20.1 20zm0-87.8c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zm43.9 43.9c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1z"}})])])};
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
      component.__file = "logo-game-controller-b.vue";

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
    

    
    var logoGameControllerB = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoGameControllerB;

})));
