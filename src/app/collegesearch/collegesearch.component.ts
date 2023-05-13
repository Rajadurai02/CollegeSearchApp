import { Component } from '@angular/core';

@Component({
  selector: 'app-collegesearch',
  templateUrl: './collegesearch.component.html',
  styleUrls: ['./collegesearch.component.css']
})
export class CollegesearchComponent {
  public studentName = "";
  public city = "";
  collegeList:any[] = [];
}
