import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { NgoRegisterComponent } from './ngo-register/ngo-register.component';
import { NgoLoginComponent } from './ngo-login/ngo-login.component';
import { NgoVolunteerListComponent } from './ngo-volunteer-list/ngo-volunteer-list.component';

import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateUserComponent,
    MainPageComponent,
    UserLoginComponent,
    UserSignupComponent,
    HomeComponent,
    NgoRegisterComponent,
    NgoLoginComponent,
    NgoVolunteerListComponent,

    AboutComponent,
    FaqComponent,
    TrainingsComponent,
    ContactComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
