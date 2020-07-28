import { Component, OnInit } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.page.html',
  styleUrls: ['./news-modal.page.scss'],
})
export class NewsModalPage implements OnInit {

  title = null;
  ourNews: Observable<any[]>;

  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    public firestore: AngularFirestore
  ) {

   }

  ngOnInit() {
    this.ourNews = this.firestore.collection('News').valueChanges({idField: 'eventId'});
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
