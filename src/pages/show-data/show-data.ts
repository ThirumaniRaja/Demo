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
   imageData:Observable<any>;
  randomNumber='';
  imageUrl='';
  num = [];
  items = [];
  link ="https://picsum.photos/id/";
  
   result:any =[];
   slideOpts = {
    effect: 'flip'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowDataPage');
    this.getText();
    this.getImage();
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
public getImage(){
  console.log("home page method");
  var digits = '0123456789'; 
  for (let i = 0; i < 3; i++ ) { 
  this.randomNumber += digits[Math.floor(Math.random() * 10)]; 
  console.log("randomnumber",this.randomNumber);
  
}
this.imageUrl = this.link+this.randomNumber+"/200/200";
console.log("randomIm",this.imageUrl);

}
}