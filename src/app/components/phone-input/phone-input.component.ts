import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  @Input() label = '' || 'phone';
  @Input() placeholder = '' || 'Enter phone number';
  @Output() newItemEvent = new EventEmitter<any>();
  phoneInput: any;
  countries: any;
  errorMessage: any;

  constructor(private utilService: UtilsService) { }

  ngOnInit(): void {
    this.phoneInput = new FormGroup({
      countryCode: new FormControl( '', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    this.getCountries();
  }

  getCountries(): void{
    this.utilService.getAllCountries().subscribe(
      (response: any) => {
        this.countries = response;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  emitOutput(): void{
    if (this.phoneInput.valid){
      this.newItemEvent.emit(this.phoneInput.value);
      console.log(this.phoneInput.value);
    }
  }

}
