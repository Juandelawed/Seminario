import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SurveyorComponent } from './components/surveyor/surveyor.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'admin', component: AdminComponent},
    {path:'user', component:UserComponent},
    {path:'surveyor', component: SurveyorComponent}
   
];
