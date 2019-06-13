(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('@angular/core'), require('@angular/router'))
    : typeof define === 'function' && define.amd
    ? define('modulec', [
        'exports',
        '@angular/core',
        '@angular/router'
      ], factory)
    : factory((global.modulec = {}), global.ng.core, global.ng.router);
})(this, function(exports, core, router) {
  'use strict';

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulecService = (function() {
    function ModulecService() {}
    return ModulecService;
  })();
  ModulecService.decorators = [
    {
      type: core.Injectable,
      args: [
        {
          providedIn: 'root'
        }
      ]
    }
  ];
  /** @nocollapse */
  ModulecService.ctorParameters = function() {
    return [];
  };
  /** @nocollapse */ ModulecService.ngInjectableDef = core.defineInjectable({
    factory: function ModulecService_Factory() {
      return new ModulecService();
    },
    token: ModulecService,
    providedIn: 'root'
  });
  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulecComponent = (function() {
    function ModulecComponent() {
      this.basic = false;
    }
    /**
     * @return {?}
     */
    ModulecComponent.prototype.ngOnInit = function() {
      this.basic = true;
    };
    return ModulecComponent;
  })();
  ModulecComponent.decorators = [
    {
      type: core.Component,
      args: [
        {
          selector: 'lib-modulec',
          template: '<h2>Welcome to Module C</h2>',
          styles: []
        }
      ]
    }
  ];
  /** @nocollapse */
  ModulecComponent.ctorParameters = function() {
    return [];
  };
  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulecModule = (function() {
    function ModulecModule() {}
    return ModulecModule;
  })();
  ModulecModule.decorators = [
    {
      type: core.NgModule,
      args: [
        {
          imports: [
            router.RouterModule.forChild([
              {
                path: '',
                pathMatch: 'full',
                component: ModulecComponent
              }
            ])
          ],
          declarations: [ModulecComponent],
          exports: [ModulecComponent],
          schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
        }
      ]
    }
  ];

  exports.ModulecService = ModulecService;
  exports.ModulecComponent = ModulecComponent;
  exports.ModulecModule = ModulecModule;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=modulec.umd.js.map
