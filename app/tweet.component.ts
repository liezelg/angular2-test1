import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    template: `
    <div class="media mainTweetDiv">
        <a class="media-left" href="#">
            <img class="media-object" src="{{tweetData.ImageUrl}}" alt="Generic placeholder image">
        </a>
        <div class="media-body">
            <h4 class="media-heading">{{tweetData.Title}}</h4>
            {{tweetData.Body}}
            <div>
            <like [LikeCount]="tweetData.LikeCount" [IsLike]="tweetData.IsLike"></like>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .mainTweetDiv {
            margin: 5 5 5 5;
            padding: 5 5 5 5;
        }
        `
    ],
    directives: [LikeComponent]
}) 

export class TweetComponent {  
    @Input('TweetData') tweetData;   
    tweet1 = {
        IsLike: false,
        LikeCount: 5,
        ImageUrl: "http://lorempixel.com/100/100/people?1",
        Title: "Media heading",
        Body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    }
}