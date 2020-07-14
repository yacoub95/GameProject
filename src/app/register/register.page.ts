import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  dataUser = {
    email:'',
    password:'',
    username:'',
    game:''
  };
  connected : boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });
  }

  ngOnInit() {
  }

  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async GoodSignUp() {
    const toast = await this.toastController.create({
      message: 'Bravo, vous êtes inscrit !',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(auth => {
      console.log('utilisateur connecté');
      this.GoodSignUp();
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
    this.dataUser = {
      email: '',
      password: '',
      username:'',
      game:''
    };
  }

}
