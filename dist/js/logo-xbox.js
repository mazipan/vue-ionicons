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
    name: "logo-xbox-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Xbox Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-xbox-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8C61.7 128.4 32 188.7 32 256c0 50.7 16.9 97.5 45.2 135 0-4.4.6-70.3 49.6-142.7zM480 256c0-67.3-29.7-127.6-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7C463.2 353.5 480 306.7 480 256zM201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5C346.8 46.6 303.1 32 256 32s-90.8 14.6-126.9 39.4c7.2-1.8 35.2-7.1 72.1 9.5zM358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8c41 45.7 100.5 74.5 166.8 74.5s125.8-28.8 166.8-74.5l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z"}})])])};
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
      component.__file = "logo-xbox.vue";

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
    

    
    var logoXbox = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoXbox;

})));
