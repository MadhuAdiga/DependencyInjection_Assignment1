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
var core_1 = require('@angular/core'); //Import Component and ngOnInit dependenicies
var home_service_1 = require('./home.service'); // Import HomeService 
var HeaderComponent = (function () {
    function HeaderComponent(_homeService) {
        this._homeService = _homeService;
    } // Declares a private variable and assign it to the type HomeService
    HeaderComponent.prototype.ngOnInit = function () {
        this.homeData = this._homeService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    };
    HeaderComponent = __decorate([
        // Import HomeService 
        core_1.Component({
            selector: 'my-header',
            template: "<div class=\"navbar navbar-inverse\">\n             <h3 style=\"text-align:center\">This is the header component</h3><br>\n             <h4 style=\"text-align:center\">{{homeData[0]}}</h4>\n             </div>"
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map