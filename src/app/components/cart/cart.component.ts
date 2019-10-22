import { Component, OnInit, Input  } from '@angular/core';
import { Subscription, Observable, Subject, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import {
  map
} from 'rxjs/operators';
import { DataService } from '../../services/getdata-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private dataService: DataService,
    private router: Router ) { }

  cartData : Array<Object> = []
  title : string;
  itemId : string;
  priceItem: number;
  count : number;
  totalPrice : number;

  ngOnInit() {
    this.renderDataCart()
  }

  private renderDataCart () : void {
    this.dataService.renderCartData()
      .subscribe(snapshot => {
        snapshot[0].docs.forEach(doc => {
          this.itemId = doc.data().itemId
          this.count = doc.data().count
          snapshot[1].docs.filter( doc => {
            if ( this.itemId === doc.data().id ) {
                this.cartData.push({
                  count : this.count,
                  title : doc.data().productName,
                  price : doc.data().price*this.count
                })
            }
          })
      })
      this.getTotalPrice ()
    })
    
  }

  private getTotalPrice () : void {
    this.totalPrice = 0
    this.cartData.forEach ( item => 
       this.totalPrice += item["price"]
      )
  }

  public deleteDataItem () : void {
    this.dataService.deleteItemCart (this.itemId)
       .then ( res => {
          this.cartData = []
          this.renderDataCart()}
      )
    }

  public goStore () : void {
    this.router.navigate (["/store"])
  }
}