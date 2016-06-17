System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.myVote = 0;
                    this.voteCount = 0;
                    this.change = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onUpClick = function () {
                    if (this.myVote <= 0) {
                        this.myVote++;
                        this.voteCount++;
                    }
                    this.change.emit({ newvoteCount: this.voteCount });
                };
                VoteComponent.prototype.onDownClick = function () {
                    if (this.myVote >= 0) {
                        this.myVote--;
                        this.voteCount--;
                    }
                    this.change.emit({ newMyVote: this.myVote, newvoteCount: this.voteCount });
                };
                __decorate([
                    core_1.Input('MyVote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input('VoteCount'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Output('vote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "change", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div class=\"voteDiv\">\n    <i class=\"glyphicon glyphicon-menu-up\" [class.highlight]=\"myVote == 1\" (click)=\"onUpClick()\"></i><br/>\n    <span>{{ voteCount }}</span><br/>\n    <i class=\"glyphicon glyphicon-menu-down\" [class.highlight]=\"myVote == -1\" (click)=\"onDownClick()\"></i>\n    </div>\n    ",
                        styles: ["\n        div.voteDiv {\n            width:20px;\n            margin-left: 15px;\n        }\n        .glyphicon-menu-up {\n            font-weight: bold;\n            font-size: medium;\n        }\n        .glyphicon-menu-down {\n            font-weight: bold;\n            font-size: medium;\n        }\n        .highlight {\n            color: orange;\n            cursor: pointer; \n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map