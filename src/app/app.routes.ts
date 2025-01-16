import { Routes } from '@angular/router';
import { UseIconPipeComponent } from '../components/use-icon-pipe/use-icon-pipe.component';
import { CourseComponent } from '../components/course/course.component';
import { InformationComponent } from '../components/information/information.component';
import { InformationPopupComponent } from '../components/information-popup/information-popup.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FormComponent } from '../components/teachersForm/form/forms/form.component';
import { ReactiveFormComponent } from '../components/teachersForm/form/reactiveForm/reactive-form/reactive-form.component';
import { ShowCoursesComponent } from '../components/show-courses/show-courses.component';
import { DotNetComponent } from '../components/dot-net/dot-net.component';

export const routes: Routes = [
    {path: '', component:MenuComponent},
    {path: 'useIconPipe', component:UseIconPipeComponent},
    {path: 'courses', component:CourseComponent},
    {path: 'information', component:InformationComponent},
    {path: 'information-popup', component:InformationPopupComponent},
    {path: 'student-details', component:StudentDetailsComponent},
    {path: 'student-list', component:StudentListComponent},
    {path: 'teachersForm', component:FormComponent},
    {path: 'teachersReactiveForm', component:ReactiveFormComponent},
    {path: 'show-courses', component:ShowCoursesComponent},
    {path: 'dotNet', component:DotNetComponent}



    
];
