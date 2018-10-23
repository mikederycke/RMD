import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseID: number = Math.floor(Math.random() * 100);
  courseName: string = 'Rich Media Development';

  getCourseName(){
    return this.courseName;
  }

  constructor() { }

  ngOnInit() {
  }

}
