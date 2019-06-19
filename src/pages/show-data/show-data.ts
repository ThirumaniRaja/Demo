import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the ShowDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-data',
  templateUrl: 'show-data.html',
})
export class ShowDataPage {
  public textUrl="https://www.randomtext.me/api/";
   textData :Observable<any>;
   result:any =[];
   slideOpts = {
    effect: 'flip'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowDataPage');
    this.getText();
  }
  public getText(){
    console.log("home page method");
    this.textData = this.http.get(this.textUrl);
    this.textData.subscribe(data=>
      {
        this.result = JSON.stringify(data);
        console.log("myData=",this.result);
      });
}

}
