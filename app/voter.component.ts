import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector: 'voter',
    template: `
        <div class="voter">
            <i class="glyphicon glyphicon-menu-up" [class.highlighted]="highlightUp()" (click)="voteUp()"></i>
            <span>{{ voteCount + myVote }}</span>
            <i class="glyphicon glyphicon-menu-down" [class.highlighted]="highlightDown()" (click)="voteDown()"></i>
        </div>
    `,
    styles: [`
        .voter {
            width: 20px;
        }
        .voter > * {
            display: block;
        }
        .glyphicon {
            cursor: pointer;
            color: #ccc;
        }
        .highlighted {
            color: orange;
        }
    `]
})
export class VoterComponent {
    @Input() voteCount:number = 0;
    @Input() myVote:number = 0;

    @Output() vote = new EventEmitter();

    highlightUp() {
        return this.myVote === 1;
    }

    highlightDown() {
        return this.myVote === -1;
    }

    voteUp() {
        if (this.myVote < 1) {
            this.myVote++;
            this.vote.emit({vote: this.myVote});
        }
    }

    voteDown() {
        if (this.myVote > -1) {
            this.myVote--;
            this.vote.emit({vote: this.myVote});
        }
    }
}