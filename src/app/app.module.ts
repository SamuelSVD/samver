import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewcourseformComponent } from './newcourseform/newcourseform.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Used for any form
    ReactiveFormsModule //Used for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
