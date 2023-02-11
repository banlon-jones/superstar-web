import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {
  passwordInput: any;
  @Input() label = '' || 'password';
  @Input() placeholder = '' || 'Enter password';
  @Output() password = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.passwordInput = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  emitOutput(): void{
    if (this.passwordInput.valid) {
      this.password.emit(this.passwordInput.value);
    }
  }

  getFormControl(): any {
    return this.passwordInput.controls;
  }

}
