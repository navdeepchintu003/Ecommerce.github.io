import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CampusComponent } from './campus/campus.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CampusComponent,
    FacilitiesComponent,
    TestimonialsComponent,
    FooterComponent,
    CalltoactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
