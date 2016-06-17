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
            <h4 class="media-heading">
                    {{ tweetData.Title }} <span class="tweetHandle">{{ tweetData.Handle }}</span>
            </h4>
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
        .tweetHandle {
            color: #CCC;
        }
        `
    ],
    directives: [LikeComponent]
}) 

export class TweetComponent {  
    @Input('TweetData') tweetData;       
}