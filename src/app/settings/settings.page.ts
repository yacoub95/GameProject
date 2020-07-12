import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
