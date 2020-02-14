export class Bill {
  constructor(
    public id: string,
    public cardNum: string,
    public amount: string,
    public billDate: Date,
    public dueDate: Date,
    public previousBalance: string,
    public totalDue: string,
    public totalPayed: string,
  ) {}
}
