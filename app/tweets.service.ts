
export class TweetsService {
    getTweets() {
        return [
            {
                IsLike: false,
                LikeCount: 5,
                ImageUrl: "http://lorempixel.com/100/100/people?1",
                Title: "Media heading",
                Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
            },
            {
                IsLike: true,
                LikeCount: 10,
                ImageUrl: "http://lorempixel.com/100/100/people?2",
                Title: "Media heading2",
                Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
            },
            {
                IsLike: false,
                LikeCount: 3,
                ImageUrl: "http://lorempixel.com/100/100/people?3",
                Title: "Media heading3",
                Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
            }
        ];
    }
}