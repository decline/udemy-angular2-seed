import {User} from "./user";

export class Tweet {

    constructor(private _user:User, private _text:string, private _likes:number, private _liked:boolean) {

    }

    get user(): User {
        return this._user;
    }

    get text(): string {
        return this._text;
    }

    get likes(): number {
        return this._likes;
    }

    get liked(): boolean {
        return this._liked;
    }

    set likes(value: number) {
        this._likes = value;
    }
}