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
    name: "ios-medal-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-medal-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M50 124c-1.1 0-2 .9-2 2v59.9c0 14.4 9.6 27 23.4 30.8l104 29.4c1.3.4 2.5-.6 2.5-1.9V126c0-1.1-.9-2-2-2H50zM204 126v126.2c0 .9.6 1.7 1.5 1.9l50 13.9c.4.1.7.1 1.1 0l56-15.6c.9-.2 1.5-1 1.5-1.9V126c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2zM334 126v119.2c0 1.3 1.3 2.3 2.6 1.9l104-30.4c13.8-3.9 23.4-16.5 23.4-30.8V126c0-1.1-.9-2-2-2H336c-1.1 0-2 .9-2 2zM48 64v38c0 1.1.9 2 2 2h412c1.1 0 2-.9 2-2V64c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32z"}}),_c('g',[_c('circle',{attrs:{"cx":"256","cy":"352","r":"56"}}),_c('path',{attrs:{"d":"M351.3 266.6l-51.5 13.8c24 14.8 40.1 41.3 40.1 71.6 0 46.3-37.7 84-84 84s-84-37.7-84-84c0-30.4 16.2-57 40.4-71.8L161 266.1c-20.5 22.7-33 52.8-33 85.9 0 70.7 57.3 128 128 128s128-57.3 128-128c0-32.8-12.4-62.7-32.7-85.4z"}}),_c('path',{attrs:{"d":"M256 296c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56z"}})])])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-medal-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M50 124c-1.1 0-2 .9-2 2v59.9c0 14.4 9.6 27 23.4 30.8l104 29.4c1.3.4 2.5-.6 2.5-1.9V126c0-1.1-.9-2-2-2H50zM204 126v126.2c0 .9.6 1.7 1.5 1.9l50 13.9c.4.1.7.1 1.1 0l56-15.6c.9-.2 1.5-1 1.5-1.9V126c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2zM334 126v119.2c0 1.3 1.3 2.3 2.6 1.9l104-30.4c13.8-3.9 23.4-16.5 23.4-30.8V126c0-1.1-.9-2-2-2H336c-1.1 0-2 .9-2 2zM48 64v38c0 1.1.9 2 2 2h412c1.1 0 2-.9 2-2V64c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32z"}}),_c('g',[_c('circle',{attrs:{"cx":"256","cy":"352","r":"56"}}),_c('path',{attrs:{"d":"M351.3 266.6l-51.5 13.8c24 14.8 40.1 41.3 40.1 71.6 0 46.3-37.7 84-84 84s-84-37.7-84-84c0-30.4 16.2-57 40.4-71.8L161 266.1c-20.5 22.7-33 52.8-33 85.9 0 70.7 57.3 128 128 128s128-57.3 128-128c0-32.8-12.4-62.7-32.7-85.4z"}}),_c('path',{attrs:{"d":"M256 296c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56z"}})])])])};
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
      component.__file = "ios-medal.vue";

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
    

    
    var iosMedal = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosMedal;

})));
