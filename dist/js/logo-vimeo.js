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
    name: "logo-vimeo-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Vimeo Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-vimeo-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M476.9 114c-5-23.4-17.5-38.8-40.6-46.3s-64.9-4.5-94.1 16.8c-29.9 21.8-47.6 59.7-53.8 83.8 14.7-6.3 24-7.7 39-6.9s24.5 12 24.9 25.3c.3 9.8-.2 18.7-3.6 27.7-10.8 28.7-27.7 56.5-47.6 80.8-2.9 3.6-6.4 6.9-10 9.9-10.2 8.3-18.8 6.1-25.4-5.2-5.4-9.3-9-18.9-12.2-29.1-12.4-39.7-16.8-80.9-23.8-121.6-3.3-19.5-7-39.8-18-56.9-11.6-17.8-28.6-24.6-50-22-14.7 1.8-36.9 17.5-47.8 26.4 0 0-56 46.9-81.8 71.4l21.2 27s17.9-12.5 27.5-18.3c5.7-3.4 12.4-4.1 17.2.2 4.5 3.9 9.6 9 12.3 14.1 5.7 10.7 11.2 21.9 14.7 33.4 13.2 44.3 25.5 88.7 37.8 133.3 6.3 22.8 13.9 44.2 28 63.6 19.3 26.6 39.6 32.7 70.9 21.5 25.4-9.1 46.6-26.2 66-43.9 33.1-30.2 59.1-65.4 85.5-101.2 20.4-27.7 37.3-55.7 51.4-87 13.9-31 19.4-63.5 12.3-96.8z"}})])])};
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
      component.__file = "logo-vimeo.vue";

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
    

    
    var logoVimeo = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoVimeo;

})));
