import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/getdata-service'
import { Item } from '../../models/Item/item.model'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  
  itemData : Item[] = []
  
  constructor(
    private  dataService: DataService
  ) {}

  ngOnInit() {
    this.renderData()
  }
   
  private renderData () : void {
    this.dataService.getItemData()
        .subscribe (snapshot => {
            snapshot.docs.forEach(doc => {
              this.itemData.push(doc.data())
            })
        console.log(this.itemData)
    
        })
  }

}
