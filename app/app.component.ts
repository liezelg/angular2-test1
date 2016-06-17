import {Component} from 'angular2/core';
import {TweetsService} from './tweets.service'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'my-app',
    template: `
            <div *ngFor="#tweet of tweets">
            <tweet [TweetData]="tweet"></tweet>
            </div>
        `,
    directives: [TweetComponent],
    providers: [TweetsService]
})
export class AppComponent {     
    tweets;
    
    constructor(tweetsService: TweetsService){
        this.tweets = tweetsService.getTweets();
    }
}