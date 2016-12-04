System.register(['@angular/core', './app.component', './car-parts.component', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/forms', './racing-data.service', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_component_1, car_parts_component_1, platform_browser_1, platform_browser_dynamic_1, forms_1, racing_data_service_1, http_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (car_parts_component_1_1) {
                car_parts_component_1 = car_parts_component_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (racing_data_service_1_1) {
                racing_data_service_1 = racing_data_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            car_parts_component_1.CarPartsComponent
                        ],
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
                        bootstrap: [app_component_1.AppComponent],
                        providers: [racing_data_service_1.RacingDataService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});
//# sourceMappingURL=main.js.map