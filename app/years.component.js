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
var YearsComponent = (function () {
    function YearsComponent(yearService) {
        this.yearService = yearService;
        this.title = 'Steve Lukather Discography';
    }
    YearsComponent.prototype.onSelect = function (year) {
        this.selectedYear = year;
    };
    YearsComponent.prototype.ngOnInit = function () {
        this.getYears();
    };
    YearsComponent.prototype.getYears = function () {
        var _this = this;
        this.yearService.getYears().then(function (years) { return _this.years = years; });
    };
    YearsComponent = __decorate([
        core_1.Component({
            selector: 'my-years',
            template: "\n    <ul class=\"years\">\n      <li *ngFor=\"let year of years\" \n        [class.selected]=\"year === selectedYear\"\n        (click)=\"onSelect(year)\">\n        <span class=\"badge\">{{year.year}}</span>X Titles\n      </li>\n    </ul>\n    <year-detail [year]=\"selectedYear\"></year-detail>\n    ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .years {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .years li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .years li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .years li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .years .text {\n    position: relative;\n    top: -3px;\n  }\n  .years .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  "],
            providers: [year_service_1.YearService]
        }), 
        __metadata('design:paramtypes', [year_service_1.YearService])
    ], YearsComponent);
    return YearsComponent;
}());
exports.YearsComponent = YearsComponent;
//# sourceMappingURL=years.component.js.map