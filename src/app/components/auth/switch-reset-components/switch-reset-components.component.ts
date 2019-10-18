import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-switch-reset-components',
  templateUrl: './switch-reset-components.component.html',
  styleUrls: ['./switch-reset-components.component.css']
})
export class SwitchResetComponentsComponent implements OnInit {

  constructor(private activatedActivated: ActivatedRoute) { }

  ngOnInit() {
  }
  
  mode = this.activatedActivated.snapshot.queryParams['mode'];

}
