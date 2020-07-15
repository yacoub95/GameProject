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
    {url : 'https://www.youtube.com/watch?v=NmFXlijfvuc', images : 'https://img.youtube.com/vi/NmFXlijfvuc/mqdefault.jpg'}
  ];

  private videoData1 = [
    {url : 'https://www.youtube.com/embed/tWK3_XQQjqo', images : 'https://img.youtube.com/vi/tWK3_XQQjqo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/UFv_PKgcuIo', images : 'https://img.youtube.com/vi/UFv_PKgcuIo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_pR2dnMn_cjQ', images : 'https://img.youtube.com/vi/pR2dnMn_cjQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/Ud1qLM0eY-w', images : 'https://img.youtube.com/vi/Ud1qLM0eY-w/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/TYXFd4kwiTs', images : 'https://img.youtube.com/vi/TYXFd4kwiTs/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/RVWdekCRHVE', images : 'https://img.youtube.com/vi/RVWdekCRHVE/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/mu2KIt3ERMs', images : 'https://img.youtube.com/vi/mu2KIt3ERMs/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/UUuIWXhJOfk', images : 'https://img.youtube.com/vi/UUuIWXhJOfk/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lWDrQSkugRw', images : 'https://img.youtube.com/vi/lWDrQSkugRw/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/8sENfMrwfbI', images : 'https://img.youtube.com/vi/8sENfMrwfbI/mqdefault.jpg'}
    ]
  private videoData2 = [
    {url : 'https://www.youtube.com/embed/7Vn1ftGHOVo', images : 'https://img.youtube.com/vi/7Vn1ftGHOVo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/XzHMtm0mJVQ', images : 'https://img.youtube.com/vi/XzHMtm0mJVQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/6FoAGb_nB9s', images : 'https://img.youtube.com/vi/6FoAGb_nB9s/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/FDkIhsTnLU4', images : 'https://img.youtube.com/vi/FDkIhsTnLU4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/GftC6B_W3S0', images : 'https://img.youtube.com/vi/GftC6B_W3S0/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ROhUsaWytc4', images : 'https://img.youtube.com/vi/ROhUsaWytc4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/I8N0ACAE-GE', images : 'https://img.youtube.com/vi/I8N0ACAE-GE/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ZlJBbVAIItA', images : 'https://img.youtube.com/vi/ZlJBbVAIItA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/IcSUBUef8AI', images : 'https://img.youtube.com/vi/IcSUBUef8AI/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/iTGNebTk-QU', images : 'https://img.youtube.com/vi/iTGNebTk-QU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/IYiuavb0tS0', images : 'https://img.youtube.com/vi/IYiuavb0tS0/mqdefault.jpg'}
    //{url : 'https://www.youtube.com/embed/lYf7TZY2n1k', images : 'https://img.youtube.com/vi/lYf7TZY2n1k/mqdefault.jpg'},
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

