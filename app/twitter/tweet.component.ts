import {Component, EventEmitter, Input} from "angular2/core";
import {Tweet} from "./tweet";
import {HeartComponent} from "../heart.component";
import {TweetService} from "./tweet.service";

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <img src="{{ tweet.user.avatar }}" class="media-object">
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ tweet.user.name }} {{ tweet.user.handle }}</h4>
                <p>{{ tweet.text }}</p>
                <p><heart [count]="tweet.likes" [liked]="tweet.liked" (clickEvent)="onLike($event)"></heart></p>
            </div>
        </div>
    `,
    styles: [`
        .media {
            padding: 10px;
        }
        .media-left img {
            border-radius: 5px;
        }
    `],
    directives: [HeartComponent]
})
export class TweetComponent {
    @Input() tweet:Tweet;

    constructor(private tweetService: TweetService) {

    }

    onLike($event) {
        this.tweet.likes = $event.newCount;
        this.tweetService.handleLike(this.tweet);
    }
}