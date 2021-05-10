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
    name: "logo-designernews-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-designernews-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M290.4 145L227 96l63.6 102.2z"}}),_c('path',{attrs:{"d":"M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z"}}),_c('path',{attrs:{"d":"M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-designernews-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M290.4 145L227 96l63.6 102.2z"}}),_c('path',{attrs:{"d":"M329 96v163h-36.4l-63.2-98.6 1.7 98.6H191V152l-37.3-29.3c1 1.2 2 2.4 2.9 3.7 10 13.9 15 30.5 15 50.5 0 49.2-30.6 82.1-76.9 82.1H32v.4L231.6 416H480V214.1L329 96z"}}),_c('path',{attrs:{"d":"M129.9 178.1c0-29-14.2-45.1-39.7-45.1H71v89h19c26 0 39.9-15.4 39.9-43.9z"}})])])};
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
      component.__file = "logo-designernews.vue";

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
    

    
    var logoDesignernews = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoDesignernews;

})));
