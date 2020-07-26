import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //data : any;
  newsData = {
    title: '',
    description: '',
    imageUrl: ''
  };

  constructor(
    public http : HttpClient
  ) {
    //this.getData();
    this.readAPI('GET https://api.mozambiquehe.re/news?lang=fr-fr&auth=SmiJL6fxH21t6JYJRpnn')
    .subscribe((data) => {
      console.log(data);
      this.newsData.title = data['title'];
      this.newsData.description = data['short_desc'];
      this.newsData.imageUrl = data['img'];
    });
  }

  //getData(){
    //let url = 'http://newsapi.org/v2/everything?q=apex%20legends%20%20-Ubisoft%20-Androidpit%20-Ninjala%20-store%20-%20-GTX%20-Ryzen&language=fr&sortBy=publishedAt&apiKey=ceb47a2155124c0cb9d11e95e6b094fe'
    //this.http.get(url).subscribe(data => {
      //this.data = data;
    //});
  //}



  readAPI(URL: string) {
    return this.http.get(URL);
  }
}
