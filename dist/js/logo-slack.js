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
    name: "logo-slack-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-slack-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}}),_c('path',{attrs:{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}}),_c('path',{attrs:{"d":"M475.9 190C426.4 25 355-13.4 190 36.1S-13.4 157 36.1 322 157 525.4 322 475.9 525.4 355 475.9 190zm-83.3 107.1l-31.1 10.4 10.7 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9l-10.7-32.2-64.1 21.5L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9L203 360.4l-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-20.7-61.8-31.1 10.4c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-10.9-32.1c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64.1-21.5-10.7-32.2c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13-2.7 27.2-15.7 31.5l-31.1 10.4 20.7 61.8 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13.2-2.7 27.4-15.8 31.7z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-slack-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}}),_c('path',{attrs:{"d":"M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z"}}),_c('path',{attrs:{"d":"M475.9 190C426.4 25 355-13.4 190 36.1S-13.4 157 36.1 322 157 525.4 322 475.9 525.4 355 475.9 190zm-83.3 107.1l-31.1 10.4 10.7 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9l-10.7-32.2-64.1 21.5L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9L203 360.4l-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-20.7-61.8-31.1 10.4c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-10.9-32.1c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64.1-21.5-10.7-32.2c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13-2.7 27.2-15.7 31.5l-31.1 10.4 20.7 61.8 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13.2-2.7 27.4-15.8 31.7z"}})])])};
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
      component.__file = "logo-slack.vue";

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
    

    
    var logoSlack = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoSlack;

})));
