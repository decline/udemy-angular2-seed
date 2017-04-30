import {Component, Input} from "angular2/core";

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy" [ngClass]="{
                isExpanded: isExpanded
             }">
            <div class="zippy-header" (click)="toggle()">
                {{ title }}
                <i class="pull-right glyphicon" [ngClass]="{
                    'glyphicon-chevron-down': !isExpanded,
                    'glyphicon-chevron-up': isExpanded
                }"></i>
            </div>
            <div class="zippy-content" *ngIf="isExpanded">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .zippy {
            margin: 10px;
        }
        .zippy-header,
        .zippy-content {
            padding: 10px;
        }
        .zippy-header {
            border: 1px solid #000;
            cursor: pointer;
            background-color: #eee;
        }
        .zippy-content {
            border: 1px solid #000;
            border-top: none;
        }
    `]
})
export class ZippyComponent {
    @Input() title:string;
    isExpanded:boolean = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}