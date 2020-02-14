export class Notification {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public date: Date,
    public icon: string,
  ) {}
}
