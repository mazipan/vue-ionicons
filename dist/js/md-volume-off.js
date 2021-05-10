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
    name: "md-volume-off-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-volume-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"}}),_c('path',{attrs:{"d":"M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-volume-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"}}),_c('path',{attrs:{"d":"M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"}})])])};
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
      component.__file = "md-volume-off.vue";

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
    

    
    var mdVolumeOff = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdVolumeOff;

})));
