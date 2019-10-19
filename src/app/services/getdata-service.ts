import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, from } from 'rxjs';


@Injectable()
export class GetDataService {
   
    constructor(
        private db: AngularFirestore,
    ) {}

  
    
}