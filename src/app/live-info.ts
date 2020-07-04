export class LiveInfo {
    date: string;
  
    constructor(
      date: Date,
      public summary: string,
      public description: string
    ) {
      this.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  }
  