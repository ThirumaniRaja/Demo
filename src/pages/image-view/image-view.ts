import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the ImageViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-view',
  templateUrl: 'image-view.html',
})
export class ImageViewPage {
  imageData:Observable<any>;
  randomNumber='';
  imageUrl='';
  num = [];
  items = [];
  link ="https://picsum.photos/id/";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageViewPage');
    this.getImage();

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  public getImage(){
    console.log("home page method");

    for (let j=0;j<100;j++)
    {
    var digits = '0123456789'; 
    for (let i = 0; i < 3; i++ ) { 
        this.randomNumber += digits[Math.floor(Math.random() * 10)]; 
    } 
    console.log("randomnumber",this.randomNumber);
    this.imageUrl = this.link+this.randomNumber+"/400/400";
    this.num[j]=this.imageUrl;
    this.randomNumber='';
  }
  console.log("image is",this.num);
    // this.imageData = this.http.get(this.imageUrl);
    // this.imageData.subscribe(data=>
    //   {
    //     this.num= data;
    //     console.log("myImage=",this.num);
    //   });
}

}
