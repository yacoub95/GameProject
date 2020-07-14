import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolabService {
    
  private videoData = [
    {url : 'https://www.youtube.com/embed/P9bqkJHsf7o', images : '/assets/chien1.jpg'},
    {url : 'https://www.youtube.com/embed/WGNvyaRsGw0', images : '/assets/chien.jpg'},
    {url : 'https://www.youtube.com/embed/P9bqkJHsf7o', images : '/assets/chien2.jpg'}
  ];



  constructor() { }
  getvideos(){
    return this.videoData;
  }
}

