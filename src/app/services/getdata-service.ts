import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Item } from '../models/Item/item.model'

@Injectable({
    providedIn: 'root',
})
export class DataService {
   
    constructor(
        private db: AngularFirestore,
    ) {}

    public getItemData (): Observable<any> {
        return this.db
            .collection('Items')
            .get()
    }

    public setItemData ( itemId, userId, count) {
        this.db
        .collection('Cart')
        .doc(itemId)
        .set({
            userId,
            itemId,
            count
        });
    }
    
}