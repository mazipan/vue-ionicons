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
    name: "ios-bowtie-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-bowtie-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M290.8 213.5C286 205 277 202.2 266 202.2v-.2c-6 0-14.3 1.3-22.6 2.9-11.9 2.3-19.7 7.1-19.7 7.1s3.6 27.3.1 58.5-7.9 42.5-7.9 42.5 5.3 12.1 40 15c3.9.3 7.6.5 11 .5 24.5 0 36.4-7.3 36.4-7.3s3.3-5.4 4.3-22.1c1.9-32.2-7-68.5-16.8-85.6zM205.7 208.8c-22-40.2-86.2-96.8-121.3-96.8C57.9 112 32 180.5 32 256s23 144 51.5 144c33.4 0 110.5-80 110.5-80s5.7-12.6 9.9-33.6l1.8-10.4c.7-4.7 1.3-9.7 1.7-15 .3-3.5.5-6.8.6-9.9l.3-9.8c.7-16-2.6-32.5-2.6-32.5zM427.6 112c-36.4 0-96.4 56.5-118.3 96.8l-.8 1.4s1.4 2.5 1.9 3.4c3.4 6 6.7 14.3 9.4 24l2.9 11.7c2.2 10.2 3.7 21.2 4.2 32.2l.2 9c0 2.9-.1 5.7-.3 8.5-1 16.7-4.6 22.1-4.6 22.1 7.6 10.5 69 78.9 106.2 78.9 28.5 0 51.5-68.5 51.5-144s-25.8-144-52.3-144z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-bowtie-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M290.8 213.5C286 205 277 202.2 266 202.2v-.2c-6 0-14.3 1.3-22.6 2.9-11.9 2.3-19.7 7.1-19.7 7.1s3.6 27.3.1 58.5-7.9 42.5-7.9 42.5 5.3 12.1 40 15c3.9.3 7.6.5 11 .5 24.5 0 36.4-7.3 36.4-7.3s3.3-5.4 4.3-22.1c1.9-32.2-7-68.5-16.8-85.6zM205.7 208.8c-22-40.2-86.2-96.8-121.3-96.8C57.9 112 32 180.5 32 256s23 144 51.5 144c33.4 0 110.5-80 110.5-80s5.7-12.6 9.9-33.6l1.8-10.4c.7-4.7 1.3-9.7 1.7-15 .3-3.5.5-6.8.6-9.9l.3-9.8c.7-16-2.6-32.5-2.6-32.5zM427.6 112c-36.4 0-96.4 56.5-118.3 96.8l-.8 1.4s1.4 2.5 1.9 3.4c3.4 6 6.7 14.3 9.4 24l2.9 11.7c2.2 10.2 3.7 21.2 4.2 32.2l.2 9c0 2.9-.1 5.7-.3 8.5-1 16.7-4.6 22.1-4.6 22.1 7.6 10.5 69 78.9 106.2 78.9 28.5 0 51.5-68.5 51.5-144s-25.8-144-52.3-144z"}})])])};
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
      component.__file = "ios-bowtie.vue";

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
    

    
    var iosBowtie = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosBowtie;

})));
