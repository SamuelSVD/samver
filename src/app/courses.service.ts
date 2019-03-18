import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses() {
    return ["Course1", "Course2", "Course3"];
  }
}
