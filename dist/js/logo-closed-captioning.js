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
    name: "logo-closed-captioning-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Closed Captioning Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-closed-captioning-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M32 96v320h448V96H32zm406 159.8c0 23.4-1.4 41.2-3.3 70.2s-16.8 49.4-51.7 52.6c-34.9 3.2-83.8 3.5-127 3.4-42.9.1-92-.1-127-3.4-34.9-3.2-49.7-23.6-51.7-52.6S74 279.2 74 255.8c0-23.4.1-38.6 3.3-70.2s20.1-49.2 51.7-52.4 86-3.2 127-3.2 95.4 0 127 3.2c31.6 3.2 48.5 20.9 51.7 52.4 3.2 31.6 3.3 46.9 3.3 70.2z"}}),_c('path',{attrs:{"d":"M357.5 280.4v.7c0 16.3-10.1 25.9-23.6 25.9-13.5 0-22.6-10.8-23.9-25.9 0 0-1.2-7.9-1.2-23.9s1.4-26 1.4-26c2.4-17 10.7-25.9 24.2-25.9 13.4 0 24.1 11.6 24.1 29.2v.5h45.1c0-21.9-5.5-41.6-16.6-54-11-12.4-27.5-18.6-49.3-18.6-10.9 0-20.9 1.4-30 4.3-9.1 2.9-17 7.9-23.6 15.1-6.6 7.2-11.7 16.8-15.4 28.9-3.6 12.1-5.5 27.3-5.5 45.7 0 18 1.5 33 4.4 45.1 3 12.1 7.3 21.7 13.1 28.9 5.8 7.2 13.1 12.2 21.8 15 8.8 2.8 19.1 4.2 30.9 4.2 25 0 43-6.4 53.8-18.7 10.8-12.3 16.2-30.3 16.2-53.9h-46.1c.2 0 .2 2.5.2 3.4zM202.6 280.4v.7c0 16.3-10.1 25.9-23.6 25.9-13.5 0-22.6-10.8-23.9-25.9 0 0-1.2-7.9-1.2-23.9s1.4-26 1.4-26c2.4-17 10.7-25.9 24.2-25.9 13.4 0 24.1 11.6 24.1 29.2v.5h45.1c0-21.9-5.5-41.6-16.6-54-11-12.4-27.5-18.6-49.3-18.6-10.9 0-20.9 1.4-30 4.3-9.1 2.9-17 7.9-23.6 15.1-6.6 7.2-11.7 16.8-15.4 28.9-3.6 12.1-5.5 27.3-5.5 45.7 0 18 1.5 33 4.4 45.1 3 12.1 7.3 21.7 13.1 28.9 5.8 7.2 13.1 12.2 21.8 15 8.8 2.8 19.1 4.2 30.9 4.2 25 0 43-6.4 53.8-18.7 10.8-12.3 16.2-30.3 16.2-53.9h-46.1c.2 0 .2 2.5.2 3.4z"}})])])};
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
      component.__file = "logo-closed-captioning.vue";

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
    

    
    var logoClosedCaptioning = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoClosedCaptioning;

})));
