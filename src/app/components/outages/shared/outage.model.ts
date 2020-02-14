export class Outage {
  constructor(
    public uid: string,
    public id: string,
    public type: string,
    public location: string,
    public comment: string,
    public status: string,
    public date: Date,
    public imgUrl: string,
    public planned?: boolean
    ) {}
}
