import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector: 'heart',
    template: `
        <i class="glyphicon glyphicon-heart" [class.liked]="liked" (click)="onClick()"></i>
        <span>{{ count }}</span>   
    `,
    styles: [
        `
            i.glyphicon-heart {
                color: #ccc;
                cursor: pointer;
            }
            i.liked {
                color: deeppink;
            }
        `
    ]
})
export class HeartComponent {
    @Input() liked:boolean = false;
    @Input() count:number = 0;

    @Output() clickEvent = new EventEmitter();

    onClick() {
        this.liked = !this.liked;

        if (this.liked) {
            this.count++;
        } else {
            this.count--;
        }

        this.clickEvent.emit({newCount: this.count});
    }

}