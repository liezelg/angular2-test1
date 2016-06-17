System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './twoway.component', './like.component', './vote.component', './tweets.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, twoway_component_1, like_component_1, vote_component_1, tweets_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (twoway_component_1_1) {
                twoway_component_1 = twoway_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    // post = {
                    //     title: "Title",
                    //     isFavorite: true
                    // }
                    this.post = {
                        myVote: 0,
                        voteCount: 10
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <h1>My First Angular 2 App</h1>\n                \n                <courses></courses>\n                <authors></authors>\n\n                <br/><div (click)=\"onDivClicked()\">\n                <input type='button' class='btn' value='Submit' (click)=\"onClick($event);\" />\n                </div><br/>\n\n                <twoway></twoway>\n                <i class=\"glyphicon glyphicon-star\"></i>\n                <favorite [IsFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n                <like></like> \n                   \n                <vote [MyVote]=\"post.myVote\" [VoteCount]=\"post.voteCount\" \n                (vote)=\"onVoteChange($event)\"></vote>\n                \n                <tweets></tweets>\n                ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent,
                            twoway_component_1.TwoWayComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweets_component_1.TweetsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map