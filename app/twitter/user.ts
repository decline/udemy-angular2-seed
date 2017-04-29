export class User {
    constructor(private _name:string, private _handle:string, private _avatar:string) {

    }

    get name():string {
        return this._name;
    }

    get handle():string {
        return this._handle;
    }

    get avatar(): string {
        return this._avatar;
    }
}