import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'The Complete Angular Course is this but this is very long so maybe a summary would be nice ';
  rating = 4.5745;
  students = 30123;
  price = 190.5;
  releaseDate = new Date(2019, 3, 13);

  constructor() { }

  ngOnInit() {
  }

}
