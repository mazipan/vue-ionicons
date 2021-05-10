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
    name: "logo-tumblr-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-tumblr-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M321.2 396.3c-11.8 0-22.4-2.8-31.5-8.3-6.9-4.1-11.5-9.6-14-16.4-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9c-2.7 21.5-7.5 44.7-14.5 58.6-7 13.9-14 25.8-25.6 35.7-11.6 9.9-25.6 17.9-41.9 23.3V224h48v140.4c0 19 2 33.5 5.9 43.5 4 10 11.1 19.5 21.4 28.4 10.3 8.9 22.8 15.7 37.3 20.5 14.6 4.8 31.4 7.2 50.4 7.2 16.7 0 30.3-1.7 44.7-5.1 14.4-3.4 30.5-9.3 48.2-17.6v-65.6c-20.9 13.7-41.8 20.6-62.9 20.6z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-tumblr-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M321.2 396.3c-11.8 0-22.4-2.8-31.5-8.3-6.9-4.1-11.5-9.6-14-16.4-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9c-2.7 21.5-7.5 44.7-14.5 58.6-7 13.9-14 25.8-25.6 35.7-11.6 9.9-25.6 17.9-41.9 23.3V224h48v140.4c0 19 2 33.5 5.9 43.5 4 10 11.1 19.5 21.4 28.4 10.3 8.9 22.8 15.7 37.3 20.5 14.6 4.8 31.4 7.2 50.4 7.2 16.7 0 30.3-1.7 44.7-5.1 14.4-3.4 30.5-9.3 48.2-17.6v-65.6c-20.9 13.7-41.8 20.6-62.9 20.6z"}})])])};
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
      component.__file = "logo-tumblr.vue";

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
    

    
    var logoTumblr = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoTumblr;

})));
