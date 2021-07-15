import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

import { ActionSheetController } from '@ionic/angular';
import { Chart } from 'chart.js';

//https://enappd.com/blog/charts-in-ionic-4-apps-and-pwa-part-1/52/

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild('legendsUsage') legendsUsage;
  @ViewChild('legendsKPM') legendsKPM;

  userId: string;
  boss : boolean;
  connected : boolean;
  data: Object;

  selectSegment: string;

  bars: any;
  bars2: any;
  colorArray: any;
  graph : boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public http : HttpClient,
    public actionSheetController: ActionSheetController
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
    //this.getDataM();
    this.graph = false;
   }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.createBarChart();
    this.createBarChart2();
  }

  createBarChart() {
    this.bars = new Chart(this.legendsUsage.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Lifeline', 'Wraith', 'Octane', 'Bloodhound', 'Pathfinder', 'Bangalore', 'Valkyrie', 'Revenant', 'Gibraltar', 'Loba', 'Horizon', 'Mirage', 'Caustic', 'Wattson', 'Crypto', 'Fuse', 'Rampart'],
        datasets: [{
          barPercentage: 1,
          label: 'Utilisation en %',
          data: [14.6, 13.5, 13.1, 11.1, 9.7, 7.2, 5.1, 4.5, 4.4, 3.3, 2.9, 2.7, 2.1, 1.6, 1.5, 1.5, 1.1],
          backgroundColor: 'rgb(234, 96, 97)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(234, 96, 97)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createBarChart2() {
    this.bars2 = new Chart(this.legendsKPM.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Wraith', 'Pathfinder', 'Horizon', 'Bangalore', 'Lifeline', 'Mirage', 'Gibraltar', 'Valkyrie', 'Loba', 'Octane', 'Wattson', 'Crypto', 'Bloodhound', 'Revenant', 'Caustic', 'Rampart', 'Fuse'],
        datasets: [{
          data: [3.6, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.1, 2.8, 2.7, 2.7, 2.4, 2.3, 2.3, 2.2, 1.5, 0],
          backgroundColor: [
            'rgba(87, 75, 144,1.0)',
            'rgba(30, 144, 255,1.0)',
            'rgba(56, 103, 214,1.0)',
            'rgba(255, 99, 72,1.0)',
            'rgba(69, 170, 242,1.0)',
            'rgba(255, 121, 63,1.0)',
            'rgba(241, 196, 15,1.0)',
            'rgba(254, 164, 127,1.0)',
            'rgba(46, 204, 113,1.0)',
            'rgba(231, 76, 60,1.0)',
            'rgba(235, 59, 90,1.0)',
            'rgba(38, 222, 129,1.0)',
            'rgba(39, 174, 96,1.0)',
            'rgba(136, 84, 208,1.0)',
            'rgba(149, 175, 192,1.0)',
            'rgba(75, 101, 132,1.0)'
        ], // array should have same number of elements as number of dataset
          //borderColor: 'rgba(112, 161, 255,1.0)',// array should have same number of elements as number of dataset
          borderWidth: 0
        }]
      },
      
    });
  }

  displayGraphs() {
    this.createBarChart();
    this.createBarChart2();
    this.graph = false;
  }


  //getDataM(){
  ///  let headers = new HttpHeaders()
  //  let url = "https://public-api.tracker.gg/v2/apex/standard/profile/psn/SidaneDekur";
  //  headers.append('TRN-Api-Key', 'ea402410-8663-41ff-9997-7e94a78d8d62')
  //  headers.append('Accept', 'application/json')
  //  headers.append('Accept-Encoding', 'gzip')
   // headers.append('Access-Control-Allow-Origin', '*')
  //  let options :{
  //   headers: any
  //  }
  //  this.http.get(url,options).subscribe(data => {
  //    this.data = data;
  //    console.log(headers)
  //  });

  //}

  ionViewWillEnter(){
    this.selectSegment = "desc"
  }

  async choix() {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Albums',
      cssClass: 'my-custom-class',
      //mode: 'ios',
      buttons: [{
        text: 'Statistiques',
        //role: 'destructive',
        icon: 'stats-chart',
        handler: () => {
          console.log('Stats clicked');
          this.selectSegment = "stats";
          this.graph = true;
        }
      }, {
        text: 'Musiques',
        icon: 'musical-notes',
        handler: () => {
          console.log('Share clicked');
          this.selectSegment = "musics";
        }
      }, {
        text: 'Tracker',
        icon: 'server',
        handler: () => {
          console.log('Play clicked');
          this.selectSegment = "tracker";
        }
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



}
