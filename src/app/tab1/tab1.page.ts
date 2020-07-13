import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public http : HttpClient
  ) {
    this.getData();
  }
  getData(){
    let url = 'http://newsapi.org/v2/everything?q=apex%20legends&language=fr&from=2020-06-13&sortBy=publishedAt&apiKey=ceb47a2155124c0cb9d11e95e6b094fe';
    this.http.get(url).subscribe(data => {
      this.data = data;
    });
  }

}
