import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolabService {
    
  private videoData = [
    /*{url : 'https://www.youtube.com/embed/YV12-kknruM', images : 'https://img.youtube.com/vi/YV12-kknruM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/5meAIPs-n90', images : 'https://img.youtube.com/vi/5meAIPs-n90/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/PfLXL0jtMUQ', images : 'https://img.youtube.com/vi/PfLXL0jtMUQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_ZpLbriJXvM', images : 'https://img.youtube.com/vi/_ZpLbriJXvM/mqdefault.jpg'},

    {url : 'https://www.youtube.com/embed/SCUXdRb5abU', images : 'https://img.youtube.com/vi/SCUXdRb5abU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/WS18WGCUSng', images : 'https://img.youtube.com/vi/WS18WGCUSng/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ANdAEztmFiA', images : 'https://img.youtube.com/vi/ANdAEztmFiA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/qzdGo7FBndA', images : 'https://img.youtube.com/vi/qzdGo7FBndA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/M9Pmf9AB4Mo', images : 'https://img.youtube.com/vi/M9Pmf9AB4Mo/mqdefault.jpg'}, // Endorsement
    {url : 'https://www.youtube.com/embed/quACziGJqQM', images : 'https://img.youtube.com/vi/quACziGJqQM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/qIC1XHaA89c', images : 'https://img.youtube.com/vi/qIC1XHaA89c/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/iRzZGQEPwY4', images : 'https://img.youtube.com/vi/iRzZGQEPwY4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_sGD6OqWG5E', images : 'https://img.youtube.com/vi/_sGD6OqWG5E/mqdefault.jpg'},*/

    /*Remastered --> Officiel*/
    {url : 'https://www.youtube.com/embed/oshvcDjEKZc', images : 'https://img.youtube.com/vi/oshvcDjEKZc/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ChZaqqoNg-0', images : 'https://img.youtube.com/vi/ChZaqqoNg-0/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/PJYy-e3kXnU', images : 'https://img.youtube.com/vi/PJYy-e3kXnU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/IC_JekVbJsQ', images : 'https://img.youtube.com/vi/IC_JekVbJsQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/8KWMwl-Qd0E', images : 'https://img.youtube.com/vi/8KWMwl-Qd0E/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/Z-xDoDSDM2Y', images : 'https://img.youtube.com/vi/Z-xDoDSDM2Y/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/OAWsJ-m1dV0', images : 'https://img.youtube.com/vi/OAWsJ-m1dV0/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/aprRC9PNMNU', images : 'https://img.youtube.com/vi/aprRC9PNMNU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_ZpLbriJXvM', images : 'https://img.youtube.com/vi/_ZpLbriJXvM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/YV12-kknruM', images : 'https://img.youtube.com/vi/YV12-kknruM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/PfLXL0jtMUQ', images : 'https://img.youtube.com/vi/PfLXL0jtMUQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/5meAIPs-n90', images : 'https://img.youtube.com/vi/5meAIPs-n90/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/qzdGo7FBndA', images : 'https://img.youtube.com/vi/qzdGo7FBndA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/SCUXdRb5abU', images : 'https://img.youtube.com/vi/SCUXdRb5abU/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/ANdAEztmFiA', images : 'https://img.youtube.com/vi/ANdAEztmFiA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/WS18WGCUSng', images : 'https://img.youtube.com/vi/WS18WGCUSng/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/lwp429eqER4', images : 'https://img.youtube.com/vi/lwp429eqER4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/quACziGJqQM', images : 'https://img.youtube.com/vi/quACziGJqQM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/iRzZGQEPwY4', images : 'https://img.youtube.com/vi/iRzZGQEPwY4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/qIC1XHaA89c', images : 'https://img.youtube.com/vi/qIC1XHaA89c/mqdefault.jpg'},
    
    /*{url : 'https://www.youtube.com/embed/HoivTyVoWp4', images : 'https://img.youtube.com/vi/HoivTyVoWp4/mqdefault.jpg'}, //1
    {url : 'https://www.youtube.com/embed/j28oCsQ1jJo', images : 'https://img.youtube.com/vi/j28oCsQ1jJo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/0SQLMzDybUQ', images : 'https://img.youtube.com/vi/0SQLMzDybUQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/-bofhasl5QQ', images : 'https://img.youtube.com/vi/-bofhasl5QQ/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/O5Y4RgIr3g4', images : 'https://img.youtube.com/vi/O5Y4RgIr3g4/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/9FC04XYx3ts', images : 'https://img.youtube.com/vi/9FC04XYx3ts/mqdefault.jpg'}*/
  ];

  private videoData1 = [
    // {url : 'https://www.youtube.com/embed/tWK3_XQQjqo', images : 'https://img.youtube.com/vi/tWK3_XQQjqo/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/UFv_PKgcuIo', images : 'https://img.youtube.com/vi/UFv_PKgcuIo/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/_pR2dnMn_cjQ', images : 'https://img.youtube.com/vi/pR2dnMn_cjQ/mqdefault.jpg'},
    //{url : 'https://www.youtube.com/embed/Ud1qLM0eY-w', images : 'https://img.youtube.com/vi/Ud1qLM0eY-w/mqdefault.jpg'},
    /*{url : 'https://www.youtube.com/embed/ZqP96QYCtZA', images : 'https://img.youtube.com/vi/ZqP96QYCtZA/mqdefault.jpg'},
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
    {url : 'https://www.youtube.com/embed/RE9mjBnXSfk', images : 'https://img.youtube.com/vi/RE9mjBnXSfk/mqdefault.jpg'}*/

    /*Remastered --> Stories From the Outlands*/
    {url : 'https://www.youtube.com/embed/FTk9VD2nPuw', images : 'https://img.youtube.com/vi/FTk9VD2nPuw/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/NKOVl6F8bjA', images : 'https://img.youtube.com/vi/NKOVl6F8bjA/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/iT4C1aIS9Ww', images : 'https://img.youtube.com/vi/iT4C1aIS9Ww/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/k-amupfoQBE', images : 'https://img.youtube.com/vi/k-amupfoQBE/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/M9Pmf9AB4Mo', images : 'https://img.youtube.com/vi/M9Pmf9AB4Mo/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/RH3Rp80rbkQ', images : 'https://img.youtube.com/vi/RH3Rp80rbkQ/mqdefault.jpg'},

    ]
  private videoData2 = [
    /*{url : 'https://www.youtube.com/embed/7Vn1ftGHOVo', images : 'https://img.youtube.com/vi/7Vn1ftGHOVo/mqdefault.jpg'},
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
    //{url : 'https://www.youtube.com/embed/lYf7TZY2n1k', images : 'https://img.youtube.com/vi/lYf7TZY2n1k/mqdefault.jpg'},*/

    /*Remastered --> Events*/
    
    {url : 'https://www.youtube.com/embed/w3bfxIMGGyY', images : 'https://img.youtube.com/vi/w3bfxIMGGyY/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/cO0rGsNQ-pw', images : 'https://img.youtube.com/vi/cO0rGsNQ-pw/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/JcjzFIPuk2M', images : 'https://img.youtube.com/vi/JcjzFIPuk2M/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/DPMnd_xKQng', images : 'https://img.youtube.com/vi/DPMnd_xKQng/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/rjIMSRMtVfw', images : 'https://img.youtube.com/vi/rjIMSRMtVfw/mqdefault.jpg'},

    {url : 'https://www.youtube.com/embed/H1I3VguohWM', images : 'https://img.youtube.com/vi/H1I3VguohWM/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/BwKQLghOG20', images : 'https://img.youtube.com/vi/BwKQLghOG20/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/WTUqQGPB21Q', images : 'https://img.youtube.com/vi/WTUqQGPB21Q/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/SEZPA2VT-YI', images : 'https://img.youtube.com/vi/SEZPA2VT-YI/mqdefault.jpg'},
    {url : 'https://www.youtube.com/embed/_sGD6OqWG5E', images : 'https://img.youtube.com/vi/_sGD6OqWG5E/mqdefault.jpg'},
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

