import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text = '';
  @Input() bgColor = '' || 'blue';
  @Input() color = '' || 'white';
  @Output() emitEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(): void {
    this.emitEvent.emit();
  }

}
