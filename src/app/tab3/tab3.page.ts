import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular'
import { VideopopupPage } from '../videopopup/videopopup.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController : ModalController) {}

  config = {
    spaceBetween : 0,
    centeredSlides : true,
    slidesPerView: 1.4,
    loop : true,
    autplay : true
  }; 
  async videomodal() {
    const modal = this.modalController.create({
      component : VideopopupPage, 
      cssClass : 'my-modal-css'
    });
    return (await modal).present();
  }
}
