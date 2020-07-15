import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userId: string;
  boss : boolean;
  connected : boolean;

  constructor(
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

}
