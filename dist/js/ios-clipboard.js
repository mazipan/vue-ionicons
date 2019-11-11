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
    name: "ios-clipboard-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Clipboard Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-clipboard-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M140.5 160v240c0 8.8 7.2 16 16 16h200c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16h-200c-8.8 0-16 7.2-16 16zM321.5 81h-17c0-5.6-1-11-2.7-16-2.1-6-5.3-11.4-9.4-16-8.8-9.9-21.6-17-35.9-17s-27.1 7.1-35.9 17c-4.1 4.6-7.3 10-9.4 16-1.7 5-2.7 10.4-2.7 16H194c-9.6 0-17.5 7.9-17.5 17.5V114c0 1.1.9 2 2 2h156c1.1 0 2-.9 2-2V96c0-8.3-6.7-15-15-15zm-62.9 15.5c-10.5 1.3-19.3-7.5-17.9-17.9.9-7.1 6.7-12.9 13.8-13.8 10.5-1.3 19.3 7.5 17.9 17.9-.9 7.2-6.7 12.9-13.8 13.8z"}}),_c('path',{attrs:{"d":"M400 48h-75.2c-1.7 0-2.6 1.9-1.6 3.2 2.9 3.9 5.3 8.1 7 12.8.3.8 1 1.3 1.9 1.3h.5c18.7 0 26.9 14.9 27.5 33.5V114c0 1.1.9 2 2 2h20.3c8.8 0 16 7.2 16 16v297.4c0 8.8-7.2 16-16 16h-253c-8.8 0-16-7.2-16-16V132c0-8.8 7.2-16 16-16h21.3c1.1 0 2-.9 2-2v-8.8c0-19.1 5.6-36.7 27.6-36.7h.3c.9 0 1.8-.6 1.9-1.6 1.5-6.9 4.1-11.7 7.2-15.8 1-1.3.1-3.2-1.6-3.2l-76.3-.1C94.3 47.9 80 62.1 80 79.7V424c0 41.7 14.3 56 32 56h288.5c17.4 0 31.5-14.1 31.5-31.5V80c0-17.7-14.3-32-32-32z"}})])])};
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
      component.__file = "ios-clipboard.vue";

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
    

    
    var iosClipboard = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosClipboard;

})));
