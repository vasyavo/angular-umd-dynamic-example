(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('@angular/core'), require('@angular/router'))
    : typeof define === 'function' && define.amd
    ? define('moduleb', [
        'exports',
        '@angular/core',
        '@angular/router'
      ], factory)
    : factory((global.moduleb = {}), global.ng.core, global.ng.router);
})(this, function(exports, core, router) {
  'use strict';

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulebService = (function() {
    function ModulebService() {}
    return ModulebService;
  })();
  ModulebService.decorators = [
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
  ModulebService.ctorParameters = function() {
    return [];
  };
  /** @nocollapse */ ModulebService.ngInjectableDef = core.defineInjectable({
    factory: function ModulebService_Factory() {
      return new ModulebService();
    },
    token: ModulebService,
    providedIn: 'root'
  });
  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulebComponent = (function() {
    function ModulebComponent() {}
    /**
     * @return {?}
     */
    ModulebComponent.prototype.ngOnInit = function() {};
    return ModulebComponent;
  })();
  ModulebComponent.decorators = [
    {
      type: core.Component,
      args: [
        {
          selector: 'lib-moduleb',
          template: '<h2>Welcome to Module B</h2>',
          styles: []
        }
      ]
    }
  ];
  /** @nocollapse */
  ModulebComponent.ctorParameters = function() {
    return [];
  };
  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes} checked by tsc
   */
  var ModulebModule = (function() {
    function ModulebModule() {}
    return ModulebModule;
  })();
  ModulebModule.decorators = [
    {
      type: core.NgModule,
      args: [
        {
          imports: [
            router.RouterModule.forChild([
              {
                path: '',
                pathMatch: 'full',
                component: ModulebComponent
              }
            ])
          ],
          declarations: [ModulebComponent],
          exports: [ModulebComponent],
          schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
        }
      ]
    }
  ];

  exports.ModulebService = ModulebService;
  exports.ModulebComponent = ModulebComponent;
  exports.ModulebModule = ModulebModule;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=moduleb.umd.js.map
