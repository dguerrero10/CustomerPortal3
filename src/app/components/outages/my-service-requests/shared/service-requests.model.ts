export class ServiceRequest {
    constructor(
      public uid: string,
      public id: string,
      public requestId: string,
      public serviceCategory: string,
      public status: string,
      public date: Date,
      public imgUrl: string,
      public description?: string,
      public serviceType?: string
      ) {}
  }
  