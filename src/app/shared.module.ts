import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixAlertComponent } from './components/fix-alert/fix-alert.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import {UtilsService} from './services/utils.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { ButtonComponent } from './components/button/button.component';
import {RouterModule} from '@angular/router';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { SignInCardComponent } from './components/sign-in-card/sign-in-card.component';
import { AlertComponent } from './components/alert/alert.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfessionalCardComponent } from './components/professional-card/professional-card.component';

@NgModule({
  declarations: [
    FixAlertComponent,
    LoginCardComponent,
    PhoneInputComponent,
    PasswordInputComponent,
    ButtonComponent,
    PublicFooterComponent,
    EmailInputComponent,
    SignInCardComponent,
    AlertComponent,
    SpinnerComponent,
    NavbarComponent,
    ProfessionalCardComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [UtilsService],
  exports: [
    FixAlertComponent,
    LoginCardComponent,
    PublicFooterComponent,
    ButtonComponent,
    EmailInputComponent,
    PasswordInputComponent,
    PhoneInputComponent,
    SignInCardComponent,
    AlertComponent,
    NavbarComponent,
    ProfessionalCardComponent
  ],
})
export class SharedModule { }

