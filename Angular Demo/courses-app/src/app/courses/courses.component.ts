import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  allowNewCourse = true;
  courseCreationStatus = 'No course was created!';
  courseName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewCourse = false;

    }, 3000);
  }

  ngOnInit() {
  }

  onCreateCourse(){
    this.courseCreationStatus = `Course was created! Name is ${this.courseName}`;
  }

  onUpdateCourseName(event: any){
    //Event holds target = element that throws the event
    //target input element has the value
    this.courseName = event.target.value;
  }

}
