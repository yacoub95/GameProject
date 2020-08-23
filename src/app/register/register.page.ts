import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';


//https://fireship.io/lessons/angularfire-google-oauth/
//https://www.positronx.io/ionic-firebase-authentication-tutorial-with-examples/
//https://stackoverflow.com/questions/61824512/how-to-add-user-data-to-firestore-in-ionic-angular

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  dataUser = {
    id: this.firestore.createId(),
    email:'',
    password:'',
    photoURL:'',
    username:'',
    favoriteGame:''
  };
  userId : string;
  connected : boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router,
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
  }

  ngOnInit() {
  }

  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Bizarre, il y a un problème',
      duration: 2000,
      position: 'top',
      color: 'medium'
    });
    toast.present();
  }

  async GoodSignUp() {
    const toast = await this.toastController.create({
      message: 'Bravo, vous êtes inscrit à Zimyy !',
      duration: 2000,
      position: 'top',
      color: 'medium'
    });
    toast.present();
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(auth => {
      console.log('utilisateur connecté');
      this.firestore.collection('Users').add(this.dataUser);
      this.dataUser = {
        id : '',
        email: '',
        password:'',
        photoURL: '',
        username:'',
        favoriteGame:''
      };
      this.router.navigate(['/tabs/tab5']);
      this.GoodSignUp();
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
    
  }


}
