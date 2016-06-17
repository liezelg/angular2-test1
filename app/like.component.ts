import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
    <i class="glyphicon glyphicon-heart" 
    [class.heart-pink]="isLike" 
    (click)="onClick()"></i>
    <span>{{ likeCount }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #CCC;
            cursor: pointer; 
        }
        .heart-pink {
            color: deeppink
        }
        `
    ]
}) 

export class LikeComponent {
    @Input('IsLike') isLike = false;
    @Input('LikeCount') likeCount = 0;

    @Output() change = new EventEmitter();
    
    onClick(){
        this.isLike = !this.isLike;
        this.likeCount += this.isLike ? 1 : -1;
        this.change.emit({ newIsLike: this.isLike, newLikeCount: this.likeCount});
    }

}