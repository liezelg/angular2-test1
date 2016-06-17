import {Component} from 'angular2/core';

@Component({
    selector: 'twoway',
    template: `
        <!-- Two-way Binding -->
        <!--<input type="text" [value]="title" (input)="title = $event.target.value" />-->
        <input type="text" [(ngModel)] = "title" />
        <input type="button" (click)="title = ''" value="Clear" />
        <br/>Prevew: {{ title }} <br/>
        `
        ,
}) 

export class TwoWayComponent {
    onClick($event){
        $event.stopPropagation();
        console.log("Button Clicked.", $event);
    }

    onDivClicked(){
        console.log("Div Clicked.");
    }

}