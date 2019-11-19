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
    name: "ios-hourglass-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-hourglass-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M415.6 434h-5.1c-6.5 0-12-.9-12.7-7.4v-.1C383.2 290.6 297.6 288 297.6 256s85.7-34.6 100.2-170.5v-.1c.7-6.5 6.2-7.4 12.7-7.4h5.1c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7H96.4c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h5.5c6.5 0 12 .9 12.7 7.4v.1C128.8 221.4 214.4 224 214.4 256s-85.7 34.6-100.2 170.5v.1c-.7 6.5-6.2 7.4-12.7 7.4h-5.1c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h320c8 0 14.4-6.6 14-14.7-.4-7.5-6.9-13.3-14.4-13.3zm-252.3-34.2c28.7-79.8 79.6-70.1 79.6-101.6v-55.6c0-19.4-36.8-32.9-59.8-64.4-3.8-5.2 0-12.4 6.5-12.4h132.9c6.5 0 10.4 7 6.7 12.2-22.6 31.6-60.1 45.2-60.1 64.6v55.6c0 31.2 48.9 22.7 79.8 101.6 2.8 7.1.7 16-6.9 16H170.2c-7.7 0-9.5-8.8-6.9-16z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-hourglass-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M415.6 434h-5.1c-6.5 0-12-.9-12.7-7.4v-.1C383.2 290.6 297.6 288 297.6 256s85.7-34.6 100.2-170.5v-.1c.7-6.5 6.2-7.4 12.7-7.4h5.1c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7H96.4c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h5.5c6.5 0 12 .9 12.7 7.4v.1C128.8 221.4 214.4 224 214.4 256s-85.7 34.6-100.2 170.5v.1c-.7 6.5-6.2 7.4-12.7 7.4h-5.1c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h320c8 0 14.4-6.6 14-14.7-.4-7.5-6.9-13.3-14.4-13.3zm-252.3-34.2c28.7-79.8 79.6-70.1 79.6-101.6v-55.6c0-19.4-36.8-32.9-59.8-64.4-3.8-5.2 0-12.4 6.5-12.4h132.9c6.5 0 10.4 7 6.7 12.2-22.6 31.6-60.1 45.2-60.1 64.6v55.6c0 31.2 48.9 22.7 79.8 101.6 2.8 7.1.7 16-6.9 16H170.2c-7.7 0-9.5-8.8-6.9-16z"}})])])};
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
      component.__file = "ios-hourglass.vue";

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
    

    
    var iosHourglass = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosHourglass;

})));
