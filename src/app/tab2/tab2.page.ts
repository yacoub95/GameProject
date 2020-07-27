import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userId: string;
  boss : boolean;
  connected : boolean;

  ourNews: Observable<any[]>;
  firebaseData ={
    title : '',
    sousTitle : '',
    article : '',
    date : '',
    by : '',
    desc : ''
  };

  showForm = false;

  constructor(
    public afAuth: AngularFireAuth,
    public modalController: ModalController,
    public firestore: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
        this.userId = auth.uid;
      }
    });
    this.afAuth.authState.subscribe(auth => {
      if (this.userId == '4LW2JBh5J5gPlUK2XsNOQJntGV32') {
        this.boss = true;
      } else {
        this.boss = false;
      }
    });
    this.ourNews = this.firestore.collection('News').valueChanges();
  }

  ngOnInit() {
  }

  add() {
    this.showForm = !this.showForm;
  }

  addOurNewsFirestore() {
    this.firestore.collection('News').add(this.firebaseData);
    this.firebaseData ={
      title : '',
      sousTitle : '',
      article : '',
      date : '',
      by : '',
      desc : ''
    };
    this.showForm = !this.showForm;
  }
}
