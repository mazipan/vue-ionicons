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
    name: "md-cut-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Cut Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-cut-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z"}})])])};
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
      component.__file = "md-cut.vue";

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
    

    
    var mdCut = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdCut;

})));
