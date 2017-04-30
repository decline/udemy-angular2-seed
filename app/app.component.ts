import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./heart.component";
import {VoterComponent} from "./voter.component";
import {TweetService} from "./twitter/tweet.service";
import {Tweet} from "./twitter/tweet";
import {TweetComponent} from "./twitter/tweet.component";
import {ZippyComponent} from "./zippy.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <heart [liked]="heart.liked" [count]="heart.count" (clickEvent)="onLikeChanged($event)"></heart>
        <voter [voteCount]="votes.count" [myVote]="votes.myVote" (vote)="onVote($event)"></voter>
        <div *ngFor="#tweet of tweets">
            <tweet [tweet]="tweet"></tweet>
        </div>
        <zippy title="This is the title">
            Here is the content
        </zippy>
        <zippy title="This is another title">
            Here is some more content
        </zippy>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, HeartComponent, VoterComponent, TweetComponent, ZippyComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets:Tweet[];

    heart = {
        count: 10,
        liked: false
    };

    votes = {
        count: 12,
        myVote: 0
    };

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

    onLikeChanged($event) {
        console.log('New like count is now:', $event.newCount);
    }

    onVote($event) {
        console.log('User voted:', $event.vote);
    }

}