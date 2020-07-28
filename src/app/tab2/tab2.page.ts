import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { NewsModalPage } from '../news-modal/news-modal.page';

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
  
  title : '';
  sousTitle : '';
  article : '';
  date : '';
  by : '';
  desc : '';
  


  street ="wesh";
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
    this.firestore.collection('News').add({
      title : this.title,
      sousTitle : this.sousTitle,
      article : this.article,
      date : this.date,
      by : this.by,
      desc : this.desc
    });
    this.showForm = !this.showForm;
  }

  async openNewsModal(){
    const modal = await this.modalController.create({
      component : NewsModalPage,
      componentProps: {
        
      }
    });
    return await modal.present();
  }

}
