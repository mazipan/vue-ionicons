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
    name: "md-subway-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-subway-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48c-93.864 0-176 10.668-176 85.334v213.332c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48zm-96 336c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm80-144H128v-96h112v96zm112 144c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm32-144H272v-96h112v96z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-subway-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M256 48c-93.864 0-176 10.668-176 85.334v213.332c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48zm-96 336c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm80-144H128v-96h112v96zm112 144c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm32-144H272v-96h112v96z"}})])])};
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
      component.__file = "md-subway.vue";

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
    

    
    var mdSubway = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdSubway;

})));
