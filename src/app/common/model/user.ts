export class User {
  private _uid: string;
  private _username: string;
  private _firstName: string;
  private _lastName: string;
  private uuid: string;
  constructor(username: string, uid: string, uuid: string, firstName: string, lastName: string) {
    this._username = username;
    this._uid = uid;
    this.uuid = uuid;
    this._firstName = firstName;
    this._lastName = lastName;
  }
}
