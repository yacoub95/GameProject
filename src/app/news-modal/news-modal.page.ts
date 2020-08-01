import { Component, OnInit, Input } from '@angular/core';

import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

//https://dottedsquirrel.com/firebase/how-to-create-and-read-things-in-firebase/
//https://medium.com/@alejandrolp1986/ionic-5-app-crud-ops-with-firebase-firestore-46911e208a04
//https://www.it-swarm.dev/fr/angular/firestore-recuperation-des-documents-de-la-collection/835675614/
//https://javebratt.com/crud-ionic-firestore/
//https://forum.ionicframework.com/t/dynamic-adding-new-input-field/117534

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.page.html',
  styleUrls: ['./news-modal.page.scss'],
})
export class NewsModalPage implements OnInit {

  id: string;
  title: string;
  sousTitle: string;
  article: string;
  date: string;
  by: string;
  desc: string;
  image: string;
  
  ourNew: Observable<any[]>;


  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    public firestore: AngularFirestore
  ) {
  
   }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
