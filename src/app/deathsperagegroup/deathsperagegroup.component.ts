import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-deathsperagegroup',
  templateUrl: './deathsperagegroup.component.html',
  styleUrls: ['./deathsperagegroup.component.scss']
})
export class DeathsperagegroupComponent implements OnInit {

  deaths_data:any=[];
  selectedYear:number=0;
  selectedState:string="";
  states:any[]=[]
  years:any[]=[]
  months:string[]=["January","February","March","April", "May","June","July","August","September","October","November","December"]

  constructor(private globalservice:GlobalserviceService) { }

  ngOnInit(){
    this.getOptions();
  }

  getDeathsPerMonthData(year:number,state:string)
  {
    this.globalservice.getDeathsperAgeGroup(year,state).subscribe((response:any)=>{
      if(response)
        {
          this.deaths_data=response.result;
          console.log(this.deaths_data)
        }
    })
  }

  getOptions()
  {
    this.globalservice.getOptions().subscribe((response:any)=>{
      if(response)
        {
          (response.states).forEach((state:string)=>{
            this.states.push({"state":state,"value":state})
          });
          response.years.forEach((year:number)=>{
            this.years.push({"year":year,"value":year})
          });
          console.log(this.states)
          console.log(this.years)
        }
    })
  }

}
