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

  astuces: Observable<any[]>;
  ourNews: Observable<any[]>;

  astuceText: string;
  newsData = {
    id : this.firestore.createId(),
    title : '',
    sousTitle : '',
    article : '',
    date : '',
    by : '',
    desc : '',
    image:'',
    game: ''
  }
  suggestionAstuce: string;
  
  showFormAstuces = false;
  showFormNews = false;
  showSend = false;

  selectSegment: string;

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
    this.ourNews = this.firestore.collection('News').valueChanges();
  }

  ionViewWillEnter(){
    this.selectSegment = "astuces"
  }

  ngOnInit() {
  }

  send() {
    this.showSend = !this.showSend;
  }

  sendSuggestionAstuce(){
    this.firestore.collection('SuggestionOfAstuces').add({
      text: this.suggestionAstuce
    });
    this.suggestionAstuce = '';
    this.showSend = !this.showSend;
  }

  addAstuces() {
    this.showFormAstuces = !this.showFormAstuces;
  }

  addAstuceFirestore() {
    this.firestore.collection('Astuces').add({
      text: this.astuceText
    });
    this.astuceText = '';
    this.showFormAstuces = !this.showFormAstuces;
  }

  addNews() {
    this.showFormNews = !this.showFormNews;
  }

  addOurNewsFirestore() {
    this.firestore.collection('News').add(this.newsData);
    this.newsData = {
      id :'',
      title : '',
      sousTitle : '',
      article : '',
      date : '',
      by : '',
      desc : '',
      image:'',
      game: ''
    };
    this.showFormNews = !this.showFormNews;
  }

  async openNewsModal(id, title, sousTitle, article, date, by, desc, image){
    const modal = await this.modalController.create({
      component : NewsModalPage,
      componentProps: {
        'id' : id,
        'title': title,
        'sousTitle': sousTitle,
        'article': article,
        'date': date,
        'by': by,
        'desc': desc,
        'image': image
      }
    });
    return await modal.present();
  }

}
