import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';
import { RecaptchaModule } from "ng-recaptcha";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DevelopmentComponent } from './project-details/development/development.component';
import { ContactComponent } from './contact/contact.component';
import { OtherComponent } from './project-details/other/other.component';
import { ConferenceposterComponent } from './conferenceposter/conferenceposter.component';
import { TrApparelComponent } from './trunkrecords/tr-apparel/tr-apparel.component';
import { TrAppareldetailsComponent } from './trunkrecords/tr-appareldetails/tr-appareldetails.component';
import { TrAvailabilityComponent } from './trunkrecords/tr-availability/tr-availability.component';
import { TrHomeComponent } from './trunkrecords/tr-home/tr-home.component';
import { TrHeaderComponent } from './trunkrecords/tr-header/tr-header.component';
import { TrFooterComponent } from './trunkrecords/tr-footer/tr-footer.component';
import { TrLoginComponent } from './trunkrecords/mypage/tr-login/tr-login.component';
import { TrSignupComponent } from './trunkrecords/mypage/tr-signup/tr-signup.component';
import { TrAccountComponent } from './trunkrecords/mypage/tr-account/tr-account.component';
import { CommonStyleComponent } from './trunkrecords/common-style/common-style.component';
import { TrPasswordComponent } from './trunkrecords/mypage/password/tr-password.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    DevelopmentComponent,
    ContactComponent,
    OtherComponent,
    ConferenceposterComponent,
    TrApparelComponent,
    TrAppareldetailsComponent,
    TrAvailabilityComponent,
    TrHomeComponent,
    TrHeaderComponent,
    TrFooterComponent,
    TrLoginComponent,
    TrSignupComponent,
    TrAccountComponent,
    CommonStyleComponent,
    TrPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
