import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolabService {
    
  private videoData = [
    {url : 'https://www.youtube.com/embed/M9Pmf9AB4Mo', images : 'https://img.youtube.com/vi/M9Pmf9AB4Mo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/qzdGo7FBndA', images : 'https://img.youtube.com/vi/qzdGo7FBndA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_sGD6OqWG5E', images : 'https://img.youtube.com/vi/_sGD6OqWG5E/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/HoivTyVoWp4', images : 'https://img.youtube.com/vi/HoivTyVoWp4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/j28oCsQ1jJo', images : 'https://img.youtube.com/vi/j28oCsQ1jJo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/0SQLMzDybUQ', images : 'https://img.youtube.com/vi/0SQLMzDybUQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/-bofhasl5QQ', images : 'https://img.youtube.com/vi/-bofhasl5QQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/O5Y4RgIr3g4', images : 'https://img.youtube.com/vi/O5Y4RgIr3g4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/9FC04XYx3ts', images : 'https://img.youtube.com/vi/9FC04XYx3ts/mqdefault.jpg'}
  ];

  private videoData1 = [
    // {url : 'https://www.youtube.com/embed/tWK3_XQQjqo', images : 'https://img.youtube.com/vi/tWK3_XQQjqo/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/UFv_PKgcuIo', images : 'https://img.youtube.com/vi/UFv_PKgcuIo/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/_pR2dnMn_cjQ', images : 'https://img.youtube.com/vi/pR2dnMn_cjQ/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/Ud1qLM0eY-w', images : 'https://img.youtube.com/vi/Ud1qLM0eY-w/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ZqP96QYCtZA', images : 'https://img.youtube.com/vi/ZqP96QYCtZA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/jTPz5V0CUfM', images : 'https://img.youtube.com/vi/jTPz5V0CUfM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/rlG1zlgiXaw', images : 'https://img.youtube.com/vi/rlG1zlgiXaw/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/tVvXZO5czC4', images : 'https://img.youtube.com/vi/tVvXZO5czC4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/yPCsJW6rdWw', images : 'https://img.youtube.com/vi/yPCsJW6rdWw/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/a4nxKKqcY-Y', images : 'https://img.youtube.com/vi/a4nxKKqcY-Y/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/kE0A7uWpP3c', images : 'https://img.youtube.com/vi/kE0A7uWpP3c/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/LuNGAUIXBm0', images : 'https://img.youtube.com/vi/LuNGAUIXBm0/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/TYXFd4kwiTs', images : 'https://img.youtube.com/vi/TYXFd4kwiTs/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/RVWdekCRHVE', images : 'https://img.youtube.com/vi/RVWdekCRHVE/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/mu2KIt3ERMs', images : 'https://img.youtube.com/vi/mu2KIt3ERMs/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/RE9mjBnXSfk', images : 'https://img.youtube.com/vi/RE9mjBnXSfk/mqdefault.jpg'}
    ]
  private videoData2 = [
    {url : 'https://www.youtube.com/embed/7Vn1ftGHOVo', images : 'https://img.youtube.com/vi/7Vn1ftGHOVo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/XzHMtm0mJVQ', images : 'https://img.youtube.com/vi/XzHMtm0mJVQ/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/6FoAGb_nB9s', images : 'https://img.youtube.com/vi/6FoAGb_nB9s/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/FDkIhsTnLU4', images : 'https://img.youtube.com/vi/FDkIhsTnLU4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/GftC6B_W3S0', images : 'https://img.youtube.com/vi/GftC6B_W3S0/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/67vvj-jRgbY', images : 'https://img.youtube.com/vi/67vvj-jRgbY/mqdefault.jpg'}, //cool
    {url : 'https://www.youtube.com/embed/8sENfMrwfbI', images : 'https://img.youtube.com/vi/8sENfMrwfbI/mqdefault.jpg'}, //cool
    {url : 'https://www.youtube.com/embed/ROhUsaWytc4', images : 'https://img.youtube.com/vi/ROhUsaWytc4/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/I8N0ACAE-GE', images : 'https://img.youtube.com/vi/I8N0ACAE-GE/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ZlJBbVAIItA', images : 'https://img.youtube.com/vi/ZlJBbVAIItA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/KDEqJAFfnwc', images : 'https://img.youtube.com/vi/KDEqJAFfnwc/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/UUuIWXhJOfk', images : 'https://img.youtube.com/vi/UUuIWXhJOfk/mqdefault.jpg'}, //cool
    {url : 'https://www.youtube.com/embed/IcSUBUef8AI', images : 'https://img.youtube.com/vi/IcSUBUef8AI/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/xwplkfIAVLA', images : 'https://img.youtube.com/vi/xwplkfIAVLA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/oGxKPlL-Ln4', images : 'https://img.youtube.com/vi/oGxKPlL-Ln4/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/iTGNebTk-QU', images : 'https://img.youtube.com/vi/iTGNebTk-QU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lWDrQSkugRw', images : 'https://img.youtube.com/vi/lWDrQSkugRw/mqdefault.jpg'}, //cool
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

