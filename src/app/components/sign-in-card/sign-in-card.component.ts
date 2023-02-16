import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SignInService} from '../../services/sign-in/sign-in.service';
import {LogInWithEmail} from '../../models/loginModel';

@Component({
  selector: 'app-sign-in-card',
  templateUrl: './sign-in-card.component.html',
  styleUrls: ['./sign-in-card.component.css']
})
export class SignInCardComponent implements OnInit {
  errors: any = false;
  email: any;
  password: any;
  spinner = false;
  @Output() authState = new EventEmitter();

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

  closeAlert(state: boolean): void {
    this.errors = state;
  }

  getEmail(email: any): any {
     this.email = email;
  }

  getPassword(password: any): any {
    this.password = password;
  }

  submit(): void {
    this.spinner = true;
    const userCred = {...this.email, ...this.password};
    const test = this.signInService.loginWithEmailAndPassword(userCred).subscribe(
      (res: any) => {
        const data = JSON.stringify(res.data);
        localStorage.setItem('user', data);
        // emit auth state true
        console.log(true);
        this.authState.emit(true);
      },
      (error: any) => {
        this.authState.emit(false);
        this.errors = error;
      }
    ).add(() => this.spinner = false).unsubscribe();
  }

}
