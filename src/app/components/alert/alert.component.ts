import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() title = '' || 'Error';
  @Input() message = '';
  @Output() status = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.status.emit(false);
  }

}
