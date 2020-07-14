import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  config = {
    spaceBetween : 0,
    centeredSlides : true,
    slidesPerView: 1.4,
    loop : true,
    autplay : true
  }; 

}
