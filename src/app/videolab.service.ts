import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolabService {
    
  private videoData = [
    {url : 'https://www.youtube.com/embed/_sGD6OqWG5E', images : 'https://img.youtube.com/vi/_sGD6OqWG5E/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=oQtHENM_GZU', images : 'https://img.youtube.com/vi/oQtHENM_GZU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=_oHJUcc7INs', images : 'https://img.youtube.com/vi/_oHJUcc7INs/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=_7eM9Msap7T4', images : 'https://img.youtube.com/vi/7eM9Msap7T4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=QzfsGxrCD4o', images : 'https://img.youtube.com/vi/QzfsGxrCD4o/mqdefault.jpg'},
    {url : 'https://www.youtube.com/watch?v=lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'}

  ];

  private videoData1 = [
    {url : 'https://www.youtube.com/embed/tWK3_XQQjqo', images : 'https://img.youtube.com/vi/tWK3_XQQjqo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/UFv_PKgcuIo', images : 'https://img.youtube.com/vi/UFv_PKgcuIo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_pR2dnMn_cjQ', images : 'https://img.youtube.com/vi/pR2dnMn_cjQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/Ud1qLM0eY-w', images : 'https://img.youtube.com/vi/Ud1qLM0eY-w/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/TYXFd4kwiTs', images : 'https://img.youtube.com/vi/TYXFd4kwiTs/mqdefault.jpg'}
  ]
  private videoData2 = [
    {url : 'https://www.youtube.com/embed/lYf7TZY2n1k', images : 'https://img.youtube.com/vi/lYf7TZY2n1k/mqdefault.jpg'},
  ]



  constructor() { }
  getvideos(){
    return this.videoData;
  }
  getvideos1(){
    return this.videoData1;
  }
  getvideos2(){
    return this.videoData2;
  }
}

