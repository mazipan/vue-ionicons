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
    name: "ios-headset-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Headset Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-headset-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M256 123.8c-24.3 0-46.9 10.1-63.9 28.4-17 18.3-26.1 33.2-26.1 59.6 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-17.3 6.6-32.4 19-43.5 11.8-10.6 27.7-16.5 44.7-16.5s32.9 5.8 44.7 16.5c12.4 11.2 19 26.2 19 43.5 0 7.7 5.9 14 13.2 14 7.3 0 13.2-6.3 13.2-14 0-26.4-9.2-41.3-26.1-59.6-17.2-18.4-39.8-28.4-64.1-28.4z"}}),_c('path',{attrs:{"d":"M457.1 278.9C442.3 264.1 422.8 256 402 256h-8c-2.2 0-4-1.8-4-4v-37.8c0-35.7-14-69.3-39.4-94.7C325.3 94 291.7 80 256 80c-35.7 0-69.3 14-94.6 39.4-25.4 25.4-39.4 59-39.4 94.7V252c0 2.2-1.8 4-4 4h-8c-20.8 0-40.3 8.1-55.1 22.9C40.1 293.7 32 313.2 32 334v11.8c0 20.8 8.1 40.4 22.9 55.2 14.8 14.8 34.4 23 55.1 23h5.6c4 0 8 1.4 10.9 4.1 2.5 2.3 5.9 3.8 9.5 3.8 7.7 0 14-6.3 14-14.1V214.1c0-28.2 11.1-54.8 31.2-74.9 20.1-20.1 46.7-31.2 74.8-31.2 28.2 0 54.8 11.1 74.8 31.2 20.1 20.1 31.2 46.7 31.2 74.9v203.8c0 7.8 6.3 14.1 14 14.1 3.6 0 7-1.5 9.5-3.8 2.9-2.7 6.9-4.1 10.9-4.1h5.6c20.7 0 40.3-8.2 55.1-23 14.8-14.8 22.9-34.4 22.9-55.2V334c0-20.8-8.1-40.3-22.9-55.1z"}})])])};
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
      component.__file = "ios-headset.vue";

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
    

    
    var iosHeadset = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosHeadset;

})));
