import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  connected : boolean;
  darkMode: boolean = true;

  constructor(
    public afAuth: AngularFireAuth,
    public modalController: ModalController
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
   }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  logout() {
    this.modalController.dismiss();
    this.afAuth.signOut();
  }

  changeTheme(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
}
