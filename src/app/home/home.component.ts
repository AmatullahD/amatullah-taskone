import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resume: any = null

  constructor(private http: HttpClient) {

  }
  // public educationData = [
  //   {
  //     school: "skill-lync",
  //     degree: "frontEnd Developer",
  //     startDate: "Apr 2022",
  //     endDate: "present"
  //   },
  //   {
  //     school: " PSP college",
  //     degree: "BCA",
  //     startDate: "Mar 2018",
  //     endDate: "Apr 2020"
  //   },
  //   {
  //     school: "Taiyebiyah Sr. sec. School",
  //     degree: "12th",
  //     startDate: "Mar 2017",
  //     endDate: "Apr 2018"
  //   }
  // ];


  ngOnInit(): void {
    this.http.get('https://gist.githubusercontent.com/AmatullahD/82abe912ca2480efc27fb43beb646ba4/raw/7dd7004d6a44b798e96336379c74dbfb988d94ee/task.json')
      .subscribe(res => {
        this.resume = res;
        console.log(res);
      });
  }
}
