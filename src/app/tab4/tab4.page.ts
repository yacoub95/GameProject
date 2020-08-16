import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

import { ActionSheetController } from '@ionic/angular';
import { Chart } from 'chart.js';

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
    this.getDataM();
    this.graph = false;
   }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.createBarChart();
    this.createBarChart2();
  }

  createBarChart() {
    let ctx = this.legendsUsage.nativeElement;
    ctx.height = 350;
    this.bars = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Wraith', 'Pathfinder', 'Lifeline', 'Bloodhound', 'Bangalore', 'Octane', 'Revenant', 'Gibraltar', 'Caustic', 'Mirage', 'Loba', 'Wattson', 'Crypto'],
        datasets: [{
          barPercentage: 1,
          label: 'Utilisation en %',
          data: [12.4, 11.7, 10.6, 9.9, 8.6, 8.2, 6.8, 6.4, 6.4, 5.4, 4.9, 4.6, 4.2],
          backgroundColor: 'rgba(112, 161, 255,1.0)', // array should have same number of elements as number of dataset
          borderColor: 'rgba(112, 161, 255,1.0)',// array should have same number of elements as number of dataset
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
    let ctx = this.legendsKPM.nativeElement;
    ctx.height = 350;
    this.bars2 = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Wraith', 'Pathfinder', 'Lifeline', 'Bangalore', 'Wattson', 'Gibraltar', 'Mirage', 'Loba', 'Octane', 'Revenant', 'Bloodhound', 'Crypto', 'Caustic'],
        datasets: [{
          data: [2.9, 2.6, 2.4, 2.2, 1.8, 1.8, 1.8, 1.7, 1.7, 1.4, 1.4, 1.3, 1.3],
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
            'rgba(39, 174, 96,1.0)'
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
