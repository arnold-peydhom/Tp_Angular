import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    CourseItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'courses', component:CoursesComponent},
      { path:"about", component:AboutComponent},
      { path:"courseitems", component:CourseItemComponent}
    ])
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
