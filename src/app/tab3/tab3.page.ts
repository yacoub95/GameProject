import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'
import { VideopopupPage } from '../videopopup/videopopup.page';
import { VideolabService } from '../videolab.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private modalController : ModalController, private videolabService : VideolabService) {}
  items = [];
  items1 = [];
  items2 = [];
  config = {
    spaceBetween : 0,
    centeredSlides : true,
    slidesPerView: 1.4,
    loop : true,
    autplay : true
  }; 
  async videomodal(value) {
    const modal = this.modalController.create({
      component : VideopopupPage, 
      cssClass : 'my-modal-css',
      componentProps : {
        passurl : value
      }
    });
    return (await modal).present();
  }
  ngOnInit(){
    this.items = this.videolabService.getvideos();
    this.items1 = this.videolabService.getvideos1();
    this.items2 = this.videolabService.getvideos2();
    console.log(this.items);
    console.log(this.items1);
    console.log(this.items2);
  }
}
