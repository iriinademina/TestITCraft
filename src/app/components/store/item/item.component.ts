import { Component, OnInit, Input  } from '@angular/core';
import { Subscription, Observable, Subject, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import {
  map
} from 'rxjs/operators';
import { DataService } from '../../../services/getdata-service'


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input()
  productName: string;
  @Input()
  price: number;
  @Input()
  id : string;
  private userSub: Subscription;
  flag: boolean = false;
  private count : number;

  constructor( 
    private store: Store<fromApp.AppState>,
    private dataService : DataService
    ) { }

  ngOnInit() {}

  setItemData (elem : Object) : void {
    this.userSub = this.store
    .select('auth')
    .pipe(map(authState => authState.user))
    .subscribe(user => {
      this.dataService.setItemData (this.id,user.id, this.count)
        console.log(user.id)
    });
    console.log(this.id)
  }

  getCount (event){
    this.count = event.target.value
  }

}
