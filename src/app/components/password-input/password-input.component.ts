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
  @Output() emitEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.passwordInput = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  emitOutput(): void{
    if (this.passwordInput.valid) {
      this.emitEvent.emit(this.passwordInput.value);
      console.log(this.passwordInput.value);
    }
  }

}
