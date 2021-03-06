import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgoDetailsComponent } from './ngo-details/ngo-details.component';
import { NgoVolunteerListComponent } from './ngo-volunteer-list/ngo-volunteer-list.component';
import { NgoVolunteerPgInfoComponent } from './ngo-volunteer-pg-info/ngo-volunteer-pg-info.component';
import { NgoComponent } from './ngo/ngo.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'home', component:HomeComponent},
  {path:'user',component:UpdateUserComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
  {path:'ngo', component:NgoComponent},
  {path:'ngoDetails', component:NgoDetailsComponent},
  // {path :'ngologin', component: NgoLoginComponent},
  {path:'ngoprograms', component:NgoVolunteerPgInfoComponent},
  {path:'ngovolunteerList',component:NgoVolunteerListComponent},
  {path:'about',component:AboutComponent},
  {path:'faq',component:FaqComponent},
  {path:'trainings',component:TrainingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
