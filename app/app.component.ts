import {Component} from 'angular2/core';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>Angular2 Tweeter Challenge</h1>                
                <tweets></tweets>
                `,
    directives: [TweetsComponent]
})
export class AppComponent {     
    
}