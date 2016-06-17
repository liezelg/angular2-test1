System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        {
                            IsLike: false,
                            LikeCount: 5,
                            ImageUrl: "http://lorempixel.com/100/100/people?1",
                            Title: "Title1",
                            Handle: "@IsaacG",
                            Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                        },
                        {
                            IsLike: true,
                            LikeCount: 10,
                            ImageUrl: "http://lorempixel.com/100/100/people?2",
                            Title: "Title2",
                            Handle: "@RebekahG",
                            Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                        },
                        {
                            IsLike: false,
                            LikeCount: 3,
                            ImageUrl: "http://lorempixel.com/100/100/people?3",
                            Title: "Title3",
                            Handle: "@LiezelG",
                            Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                        }
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map