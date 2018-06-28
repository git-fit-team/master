"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
var years = [1999, 2000, 2001, 2002, 2003, 2004];
var currentWeight = [220, 215, 225, 210, 205, 200];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: currentWeight,
                label: "Current Weight",
                borderColor: "#2ED573",
                backgroundColor: "#80F1AF"
            }
        ]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#a4b0be",
                fontSize: 14
            }
        },
        scales: {
            yAxes: [{
                    ticks: {
                        fontColor: "#a4b0be",
                        fontSize: 12
                    }
                }],
            xAxes: [{
                    ticks: {
                        fontColor: "#a4b0be",
                        fontSize: 12
                    }
                }]
        }
    }
});
