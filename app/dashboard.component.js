"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var year_service_1 = require('./year.service');
var DashboardComponent = (function () {
    function DashboardComponent(yearService) {
        this.yearService = yearService;
        this.years = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yearService.getYears()
            .then(function (years) { return _this.years = years.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (year) { };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            providers: [
                year_service_1.YearService
            ]
        }), 
        __metadata('design:paramtypes', [year_service_1.YearService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map