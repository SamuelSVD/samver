import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  email = 'samver@samver.ca';
  isActive = true;
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }
  onSave($event) {
    $event.stopPropogation; //Used to stop the click event from being called by parents of component that called this 
    this.isActive = !this.isActive;
  }
  onEnter() {
    console.log('Email: ', this.email);
  }
}
