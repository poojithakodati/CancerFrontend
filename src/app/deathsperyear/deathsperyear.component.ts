import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-deathsperyear',
  templateUrl: './deathsperyear.component.html',
  styleUrls: ['./deathsperyear.component.scss']
})
export class DeathsperyearComponent implements OnInit {

  deaths_data:any=[];
  selectedYear:number=0;
  states:any[]=[]
  years:any[]=[]

  constructor(private globalservice:GlobalserviceService) { }

  ngOnInit(){
    this.getOptions();
  }

  getDeathsPerYearData(year:number)
  {
    this.globalservice.getDeathsperYearData(year).subscribe((response:any)=>{
      if(response)
        {
          this.deaths_data=response.result[0].state_data;
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
