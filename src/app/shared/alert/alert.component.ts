import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor() { }
  @Input() message: string;
  @Output() closed = new EventEmitter<string>();

  closedChild: string;

  onClose() {
      this.closed.emit('close');
  }


}





