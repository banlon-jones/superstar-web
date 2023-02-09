import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  @Input() label = '' || 'Email';
  @Input() placeholder = '' || 'Email';
  @Output() emitEntry = new EventEmitter();
  emailform: any
  constructor() { }

  ngOnInit(): void {
    this.emailform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onBlur(): void {
    if(this.emailform.valid){
      this.emitEntry.emit(this.emailform.value);
    }
    console.log(this.emailform.value);
  }

}
