import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolabService {
    
  private videoData = [
    {url : 'https://www.youtube.com/embed/_sGD6OqWG5E', images : 'https://img.youtube.com/vi/_sGD6OqWG5E/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=RH3Rp80rbkQ', images : 'https://img.youtube.com/vi/RH3Rp80rbkQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=dCXOnxM8sdY', images : 'https://img.youtube.com/vi/dCXOnxM8sdY/mqdefault.jpg'}

  ];



  constructor() { }
  getvideos(){
    return this.videoData;
  }
}

