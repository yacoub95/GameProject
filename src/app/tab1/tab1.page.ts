import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data : any;

  constructor(
    public http : HttpClient
  ) {
    this.getData();
  }

  getData(){
    let url = 'http://newsapi.org/v2/everything?q=apex%20legends%20%20-Ubisoft%20-Androidpit%20-Ninjala%20-store%20-Gamer%20-fixe&language=fr&from=2020-06-13&sortBy=publishedAt&apiKey=ceb47a2155124c0cb9d11e95e6b094fe'
    this.http.get(url).subscribe(data => {
      this.data = data;
    });
  }

}
