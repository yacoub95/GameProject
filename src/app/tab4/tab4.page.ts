import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userId: string;
  boss : boolean;
  connected : boolean;

  astuces: Observable<any[]>;
  firebaseText: string;
  showForm = false;
  showSend = false;

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
    this.astuces = this.firestore.collection('Astuces').valueChanges();
   }

  ngOnInit() {
  }

  add() {
    this.showForm = !this.showForm;
  }

  addAstuceFirestore() {
    this.firestore.collection('Astuces').add({
        text: this.firebaseText
    });
    this.firebaseText = '';
    this.showForm = !this.showForm;
  }

  send() {
    this.showSend = !this.showSend;
  }



}
