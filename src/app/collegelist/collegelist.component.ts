import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent {
  @Input() public StudentName:any;
  @Input() public CityName:any;
  public citySpecificList:any[]=[];
  public collegeList = [
    {
      Code:"AAA11",
      Name:"ABC Insitute of Technology",
      City:"Chennai",
      Courses : "B.E , B.Tech, M.E , M.Tech"
    },
    {
      Code:"AAA12",
      Name:"DEF Insitute of Technology",
      City:"Mumbai",
      Courses : "B.E , B.Tech"
    },
    {
      Code:"AAA13",
      Name:"GHI Insitute of Technology",
      City:"Chennai",
      Courses : "B.E , M.E "
    },
    {
      Code:"AAA14",
      Name:"JKL Insitute of Technology",
      City:"Mumbai",
      Courses : "B.E , B.Tech, M.E , M.Tech"
    },
    {
      Code:"AAA15",
      Name:"MNO Insitute of Technology",
      City:"Chennai",
      Courses : "B.Tech, M.Tech"
    },
    {
      Code:"BBB11",
      Name:"PQR College of Arts and Science",
      City:"Mumbai",
      Courses : " B.Com, M.Com"
    },
    {
      Code:"BBB12",
      Name:"STU College of Arts and Science",
      City:"Chennai",
      Courses : "B.Sc, B.A, B.Com, M.Sc, M.A, M.Com"
    },
    {
      Code:"BBB13",
      Name:"VWX College of Arts and Science",
      City:"Mumbai",
      Courses : "B.Sc, B.A,  M.Sc, M.A"
    },
    {
      Code:"BBB14",
      Name:"YZA College of Arts and Science",
      City:"Chennai",
      Courses : "B.A, B.Com, M.A, M.Com"
    },
    {
      Code:"BBB15",
      Name:"BCD College of Arts and Science",
      City:"Mumbai",
      Courses : "B.Sc,  M.Sc"
    },
  ]

  @Output() public ReturnColleges = new EventEmitter();

  SearchColleges(){
    this.citySpecificList = [];//clearing out previous data
    this.collegeList.forEach( element=> {
      if(element.City === this.CityName){
        this.citySpecificList.push(element);
      }
    });
    this.ReturnColleges.emit(this.citySpecificList);
  }

    
}
