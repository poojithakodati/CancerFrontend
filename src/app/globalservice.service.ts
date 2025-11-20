import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  // baseapi:string="https://cancerapi2.azurewebsites.net"
  baseapi:string="http://127.0.0.1:8000"

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
