import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {TwoWayComponent} from './twoway.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                
                <courses></courses>
                <authors></authors>

                <br/><div (click)="onDivClicked()">
                <input type='button' class='btn' value='Submit' (click)="onClick($event);" />
                </div><br/>

                <twoway></twoway>
                <i class="glyphicon glyphicon-star"></i>
                <favorite [IsFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <like></like> 
                   
                <vote [MyVote]="post.myVote" [VoteCount]="post.voteCount" 
                (vote)="onVoteChange($event)"></vote>
                
                <tweets></tweets>
                `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, 
    TwoWayComponent, LikeComponent, VoteComponent, TweetsComponent]
})
export class AppComponent {     
    title = "Angular App";

    // post = {
    //     title: "Title",
    //     isFavorite: true
    // }
    post = {
        myVote: 0,
        voteCount: 10
    }
    onFavoriteChange($event){
        console.log($event);
    }

    onVoteChange($event){
        console.log($event);
    }
}