import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

import { SettingsPage } from '../settings/settings.page';
import { RegisterPage} from '../register/register.page';


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

  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  logout() {
    this.modalController.dismiss();
    this.afAuth.signOut();
  }

  async openSettings() {
    const modal = await this.modalController.create({
      component: SettingsPage
    });
    return await modal.present();
  }
  
}
