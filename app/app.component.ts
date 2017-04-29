import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./heart.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <heart [liked]="heart.liked" [count]="heart.count" (clickEvent)="onLikeChanged($event)"></heart>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, HeartComponent]
})
export class AppComponent {
    heart = {
        count: 10,
        liked: false
    };

    onLikeChanged($event) {
        console.log('New like count is now:', $event.newCount);
    }

}