import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  baseapi:string="https://e7go3fz6p4eihtpjprwgkiu3nm0jgdfz.lambda-url.us-east-2.on.aws"


  constructor(private http:HttpClient) { }

  getOptions()
  {
    return this.http.get(this.baseapi+"/uniqueyearstate")
  }

  getDeathsperYearData(year:number)
  {
    return this.http.get(this.baseapi+"/deathsperyear/"+year);
  }

  getDeathsperMonthData(year:number,state:string)
  {
    return this.http.get(this.baseapi+"/deathspermoth/"+year+"/"+state);
  }

  getDeathsperCancer(year:number,state:string)
  {
    return this.http.get(this.baseapi+"/deathsfortypeofcancers/"+year+"/"+state);
  }

  getDeathsperAgeGroup(year:number,state:string)
  {
    return this.http.get(this.baseapi+"/deathforagegroup/"+year+"/"+state);

  }

  getDeathsforsmoking(year:number,state:string)
  {
    return this.http.get(this.baseapi+"/deathsforsmoking/"+year+"/"+state);

  }

  getDeathsfordrinking(year:number,state:string)
  {
    return this.http.get(this.baseapi+"/deathsfordrinking/"+year+"/"+state);

  }
}
