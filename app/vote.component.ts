import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
    <div class="voteDiv">
    <i class="glyphicon glyphicon-menu-up" [class.highlight]="myVote == 1" (click)="onUpClick()"></i><br/>
    <span>{{ voteCount }}</span><br/>
    <i class="glyphicon glyphicon-menu-down" [class.highlight]="myVote == -1" (click)="onDownClick()"></i>
    </div>
    `,
    styles: [`
        div.voteDiv {
            width:20px;
            margin-left: 15px;
        }
        .glyphicon-menu-up {
            font-weight: bold;
            font-size: medium;
        }
        .glyphicon-menu-down {
            font-weight: bold;
            font-size: medium;
        }
        .highlight {
            color: orange;
            cursor: pointer; 
        }
        `
    ]
}) 

export class VoteComponent {
    @Input('MyVote') myVote = 0;
    @Input('VoteCount') voteCount = 0;

    @Output('vote') change = new EventEmitter();
    
    onUpClick(){
        if (this.myVote <= 0){
            this.myVote++;
            this.voteCount++;
        }            
        this.change.emit({ newvoteCount: this.voteCount});
    }

    onDownClick(){
        if (this.myVote >= 0){
            this.myVote--;
            this.voteCount--;
        }
        this.change.emit({ newMyVote: this.myVote, newvoteCount: this.voteCount});
    }
}