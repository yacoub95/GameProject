import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userId: string;
  boss : boolean;
  connected : boolean;
  data: Object;

  constructor(
    public afAuth: AngularFireAuth,
    public http : HttpClient
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
        this.userId = auth.uid;
      }
    });
    this.afAuth.authState.subscribe(auth => {
      if (this.userId == '4LW2JBh5J5gPlUK2XsNOQJntGV32') {
        this.boss = true;
      } else {
        this.boss = false;
      }
    });
    this.getDataM();
   }

  ngOnInit() {
  }
  getDataM(){
    let headers = new HttpHeaders()
    let url = "https://public-api.tracker.gg/v2/apex/standard/profile/psn/SidaneDekur";
    headers.append('TRN-Api-Key', 'ea402410-8663-41ff-9997-7e94a78d8d62')
    headers.append('Accept', 'application/json')
    headers.append('Accept-Encoding', 'gzip')
    headers.append('Access-Control-Allow-Origin', '*')
    let options :{
     headers: any
    }
    this.http.get(url,options).subscribe(data => {
      this.data = data;
      console.log(headers)
    });

  }

}
