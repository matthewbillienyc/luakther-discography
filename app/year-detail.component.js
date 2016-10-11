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
var year_1 = require('./year');
var YearDetailComponent = (function () {
    function YearDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof year_1.Year !== 'undefined' && year_1.Year) === 'function' && _a) || Object)
    ], YearDetailComponent.prototype, "year", void 0);
    YearDetailComponent = __decorate([
        core_1.Component({
            selector: 'year-detail',
            template: "\n  <div *ngIf=\"year\">\n    <h2>{{year.year}} titles!</h2>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], YearDetailComponent);
    return YearDetailComponent;
    var _a;
}());
exports.YearDetailComponent = YearDetailComponent;
//# sourceMappingURL=year-detail.component.js.map