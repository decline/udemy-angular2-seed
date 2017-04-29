import {Tweet} from "./tweet";
import {User} from "./user";

export class TweetService {
    getTweets() {
        return [
            new Tweet(
                new User('Windward', '@windwardstudios', 'http://lorempixel.com/100/100/people/?1'),
                'Looking for a better company reporting or docgen app?',
                1,
                true
            ),
            new Tweet(
                new User('AngularJS News', '@angularjs_news', 'http://lorempixel.com/100/100/people/?2'),
                'Right Relevance: Influencers, Articles and Conversations',
                5,
                true
            ),
            new Tweet(
                new User('UX & Bootstrap', '@3rdwave', 'http://lorempixel.com/100/100/people/?3'),
                '10 Reasons Why Web Projects Fail',
                0,
                false
            ),
        ];
    }

    handleLike(tweet: Tweet) {
        console.log('Tweet like changed: ', tweet.likes);
    }
}