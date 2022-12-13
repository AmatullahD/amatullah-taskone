import { Component, Input, OnInit } from '@angular/core';
interface IEducation {
  school: string,
  degree: string,
  startDate: number,
  endDate: number,
  percentage: number
}



@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() timelineData: IEducation[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
