import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-videopopup',
  templateUrl: './videopopup.page.html',
  styleUrls: ['./videopopup.page.scss'],
})
export class VideopopupPage implements OnInit {
  @Input()
  urlSafe : SafeResourceUrl;

  constructor(private modalController: ModalController, public sanitizer : DomSanitizer) { }
  passurl : string;
  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.passurl);
    console.log('${this.urlSafe}');
  }

}
