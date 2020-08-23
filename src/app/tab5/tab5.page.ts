import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { SettingsPage } from '../settings/settings.page';
import { RegisterPage} from '../register/register.page';


//https://stackoverflow.com/questions/47206838/get-user-uid-from-firebase-via-service
//https://www.positronx.io/send-verification-email-new-user-firebase-angular/
//https://fireship.io/lessons/angularfire-google-oauth/
//https://medium.com/@c_innovative/implementing-password-reset-can-be-a-tricky-but-inevitable-task-737badfb7bab

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  dataUser = {
    email:'',
    password:''
  };
  connected : boolean;
  userId: string;
  boss : boolean;

  mail: string;
  method: any;

  constructor(
    private router: Router,
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    public modalController: ModalController
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
    this.afAuth.authState.subscribe(auth => {
      if (this.userId == '4LW2JBh5J5gPlUK2XsNOQJntGV32') {
        this.boss = true;
      } else {
        this.boss = false;
      }
    });
   }
  

  ngOnInit() {
  }


  login() {
    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(auth => {
      console.log('utilisateur connecté');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
  }

  logout() {
    this.afAuth.signOut();
  }

  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async openSettings() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }
  
}
