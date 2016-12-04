System.register(['@angular/core', './racing-data.service'], function(exports_1, context_1) {
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
    var core_1, racing_data_service_1;
    var CarPartsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (racing_data_service_1_1) {
                racing_data_service_1 = racing_data_service_1_1;
            }],
        execute: function() {
            CarPartsComponent = (function () {
                function CarPartsComponent(racingDataService) {
                    this.racingDataService = racingDataService;
                }
                // execute after constructor
                CarPartsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.racingDataService.getCarParts()
                        .subscribe(function (data) { return _this.carParts = data; });
                    // subscribe on observable data retrun from service
                };
                CarPartsComponent.prototype.totalCarParts = function () {
                    if (Array.isArray(this.carParts))
                        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
                    return 0;
                };
                CarPartsComponent.prototype.upQuantity = function (carPart) {
                    if (carPart.quantity < carPart.inStock) {
                        carPart.quantity++;
                    }
                };
                CarPartsComponent.prototype.downQuantity = function (carPart) {
                    if (carPart.quantity != 0) {
                        carPart.quantity--;
                    }
                };
                CarPartsComponent = __decorate([
                    core_1.Component({
                        selector: 'car-parts',
                        templateUrl: 'template/car-parts.component.html',
                        styleUrls: ['styles/car-parts.component.css']
                    }), 
                    __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
                ], CarPartsComponent);
                return CarPartsComponent;
            }());
            exports_1("CarPartsComponent", CarPartsComponent);
        }
    }
});
//# sourceMappingURL=car-parts.component.js.map